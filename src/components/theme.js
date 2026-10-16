export function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme, persist = false) {
    const isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (themeIcon) {
      themeIcon.textContent = isDark ? '🌙' : '🌞';
    }
    if (themeLabel) {
      themeLabel.textContent = isDark ? 'Dark' : 'Light';
    }

    if (persist) {
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // ignore
      }
    }
  }

  // Initial apply
  applyTheme(getPreferredTheme(), false);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      const nextTheme = isCurrentlyDark ? 'light' : 'dark';
      
      // Add temporary transition class for smooth theme shift
      document.documentElement.classList.add('theme-transition');
      applyTheme(nextTheme, true);
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);
    });
  }

  // Listen to OS system theme changes if no manual override
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    try {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    } catch {
      // ignore
    }
  });
}
