# The Ephraim Foundation International — Website

Static site. No build step, no dependencies, no framework. Every file here is the file that ships.

## Deploy to GitHub Pages

1. Create a repository (e.g. `ephraim-foundation-site`) and push these files to the **root** of the `main` branch.
2. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.
3. Wait ~1 minute. The site is live.

### Custom domain

`CNAME` is already set to `ephraimfoundation.org`. At your DNS provider add:

| Type  | Name  | Value |
|-------|-------|-------|
| A     | @     | 185.199.108.153 |
| A     | @     | 185.199.109.153 |
| A     | @     | 185.199.110.153 |
| A     | @     | 185.199.111.153 |
| CNAME | www   | `<your-username>.github.io` |

Then tick **Enforce HTTPS** in Settings → Pages.

If you're not using a custom domain, **delete `CNAME`** and change the `<link rel="canonical">` and `og:url` tags in each page to your `github.io` address.

**Redirect the second domain.** `theephraimfoundation.org` should 301-redirect to `ephraimfoundation.org`. Two live domains split search authority and confuse donors mid-donation.

## Files

```
├── index.html              Home — the problem, the model, who it reaches
├── lead.html               The LEAD centre, the five villages, why it works
├── school-supplies.html    The $10 school-supplies campaign
├── give.html               Giving ladder, the four-donor ask, FAQ
├── about.html              Founder note, values, honest scale
├── 404.html
├── assets/
│   ├── css/style.css       All styling. Brand tokens at the top.
│   ├── js/brand.js         Draws the sunburst, arc frame and weave motifs
│   └── img/                Photographs go here
├── CNAME                   Custom domain
├── .nojekyll               Stops GitHub from running Jekyll
├── robots.txt
└── sitemap.xml
```

## Before this goes live — three things

### 1. Wire up the donate buttons

Every give button currently points to `give.html` or `#donate`. Replace with your live Stripe payment links:

```html
<a class="btn btn-give" href="https://buy.stripe.com/YOUR_LINK">Keep a centre open</a>
```

Create **separate** Stripe links for each amount so donors land on the right thing:

| Gift | Amount | Type |
|---|---|---|
| School supplies | $10 | one-time |
| Christmas gift | $7 | one-time |
| One of the four | $55 | **recurring** |
| Full centre | $222 | **recurring** |
| Open a new centre | $212 | one-time |

The $55 and $222 links must be recurring, not one-time. Converting one-time donors to monthly is the single highest-value thing this site can do.

### 2. Add photographs

Three placeholder circles read "Photograph goes here" — on `lead.html`, `school-supplies.html`, and `about.html`. Drop images into `assets/img/` and replace the placeholder `<div class="plate">` contents:

```html
<div class="plate"><img src="assets/img/lead-session.jpg" alt="Children at the Matale LEAD centre"></div>
```

Per the brand board: golden-hour, documentary, real participants mid-action. Never posed poverty imagery. Always write real alt text.

### 3. Connect the newsletter form

The signup form is a stub — it shows a confirmation but stores nothing. Replace it with the embed from Mailchimp, ConvertKit, or whichever list you use.

## Editing

**Colours and type** live as CSS variables at the top of `assets/css/style.css`. Change one value there and it updates everywhere.

**One rule worth protecting:** Marigold (`--marigold`, `#D98E2B`) is used *only* on give/donate buttons. That's what makes a donate button instantly recognisable on any page. Use `.btn-info` (tea green) for informational actions and `.btn-quiet` (clay outline) for anything secondary.

**Header and footer** are duplicated in each HTML file. Editing navigation means editing it in all six. That's the trade-off for having no build step — if it becomes tedious, the site is ready to move to Eleventy or Astro without changing a single style.

## Numbers on this site

Everything published here is a real figure. When you add measurement data, `about.html` is where it goes — it currently states plainly that you're still building it, which is more credible than describing outcomes you haven't measured.

- $222/month — one LEAD centre (Rs 68,500)
- $212 — opens a new centre
- $55/month — one of four donors funding a village
- $10 — one child's school supplies for the year
- $7 — one Christmas gift (251 children in 2024)
- 5 villages: Makandura, Badalgama, Kuliyapitiya, Gunepolla Estate, Matale
