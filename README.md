# Portfolio Starter

This is a hybrid starter based on the two portfolio versions you provided:

- Claude's cleaner portfolio structure and timeline-style layout.
- Gemini's useful interactive features: **light/dark theme, mobile navigation, scroll spy, back-to-top button, and Web3Forms contact form**.
- Plain HTML + CSS + JavaScript so you can customize it without learning a framework first.

## Files

- `index.html` — portfolio content and structure
- `style.css` — colors, layout, responsive design, cards, buttons, contact form
- `script.js` — theme, mobile menu, scroll spy, back-to-top, Web3Forms submission, cooldown, honeypot
- `README.md` — this guide

## Theme

**Light mode is the default.**

If the visitor switches to dark mode, the choice is saved in `localStorage`, so their next visit remembers it.

## Web3Forms setup

The contact form is already wired for Web3Forms.

1. Go to `https://web3forms.com/`
2. Create your access key.
3. Open `index.html`.
4. Find:

```html
value="YOUR_WEB3FORMS_ACCESS_KEY"
```

5. Replace the placeholder with your Web3Forms access key.

Do not put your personal email address into the HTML just to make the form work. Web3Forms handles delivery.

### Anti-spam measures included

- Honeypot field (`botcheck`)
- Basic browser-side validation
- 60-second client-side submission cooldown
- Web3Forms endpoint for handling the form
- Submit button is disabled while a request is in progress

The cooldown is only a client-side convenience and is **not a security boundary**. A determined bot can bypass browser-side JavaScript. Web3Forms/server-side filtering should be treated as the real layer for spam handling.

## First things to customize

Search `index.html` for:

- `YOUR NAME`
- `YOUR SHORT INTRO`
- `YOUR PHOTO`
- `START — END`
- `Company Name`
- `Project Name`
- `YOUR FRAMEWORK`
- `YOUR LIBRARY`
- `YOUR_WEB3FORMS_ACCESS_KEY`

Also replace the GitHub/LinkedIn placeholder links.

## Adding a project & screenshots

Copy one `<article class="project-card">...</article>` block inside `.projects-grid`.

Replace:

- Screenshot image: drop your screenshot in `images/my-project.jpg` and set `<img src="images/my-project.jpg" ...>`
- Project name
- Description
- GitHub URL
- Live demo URL
- Technology list

The CSS grid uses `auto-fit`, so whether you have 2, 3, 4, 5, or more projects, the cards will automatically balance across the page without awkward empty gaps.

## Adding your Resume

A starter `resume.pdf` file is included in the project root. Replace it with your actual resume by saving your PDF as `resume.pdf` in the same folder.
The "Resume" button appears both in the top navigation bar and in the hero section.

## Adding your photo

The photo is styled in `.about-photo-wrapper`. You can replace `images/images.jpg` with your own profile image file at any time.

## Running locally

You do not need a framework.

Simply open `index.html` in your browser.

For development, VS Code + Live Server is convenient but optional.

## Deployment

This static site can be deployed to services such as GitHub Pages, Vercel, or Netlify.

Before deploying, make sure you have:

- replaced placeholder personal information
- replaced placeholder project links
- added your Web3Forms access key
- tested the contact form
- checked the mobile layout
