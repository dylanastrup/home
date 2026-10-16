import './styles/main.css';
import { setupThemeToggle } from './components/theme.js';
import { setupClock } from './components/clock.js';
import { setupMarquee } from './components/marquee.js';
import { setupBackground } from './components/background.js';
import { renderSocialLinks, renderProjectCards } from './components/cards.js';

function init() {
  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize components
  setupThemeToggle();
  setupClock();
  renderSocialLinks();
  renderProjectCards();
  setupBackground();
  setupMarquee();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
