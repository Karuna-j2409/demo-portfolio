// =========================================================
// Karuna Sharma – Portfolio interactions
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initNavbar();
  initScrollReveal();
  initProjectFilter();
  initContactForm();
  initBackToTop();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// ---------- 1. Typing effect in the hero ----------
function initTypingEffect() {
  const roles = ['Full Stack Developer', 'Backend Enthusiast', 'Computer Science Student', 'Problem Solver'];
  const target = document.getElementById('typedText');
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = current.substring(0, charIndex);

    let delay = deleting ? 50 : 100;
    if (!deleting && charIndex === current.length) {
      delay = 1800;            // pause on the full word
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }
    setTimeout(type, delay);
  }

  type();
}

// ---------- 2. Navbar: shadow on scroll + close mobile menu after a click ----------
function initNavbar() {
  const navbar = document.getElementById('mainNav');
  const menu = document.getElementById('navLinks');

  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) collapse.hide();
    });
  });
}

// ---------- 3. Reveal sections, fill skill bars and count up stats when visible ----------
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add('visible');

        el.querySelectorAll('.progress-bar').forEach((bar) => {
          bar.style.width = `${bar.dataset.width}%`;
        });
        el.querySelectorAll('.counter').forEach(animateCounter);

        observer.unobserve(el); // animate only once
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    counter.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ---------- 4. Project filter buttons ----------
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.project-item');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hide', !show);
      });
    });
  });
}

// ---------- 5. Contact form validation ----------
// GitHub Pages hosts static files only (no backend), so the form is validated
// in the browser and a success message is shown.
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alertBox.classList.add('d-none');

    if (!form.checkValidity()) {
      form.classList.add('was-validated'); // shows Bootstrap's red/green feedback
      return;
    }

    form.reset();
    form.classList.remove('was-validated');
    alertBox.classList.remove('d-none');
    setTimeout(() => alertBox.classList.add('d-none'), 5000);
  });
}

// ---------- 6. Back-to-top button ----------
function initBackToTop() {
  const button = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 400);
  });
}
