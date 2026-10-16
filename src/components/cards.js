import { LINKS } from '../data/links.js';
import { SOCIAL } from '../data/social.js';
import { ICONS } from '../data/icons.js';

// Status badge helper
function renderStatusBadge(status) {
  if (status === 'live-beta' || status === 'live-building') {
    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20" title="Live (Beta)">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="h-1.5 w-1.5 -ml-1 rounded-full bg-amber-500 ring-2 ring-white dark:ring-neutral-900"></span>
        <span>Live (Beta)</span>
      </span>
    `;
  }

  const configs = {
    live: {
      label: 'Live',
      badgeCls: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
      dotCls: 'bg-emerald-500',
      pingCls: 'bg-emerald-400',
    },
    building: {
      label: 'In Development',
      badgeCls: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
      dotCls: 'bg-amber-500',
      pingCls: 'bg-amber-400',
    },
    offline: {
      label: 'Offline',
      badgeCls: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
      dotCls: 'bg-gray-400',
      pingCls: 'bg-gray-300',
    },
  };

  const c = configs[status] || configs.live;

  return `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.badgeCls}" title="Status: ${c.label}">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full ${c.pingCls} opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 ${c.dotCls}"></span>
      </span>
      <span>${c.label}</span>
    </span>
  `;
}

// Render Social Links
export function renderSocialLinks() {
  const container = document.getElementById('social');
  if (!container) return;
  container.innerHTML = '';

  SOCIAL.forEach((item) => {
    const a = document.createElement('a');
    a.href = item.href;
    a.rel = 'me noopener noreferrer';
    a.target = item.href.startsWith('http') ? '_blank' : '_self';
    a.className =
      'group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-800 border border-gray-200/80 dark:border-neutral-800/80 shadow-xs hover:border-primary/40 dark:hover:border-primary/40 hover:text-primary dark:hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40';
    a.innerHTML = `
      <span class="transition-transform group-hover:scale-110">${ICONS[item.icon] || ''}</span>
      <span>${item.label}</span>
    `;
    container.appendChild(a);
  });
}

// Render Project Cards
export function renderProjectCards() {
  const grid = document.getElementById('grid');
  if (!grid) return;
  grid.innerHTML = '';

  LINKS.forEach((item) => {
    const card = document.createElement('article');
    card.className =
      'group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 dark:border-neutral-800/80 bg-white/75 dark:bg-neutral-900/75 backdrop-blur-md p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 focus-within:ring-2 focus-within:ring-primary/40';

    const tagsHtml = (item.tags || [])
      .map(
        (t) =>
          `<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100/80 dark:bg-neutral-800/80 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-neutral-700/60">${t}</span>`
      )
      .join('');

    const repoButton = item.repo
      ? `<a href="${item.repo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-1 px-1.5 rounded hover:bg-gray-100/50 dark:hover:bg-neutral-800/50" aria-label="GitHub Source Code for ${item.label}">
          ${ICONS.github || ''}
          <span class="sr-only">GitHub</span>
        </a>`
      : '';

    card.innerHTML = `
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 transition-colors group-hover:bg-primary group-hover:text-white">
              ${ICONS[item.icon] || ''}
            </div>
            <div>
              <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-300 transition-colors flex items-center gap-1.5">
                <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="focus:outline-none after:absolute after:inset-0">
                  ${item.label}
                </a>
              </h2>
            </div>
          </div>
          <div class="shrink-0 z-10 relative">
            ${renderStatusBadge(item.status)}
          </div>
        </div>
        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
          ${item.desc || ''}
        </p>
      </div>

      <div class="pt-3 border-t border-gray-100 dark:border-neutral-800/80 flex items-center justify-between gap-2 z-10 relative">
        <div class="flex flex-wrap gap-1.5">
          ${tagsHtml}
        </div>
        ${repoButton}
      </div>
    `;

    grid.appendChild(card);
  });
}
