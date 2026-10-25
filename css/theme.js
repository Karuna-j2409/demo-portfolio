// =========================================================
// Feature: Dark mode toggle
// - Uses the visitor's saved choice (localStorage), otherwise their OS setting
// - Switches Bootstrap 5.3 colour mode via <html data-bs-theme="...">
// =========================================================

(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const icon = button.querySelector('i');

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  button.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });

  applyTheme(getPreferredTheme());
})();
