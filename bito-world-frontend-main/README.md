# BITO World — Frontend

Bihar International Trade Organization (BITO) website — React 18 + Vite 5 + Tailwind CSS 4.

## 📁 Project Structure

```
├── index.html                  # App entry (loads /src/app/main.jsx)
├── scripts/                    # Utility / backend scripts
│   └── google-apps-script.js   # Google Apps Script backend
├── public/                     # Static assets served at root (/logo.svg, etc.)
└── src/
    ├── app/                    # Application entry & routing
    │   ├── App.jsx             # Root component (BrowserRouter + Header + Toaster)
    │   ├── main.jsx            # Bootstrap (mounts React, loads global styles)
    │   └── router/
    │       ├── AppRoutes.jsx   # All page routes + footer route switching
    │       └── ProtectedRoute.jsx  # Admin auth guard
    ├── components/
    │   ├── layout/             # Header, Footer, AboutFooter, BIAFooter
    │   ├── home/               # Home page sections (sliders, leader cards…)
    │   ├── membership/         # Membership CTA, Roadmap, plans slider…
    │   ├── landing/            # /join-now landing page (own tailwind config)
    │   ├── bito/               # BITO-specific sections
    │   └── modals/             # Shared modals (Individual, Corporate, ThankYou…)
    ├── pages/                  # Route pages (one folder per feature)
    │   ├── home/               # /
    │   ├── about/              # /about
    │   ├── bia/                # /bia
    │   ├── bito/               # /bito, /bito-advisors (+ sections/)
    │   ├── events/             # /events, /events/:slug
    │   ├── our-work/           # /our-work
    │   ├── membership/         # /membership, /membership-plans
    │   ├── contact/            # /contact-us
    │   ├── appointment/        # /appointment
    │   ├── admin/              # /admin-login, /admin-dashboard, /admin-cms
    │   └── not-found/          # 404
    ├── data/
    │   └── events.js           # Event galleries data (images + slugs)
    ├── styles/
    │   ├── index.css           # Tailwind layer (used on /join-now)
    │   └── bootstrap-layered.css # Bootstrap layer (rest of the site)
    ├── utils/                  # api.js, constants.js
    └── assets/                 # Images grouped by feature
        ├── about/  bia/  bito/  banners/  city/  events/  features/
        ├── font/   icon/ icons/ layers/  logos/ member/  news/
        └── social/ socials/ team/ testimonials/  (+ index.js barrel)
```

## 🚀 Getting Started

```bash
npm install
npm run dev             # start dev server
npm run build           # production build (dist/)
npm run preview         # preview production build
npm run lint            # eslint
npm run build:tailwind  # watch-build landing page tailwind css
```

## 🛠️ Utility Scripts

```bash
node scripts/check-imports.mjs   # verify every relative import/url() resolves
```

## 📝 Notes

- `/join-now` route loads `index.css` (Tailwind); every other route loads
  `bootstrap-layered.css`. This selection happens in `src/app/main.jsx`.
- Admin routes (`/admin-dashboard`, `/admin-cms`) are wrapped in
  `ProtectedRoute` (`src/app/router/ProtectedRoute.jsx`).
- Dev-server API proxy config lives in `vite.config.js` (auth, appointment,
  contact, membership, forms → backend from `.env`).
