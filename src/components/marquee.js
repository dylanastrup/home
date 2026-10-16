import { TAGLINES } from '../data/taglines.js';

let rafId = null;

export function setupMarquee() {
  const track = document.getElementById('track');
  const marquee = document.querySelector('.marquee');
  if (!track || !marquee) return;

  // Check reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    track.innerHTML = TAGLINES.map(t => `<span class="inline-block px-1">${t}</span>`).join(' ');
    track.style.transform = 'none';
    return;
  }

  let paused = false;
  marquee.addEventListener('mouseenter', () => (paused = true));
  marquee.addEventListener('mouseleave', () => (paused = false));
  marquee.addEventListener('touchstart', () => (paused = true), { passive: true });
  marquee.addEventListener('touchend', () => (paused = false), { passive: true });

  const sequenceHTML = TAGLINES.map(t => `<span class="marquee-token">${t}</span>`).join(' ');
  track.innerHTML = `<span class="marquee-seq">${sequenceHTML}</span><span class="marquee-seq">${sequenceHTML}</span>`;

  let offset = 0;
  const speed = 26; // pixels per second

  // Allow DOM to settle before measuring
  requestAnimationFrame(() => {
    const seqEls = track.querySelectorAll('.marquee-seq');
    if (!seqEls.length) return;

    const halfWidth = seqEls[0].offsetWidth;
    const container = marquee.offsetWidth;
    const tokenEls = seqEls[0].querySelectorAll('.marquee-token');

    let widthToCenter = 0;
    for (let i = 0; i < 5 && i < tokenEls.length; i++) {
      widthToCenter += tokenEls[i].offsetWidth;
    }
    const centerOfGroup = widthToCenter / 2;
    offset = container / 2 - centerOfGroup;

    let lastTime = performance.now();

    function loop(now) {
      rafId = requestAnimationFrame(loop);
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!paused) {
        offset -= speed * dt;
        if (offset <= -halfWidth) {
          offset += halfWidth;
        }
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    }

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(loop);
  });
}

// Window resize handler
window.addEventListener('resize', () => {
  if (rafId) cancelAnimationFrame(rafId);
  const track = document.getElementById('track');
  if (track) track.style.transform = 'translate3d(0, 0, 0)';
  setupMarquee();
});
