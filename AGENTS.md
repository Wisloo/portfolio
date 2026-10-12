# AGENTS.md

## Project Overview

Static personal portfolio site. No build tools, no package manager, no bundler.
Just open `index.html` in a browser or serve with any static file server.

## Structure

- `index.html` — main portfolio page
- `greensense.html` + `greensense.css` — standalone GreenSense landing page (web assessment)
- `style.css` — main site styles (single fixed Neo-Brutalist theme)
- `script.js` — theme toggle, image modal, folder expand, scroll-reveal, parallax
- `assets/images/` — all images (profile, certificates, project screenshots)
- `RemoveSpaces/` — self-contained mini-app (HTML/CSS/JS in `assets/`)
- `SearchWord/` — self-contained mini-app (HTML/CSS/JS in `assets/`)

## Key Conventions

- **Theme**: Single fixed Neo-Brutalist palette (yellow `#ffe17c`, charcoal `#171e19`, sage `#b7c6c2`). No toggle, no `.light` class, no `localStorage` theme.
- **CSS**: All custom CSS is vanilla. Design tokens live in `:root` of `style.css` (colors, `--border`, hard `--shadow-*`). External deps are Fontshare (Cabinet Grotesk + Satoshi) and Font Awesome 6.5.1 (CDN). Keep shadows at 0 blur and borders at 2px.
- **Image modal**: Clicking `.project-img` or `.certificate-img` opens a full-size modal. When adding new images, use one of these classes to get modal behavior automatically.
- **Scroll-reveal**: All `<section>` elements fade in on scroll via IntersectionObserver. Sections start with `opacity: 0` in JS — don't set initial visibility in CSS or it will conflict.
- **Skills marquee**: The skills list in `index.html` is duplicated (two `.skills-group` blocks) for a seamless CSS loop. Keep both copies in sync. The marquee lives inside a white `.skills-panel` (with a black `.skills-chrome` bar) — skill cards follow the house card style: 2px black border, hard `4px` shadow, yellow fill + `translate(-3px,-3px)` on hover.

## Gotchas

- No linting, formatting, or typechecking configured. Run `git status` before committing to avoid accidental includes.
- Subprojects under `RemoveSpaces/` and `SearchWord/` are standalone HTML apps linked from the main page. They don't share styles or scripts with the main site.
- All project links pointing to `greensense.html`, `RemoveSpaces/...`, or `SearchWord/...` are local relative paths — they won't work on some static hosts without the correct base path.

