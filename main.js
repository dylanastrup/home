// ====================================================================
// ===== DATA & CONFIGURATION =====
// ====================================================================

const TAGLINES = ['Engineer','•','Outdoor adventurer','•','Photographer','•','Maker','•','Software tinkerer','•','Outrigger paddler','•'];
const LINKS = [
    { label: 'Resume', href: 'https://resume.dylanastrup.com/', desc: 'Experience, projects, and contact', icon: 'file-text', status: 'live' },
    { label: 'Recipe Book', href: 'https://recipes.dylanastrup.com/', desc: 'My full‑stack recipe app (React + Flask)', icon: 'book-open', status: 'offline' },
    { label: 'Blog', href: 'https://blog.dylanastrup.com/', desc: 'Notes on projects & experiments', icon: 'rss', status: 'live' },
    { label: 'Photos', href: 'https://photos.dylanastrup.com/', desc: 'Photography and galleries', icon: 'camera', status: 'live' }
];
const SOCIAL = [
    { label: 'Email', href: 'mailto:dylan@dylanastrup.com', icon: 'mail' },
    { label: 'Twitter/X', href: 'https://x.com/dylanastrup', icon: 'twitter' },
    { label: 'Instagram', href: 'https://www.instagram.com/astrup.jpg/', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dylanastrup/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/dylanastrup', icon: 'github' },
    { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/dylanastrup', icon: 'coffee' }
];

// SVG Icons are stored here
const ICONS = {
    mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8l8 5 8-5"/><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/></svg>',
    twitter: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.633 7.997c.013.18.013.36.013.54 0 5.5-4.19 11.84-11.84 11.84-2.35 0-4.53-.69-6.36-1.87.33.04.65.05.99.05a8.38 8.38 0 0 0 5.2-1.79 4.19 4.19 0 0 1-3.91-2.9c.26.04.52.06.8.06.38 0 .76-.05 1.12-.15a4.18 4.18 0 0 1-3.36-4.1v-.05c.56.31 1.2.5 1.88.52a4.17 4.17 0 0 1-1.86-3.47c0-.77.21-1.48.57-2.1a11.88 11.88 0 0 0 8.62 4.37 4.71 4.71 0 0 1-.1-.96 4.18 4.18 0 0 1 7.24-2.86 8.26 8.26 0 0 0 2.65-1.01 4.2 4.2 0 0 1-1.84 2.3 8.32 8.32 0 0 0 2.4-.65 8.98 8.98 0 0 1-2.1 2.17Z"/></svg>',
    instagram: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>',
    linkedin: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554V14.89c0-1.327-.027-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.94v5.658H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433A2.062 2.062 0 1 1 5.34 3.31a2.062 2.062 0 0 1 0 4.123zM6.988 20.452H3.683V9h3.305v11.452z"/></svg>',
    github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53v-1.86c-3.06.66-3.7-1.3-3.7-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.19.69-1.47-2.44-.28-5.01-1.22-5.01-5.45 0-1.2.43-2.18 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.01 1.13A10.4 10.4 0 0 1 12 6.8c.93.01 1.86.13 2.73.37 2.09-1.43 3.01-1.13 3.01-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.76 1.13 2.96 0 4.24-2.58 5.16-5.03 5.44.39.33.74.98.74 1.98v2.94c0 .29.19.63.76.52 4.36-1.45 7.5-5.56 7.5-10.4C23.02 5.24 18.27.5 12 .5Z"/></svg>',
    coffee: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h3a2 2 0 0 1 0 4h-3"/><path d="M2 8h16v5a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/></svg>',
    'file-text': '<svg class="icon-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
    'book-open': '<svg class="icon-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>',
    rss: '<svg class="icon-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>',
    camera: '<svg class="icon-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'
};


// ====================================================================
// ===== DOM BUILDING & HELPER FUNCTIONS =====
// ====================================================================

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Build social nav
function buildSocialNav() {
    const social = document.getElementById('social');
    SOCIAL.forEach(s => {
        const a = document.createElement('a');
        a.href = s.href; a.rel = 'me noopener'; a.target = s.href.startsWith('http') ? '_blank' : '_self';
        a.className = 'link-underline hover:text-primary transition inline-flex items-center gap-1.5'; 
        a.innerHTML = `${ICONS[s.icon] ?? ''}<span>${s.label}</span>`;
        social.appendChild(a);
    });
}


// ===== Status badge helper (incl. dual-dot Live Beta) =====
function statusBadge(status){
    const map = {
        live:      { label: 'Live',            cls: 'badge-live',     dot: 'dot-live' },
        building:  { label: 'In development',  cls: 'badge-building', dot: 'dot-building' },
        offline:   { label: 'Offline',         cls: 'badge-offline',  dot: 'dot-offline' }
    };
    if (status === 'live-beta' || status === 'live-building') {
        return `
            <span class="status-badge badge-live" aria-label="Status: Live (Beta)" title="Live (Beta)">
                <span class="dot ${map.live.dot}" aria-hidden="true"></span>
                <span class="dot ${map.building.dot}" aria-hidden="true" style="width:.45rem;height:.45rem;margin-left:-.25rem;border:2px solid rgba(255,255,255,.7);"></span>
                Live (Beta)
            </span>
        `;
    }
    const m = map[status] || map.live;
    return `<span class="status-badge ${m.cls}" aria-label="Status: ${m.label}" title="${m.label}"><span class="dot ${m.dot}" aria-hidden="true"></span>${m.label}</span>`;
}

// Build link cards
function buildLinkCards() {
    const grid = document.getElementById('grid');
    LINKS.forEach(item => {
        const card = document.createElement('a');
        card.href = item.href; card.target = item.href.startsWith('http') ? '_blank' : '_self';
        card.rel = 'noopener';
        card.className = 'group relative rounded-2xl bg-white dark:bg-neutral-900 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40';

        const badge = statusBadge(item.status);
        card.innerHTML = `
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-2">${ICONS[item.icon] ?? ''}
                    <h2 class="text-lg font-medium group-hover:underline text-gray-900 dark:text-gray-100">${item.label}</h2>
                </div>
                <div class="shrink-0">${badge}</div>
            </div>
            <p class="mt-1 text-sm group-hover:underline text-gray-600 dark:text-gray-300">${item.desc ?? ''}</p>`;
        grid.appendChild(card);
    });
}

// Theme toggle logic
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    
    function applyThemeInfo(){
        const isDark = document.documentElement.classList.contains('dark');
        icon.textContent = isDark ? '🌙' : '🌞';
        label.textContent = isDark ? 'Dark' : 'Light';
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch(e) {}
    }
    
    toggle.addEventListener('click', () => { document.documentElement.classList.toggle('dark'); applyThemeInfo(); });
    applyThemeInfo();
}


// Local time in Ventura, CA
function updateLocalTime(){
    const timeEl = document.getElementById('localtime');
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' });
    timeEl.textContent = `Ventura, CA — ${fmt.format(now)}`;
}
// Set initial time and update every second
updateLocalTime();
setInterval(updateLocalTime, 1000);


// ==== Organic blobs builder (hidden & flowy) ====
function buildBlobs(){
    const host = document.getElementById('bg-blobs');
    if (!host) return;
    host.innerHTML = '';
    const count = 12;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'blob';
        const size = Math.round(220 + Math.random()*260);
        const dur = Math.round(28 + Math.random()*18) + 's';
        const spin = Math.round(80 + Math.random()*60) + 's';
        const dx = (Math.random()*200 - 100) + 'px';
        const dy = (Math.random()*200 - 100) + 'px';
        const x = Math.round(Math.random()*100) + '%';
        const y = Math.round(Math.random()*100) + '%';
        const op = (0.18 + Math.random()*0.10).toFixed(2);
        const rot = Math.round(Math.random()*360) + 'deg';
        const hueBase = Math.random() < 0.5 ? 200 : 165;
        const h = Math.round(hueBase + Math.random()*25);
        const points = 10 + Math.floor(Math.random()*4);
        const poly = [];
        for (let p=0; p<points; p++){
            const ang = (p/points) * Math.PI*2;
            const r = 42 + Math.random()*18;
            const px = 50 + Math.cos(ang) * r;
            const py = 50 + Math.sin(ang) * (r * (0.9 + Math.random()*0.2));
            poly.push(`${px.toFixed(2)}% ${py.toFixed(2)}%`);
        }
        el.style.setProperty('--size', size+'px');
        el.style.setProperty('--dur', dur);
        el.style.setProperty('--spin', spin);
        el.style.setProperty('--dx', dx);
        el.style.setProperty('--dy', dy);
        el.style.setProperty('--x', x);
        el.style.setProperty('--y', y);
        el.style.setProperty('--op', op);
        el.style.setProperty('--rot', rot);
        el.style.setProperty('--h', h);
        el.style.setProperty('--poly', poly.join(', '));
        host.appendChild(el);
    }
}

// ===== Ticker (centered + hover/tap pause) =====
let rafId = null;
function startMarquee(){
    const track = document.getElementById('track');
    const marquee = document.querySelector('.marquee');

    let paused = false;
    marquee.addEventListener('mouseenter', () => paused = true);
    marquee.addEventListener('mouseleave', () => paused = false);
    marquee.addEventListener('touchstart', () => paused = true, { passive: true });
    marquee.addEventListener('touchend', () => paused = false, { passive: true });

    const sequenceHTML = TAGLINES.map(t => `<span class="w">${t}</span>`).join(' ');
    track.innerHTML = `<span class="seq">${sequenceHTML}</span><span class="seq">${sequenceHTML}</span>`;

    let offset = 0; const speed = 24;
    const seqEls = track.querySelectorAll('.seq');
    // Wait for elements to render before measuring offsetWidth
    setTimeout(() => {
        const halfWidth = seqEls[0].offsetWidth;
        const container = marquee.offsetWidth;

        const tokenEls = seqEls[0].querySelectorAll('.w');
        let widthToCenter = 0;
        for (let i = 0; i < 5 && i < tokenEls.length; i++) widthToCenter += tokenEls[i].offsetWidth;
        const centerOfGroup = widthToCenter / 2;
        offset = (container / 2) - centerOfGroup;
        
        // Start animation loop once measurements are taken
        let last = performance.now();
        function frame(now){
            rafId = requestAnimationFrame(frame);
            const dt = (now - last) / 1000; last = now;
            if (!paused) {
                offset -= speed * dt;
                if (offset <= -halfWidth) offset += halfWidth;
                track.style.transform = `translateX(${offset}px)`;
            }
        }
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(frame);
    }, 0); // Use setTimeout to ensure DOM is ready for measurements
}

// ====================================================================
// ===== INIT & EVENT LISTENERS =====
// ====================================================================

function init() {
    buildSocialNav();
    buildLinkCards();
    setupThemeToggle();
    // Build blobs and marquee on load and resize
    buildBlobs(); 
    startMarquee();
}

// Init when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', () => {
    if (rafId) cancelAnimationFrame(rafId);
    document.getElementById('track').style.transform = 'translateX(0)';
    buildBlobs();
    startMarquee();
});