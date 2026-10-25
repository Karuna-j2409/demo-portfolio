# Karuna Sharma – Personal Portfolio

Module 4 · Practical 1 — a responsive personal portfolio website built with **HTML5, CSS3, Bootstrap 5 and JavaScript**, version-controlled with **Git**, hosted on **GitHub** and deployed with **GitHub Pages**.

🔗 **Live site:** `https://<your-github-username>.github.io/portfolio/` *(update after deploying)*

## Sections
| Section | What it shows |
|---------|---------------|
| **Home** | Name, animated typing role, call-to-action buttons, social links |
| **About** | Short bio, education and contact info, animated stat counters |
| **Skills** | Four skill groups (Frontend, Backend, Databases, Tools) with animated progress bars |
| **Projects** | Project cards with tech tags, and filter buttons (All / Backend / Frontend / DevOps) |
| **Contact** | Contact details and a form with client-side validation |

## Features
- Fully **responsive** (mobile, tablet, desktop) using the Bootstrap 5 grid
- Sticky navbar with **scrollspy** (active link follows the section you're reading) and a mobile hamburger menu
- Typing animation, scroll-reveal animations, animated counters and skill bars
- Project filtering without page reload
- Contact form validation with Bootstrap's validation styles
- Back-to-top button, SVG favicon, SEO meta tags
- Accessible: semantic HTML, `aria-label`s, keyboard-friendly, honours `prefers-reduced-motion`
- No build step: pure static files, perfect for GitHub Pages

## Tech stack
HTML5 · CSS3 (custom properties, flexbox, animations) · Bootstrap 5.3 · Bootstrap Icons · Vanilla JavaScript (ES6+) · Git · GitHub · GitHub Pages

## Project structure
```
portfolio/
├── index.html          # All sections (Home, About, Skills, Projects, Contact)
├── css/
│   └── style.css       # Custom styles (colour variables, layout, animations)
├── js/
│   └── main.js         # Typing effect, navbar, reveal, filters, form validation
├── assets/
│   └── favicon.svg
└── README.md
```

## Run locally
No installation needed. Open `index.html` in a browser.
Or, with VS Code, right-click `index.html` → **Open with Live Server**.

## Personalise
Search `index.html` for `your-github-username` and `your-linkedin` and replace them with your own links. Update the email, education and projects as needed.

## Git workflow used
| Step | Command |
|------|---------|
| Initialise repository | `git init -b main` |
| Stage & commit | `git add .` → `git commit -m "..."` |
| Feature branch | `git checkout -b feature/dark-mode` |
| Push branch | `git push -u origin feature/dark-mode` |
| Merge | Pull request on GitHub → **Merge** |
| Sync | `git pull` |
| History | `git log --oneline --graph --all` |

## Deployment
GitHub → repository **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

Last updated: October 2026
