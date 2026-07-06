# Yashpal Parmar — Portfolio (Static HTML/CSS/JS)

A pure HTML/CSS/JavaScript version of the desktop portfolio, ready to upload to GitHub / GitHub Pages.

## Structure

```
static-site/
├── index.html    # Markup + SEO meta
├── styles.css    # Design system + all section styles
└── script.js     # Content data + animations
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
cd static-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push these files to a repo (e.g. `yashpal-portfolio`).
2. In **Settings → Pages**, choose **Deploy from a branch** → `main` → `/root`.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

## Animations included

- Custom cursor with soft copper glow trail
- Fixed scroll progress bar
- Sticky pill nav with active-section indicator
- Hero: parallax blobs, animated grid, typewriter terminal, 3D tilt, magnetic CTA
- Reveal-on-scroll for every section
- Project cards: radial cursor spotlight + gradient text on hover
- Skills chips with copper accent on hover
- Experience timeline: gradient line that fills as you scroll
- Hobbies: floating icons on hover with rotation
- Respects `prefers-reduced-motion`

## Customize

- Colors live in the `:root` block of `styles.css`.
- All text content lives in `script.js` (projects, skills, experience, hobbies) and the hero block in `index.html`.
- Replace social/email links in `index.html` (two places: hero + footer).
