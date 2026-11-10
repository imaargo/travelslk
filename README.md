# TravelsLK — website

Marketing site for **TravelsLK**, a Sri Lankan travel company: tailor-made tours, yacht days, helicopter flights, MICE, destinations, activities and a multi-step booking inquiry form.

Built as a **no-build static site** — plain HTML, CSS and vanilla JavaScript. No dependencies, no compilation step. Open it, host it anywhere.

---

## Quick start

Open `index.html` in a browser, or serve the folder locally (recommended, so root-relative links and the booking form behave exactly like production):

```bash
# Node
npx serve .

# Python
python -m http.server 4173
```

Then visit <http://localhost:4173>.

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, experiences, tour styles, destinations, reviews, events, payments, CTA |
| `tours.html` | Tailor-made tours by style (budget, family, couple, adventure, beach, cultural, nature) |
| `yacht-tours.html` | Colombo yacht events, Mirissa sunset boat, yacht party, boat pre-shoot |
| `helicopter-tours.html` | Heli Tour Colombo Sky, R66 / H125 fleet, heli wedding pre-shoot |
| `mice-events.html` | MICE & events — meetings, incentives, conferences, exhibitions |
| `destinations.html` | Down South, Hill Country, Cultural Triangle, Colombo, Jaffna |
| `activities.html` | Activities and the full water-sports menu |
| `about.html` | Story, vision, mission, sustainability, how we work |
| `blog.html` | Journal index (coming-soon cards, ready for real articles) |
| `faq.html` | Booking, payment, weather, children, transfers |
| `contact.html` | Contact details, message form, map |
| `plan-your-journey.html` | Four-step booking inquiry wizard + live summary |

Shared header, footer and WhatsApp button are injected by `js/main.js` — edit them **once** there, not in every page.

---

## Project structure

```
.
├── index.html, tours.html, …      # one file per page
├── css/styles.css                 # full design system + responsive rules
├── js/main.js                     # layout injection, nav, currency, filters,
│                                  # lightbox, booking wizard, contact form
├── assets/img/                    # optimised site images
│   └── activities/                # Pexels activity photos (1200×900 JPEG)
└── images/                        # original supplied assets (not used by the site)
```

Each page sets `<body data-page="…">`; `js/main.js` uses that value to highlight the active navigation item.

---

## How the booking form works

`plan-your-journey.html` is a 4-step wizard:

1. **Experience** — `<option value="slug|usd-price">` (e.g. `whale-watching|50`)
2. **Guests** — adults, children, pickup
3. **Add-ons** — photography, drone, fireworks, jet ski, etc.
4. **Details** — name, country, email/phone, notes, consent

On submit the site **does not take a payment**. It opens WhatsApp with a pre-filled message containing every answer, then shows a success panel.

- Experience can be pre-selected from a link: `plan-your-journey.html?experience=whale-watching`
- The sidebar summary updates live, including the starting price in the selected currency.
- The contact page form works the same way.

### Connecting a real backend (when you want leads by email)

The simplest option is [Web3Forms](https://web3forms.com) or Formspree — no server needed:

1. Get an access key.
2. Add an endpoint to the submit handler in `js/main.js` (`initBooking` and `initContactForm`).
3. `fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })` with `access_key` and the same fields.
4. Keep the WhatsApp fallback so nothing is lost if the request fails.

For a database, CRM or automated confirmations, replace the handler with a call to your own endpoint (Node, PHP, Google Apps Script, Airtable, etc.).

### Payments (phase 2)

No gateway is wired up yet. The site is structured for it:

- Every price carries a `data-usd` attribute, so totals can be computed in one place.
- Payment methods already described to customers: card (Stripe), PayPal, PayHere / KOKO (local), bank transfer.
- Suggested flow: inquiry → we confirm availability and quote → send a payment link (Stripe Checkout / PayHere) → confirm booking.

---

## Editing content

### Prices

Prices are stored once as USD and converted for display:

```html
<span data-usd="50">$50</span>
```

- `data-usd` is the source of truth (plain number, no commas).
- The text inside is the initial USD label; JavaScript overwrites it when the visitor changes currency.
- Keep the currency symbol **inside** the span — never write `$<span data-usd="50">50</span>`.

Exchange rates live at the top of the currency block in `js/main.js`:

```js
const CURRENCIES = {
  USD: { rate: 1, prefix: "$", digits: 0 },
  EUR: { rate: 0.92, prefix: "€", digits: 0 },
  LKR: { rate: 300, prefix: "Rs ", digits: 0 },
};
```

Update the rates when they drift; the choice is remembered per visitor.

### Contact details

Phone numbers, emails and the WhatsApp number are constants near the top of `js/main.js`:

```js
const WA_NUMBER = "94767107508";     // digits only, country code, no +
const PHONE = "+94 76 710 7508";
const EMAIL = "info.travelslk@gmail.com";
```

The footer and floating button are generated from these, so one edit updates every page.

### Images

Site images live in `assets/img/`. To swap one, keep the filename (or update every reference). Photos are served at the size they are used; the logo is a 480 px transparent PNG, gallery images are 760 px JPEGs.

Activity card photos live in `assets/img/activities/` (1200×900 JPEG, 40–250 KB each) and are sourced from [Pexels](https://www.pexels.com) under the free Pexels licence — attribution is not required but is shown on the Activities page. Replace a file with the same name to change the picture, and update its `alt` text in `activities.html` if the subject changes.

---

## Design system

| Token | Value |
|---|---|
| Signature orange | `#FF9D00` |
| Orange (text-safe) | `#A95700` |
| Charcoal ink | `#12222B` |
| Deep ocean | `#063A44` |
| Lagoon teal | `#177E88` |
| Turquoise | `#1FC8D4` |
| Sand | `#FFF7EC` |
| Paper | `#FFFDF9` |

Fonts: **Bricolage Grotesque** (display), **Plus Jakarta Sans** (body), **Caveat** (accent), loaded from Google Fonts.

Everything is defined as CSS custom properties at the top of `css/styles.css`.

---

## Accessibility & quality

- Lighthouse (home, activities, contact, booking): **100** accessibility, best practices and SEO.
- Keyboard support for navigation, filters, wizard and lightbox; visible focus rings.
- Respects `prefers-reduced-motion`.
- Semantic landmarks, skip link, labelled form fields, `aria-current` navigation.

---

## Deploying

Any static host works — Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, S3.

1. Upload the folder contents (not the parent directory).
2. Make sure `index.html` is the entry point.
3. Add your domain and enable HTTPS.

No build command, no environment variables, no server runtime required.

---

## Notes / next steps

- Blog posts are placeholders ("Coming soon") — add real `blog/*.html` pages when copy is ready.
- Consider a CMS (Decap CMS + Netlify Identity, or Sanity) if non-developers should edit content.
- Add analytics (Plausible, GA4) and a cookie notice if you enable tracking.
- Prices marked `*` are approximate conversions and state "final quote confirmed on inquiry".
