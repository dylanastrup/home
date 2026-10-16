export function setupBackground() {
  const host = document.getElementById('bg-blobs');
  if (!host) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  host.innerHTML = '';
  const count = 10;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'blob';

    const size = Math.round(240 + Math.random() * 240);
    const dur = Math.round(28 + Math.random() * 16) + 's';
    const spin = Math.round(80 + Math.random() * 50) + 's';
    const dx = Math.round(Math.random() * 160 - 80) + 'px';
    const dy = Math.round(Math.random() * 160 - 80) + 'px';
    const x = Math.round(Math.random() * 100) + '%';
    const y = Math.round(Math.random() * 100) + '%';
    const op = (0.16 + Math.random() * 0.10).toFixed(2);
    const rot = Math.round(Math.random() * 360) + 'deg';
    const hueBase = Math.random() < 0.5 ? 200 : 165;
    const h = Math.round(hueBase + Math.random() * 25);

    const points = 10 + Math.floor(Math.random() * 4);
    const poly = [];
    for (let p = 0; p < points; p++) {
      const ang = (p / points) * Math.PI * 2;
      const r = 42 + Math.random() * 18;
      const px = 50 + Math.cos(ang) * r;
      const py = 50 + Math.sin(ang) * (r * (0.9 + Math.random() * 0.2));
      poly.push(`${px.toFixed(2)}% ${py.toFixed(2)}%`);
    }

    el.style.setProperty('--size', `${size}px`);
    el.style.setProperty('--dur', dur);
    el.style.setProperty('--spin', spin);
    el.style.setProperty('--dx', dx);
    el.style.setProperty('--dy', dy);
    el.style.setProperty('--x', x);
    el.style.setProperty('--y', y);
    el.style.setProperty('--op', op);
    el.style.setProperty('--rot', rot);
    el.style.setProperty('--h', `${h}`);
    el.style.setProperty('--poly', poly.join(', '));

    host.appendChild(el);
  }
}
