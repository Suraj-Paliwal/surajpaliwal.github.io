# Suraj Paliwal — Personal Portfolio

Personal portfolio website for **Suraj Paliwal**, AI Engineer and Graduate Researcher at Kyushu Institute of Technology (Shibata Laboratory).

Live at: `https://surajpaliwal.github.io` *(update with your actual URL)*

---

## Stack

- Pure HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step
- Google Fonts (Inter)
- Deployable directly to GitHub Pages

## Structure

```
Portfolio/
├── index.html            # Homepage — hero, featured projects, research, CTA
├── about.html            # Bio, education, experience, skill bars
├── projects.html         # Projects grid (grouped by category)
├── research.html         # Research statement, interests, timeline, lab
├── publications.html     # Academic publications list
├── blog.html             # Blog post cards
├── contact.html          # Contact info and message form
├── css/style.css         # Shared stylesheet
├── js/main.js            # Shared JavaScript
├── assets/
│   ├── images/           # Profile photo (profile.jpg)
│   ├── projects/         # Project screenshots
│   └── cv.pdf            # CV / Resume
└── projects/             # Individual project detail pages
    ├── ai-chatbot.html
    ├── computer-vision.html
    ├── ml-deployment.html
    └── robotics-ai.html
```

## Deployment (GitHub Pages)

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

GitHub Pages will serve the site from the `main` branch root. No configuration needed.

## Customization

Before going live, update the following:

| What | Where |
|------|-------|
| Profile photo | Replace `SP` initials in `.avatar-circle` divs with `<img src="assets/images/profile.jpg">` |
| GitHub username | Search-replace `surajpaliwal` with your actual GitHub handle across all HTML files |
| LinkedIn URL | Update `linkedin.com/in/surajpaliwal` in all pages |
| Contact form | In `contact.html`, replace `YOUR_FORM_ID` with a [Formspree](https://formspree.io) endpoint |
| Google Scholar | Update the placeholder Scholar URL in `publications.html` and `contact.html` |
| ORCID / DBLP | Update placeholder links in `publications.html` |
| CV / Resume | Add your PDF at `assets/cv.pdf` |
| Publications | Replace placeholder paper entries with real ones in `publications.html` |
| Blog posts | Replace placeholder posts with real content or link to an external blog |

## Features

- Frosted-glass fixed navigation with mobile hamburger menu
- Animated hero with typewriter effect and spinning avatar rings
- Scroll-triggered fade-in animations (IntersectionObserver)
- Animated skill bars on the About page
- Project cards with gradient hover effects
- Academic publication list with conference / journal / workshop badges
- Contact form (Formspree-compatible)
- Footer year auto-updates via JavaScript
- Fully responsive — mobile-first design

## License

MIT — see [LICENSE](LICENSE).
