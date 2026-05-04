<div align="center">

# 🛡️ Experiment700

### The marketing site for Hazard Intelligence.

[![Live Site](https://img.shields.io/badge/site-live-34C759?style=for-the-badge)](https://experiment700.github.io)
[![Hosted on](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-0A0E1A?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![Made in](https://img.shields.io/badge/made%20in-New%20Orleans-FF8C00?style=for-the-badge)](https://github.com/Experiment700)

[**🌐 Live at experiment700.github.io**](https://experiment700.github.io)

</div>

---

## What This Is

The public-facing website for **Experiment700** — the company behind [Hazard Intelligence](https://github.com/Experiment700/Hazard-Intelligence), a real-time human safety platform for iOS.

This repository auto-deploys to **[experiment700.github.io](https://experiment700.github.io)** via GitHub Pages whenever changes are pushed to `main`.

The site is a single-page landing experience plus a hosted privacy policy at [experiment700.github.io/privacy](https://experiment700.github.io/privacy/). It is intentionally lightweight — no frameworks, no build step, no CMS. Three files of HTML, one CSS, one JS, and it loads on any phone in under a second.

---

## What's Here

| File | Purpose |
|---|---|
| `index.html` | Landing page — hero, three pillars, how-it-works, origin story, "coming soon" CTA |
| `privacy/index.html` | Hosted privacy policy at the canonical URL referenced by the iOS app and the App Store listing |
| `style.css` | Site stylesheet — dark navy + orange accent + JetBrains Mono / Inter fonts. Matches the app's visual identity. |
| `app.js` | Animated topographic background canvas + scroll-reveal section animations |
| `404.html` | Branded "SIGNAL LOST · LOCATION UNKNOWN" not-found page |
| `assets/` | Images, icons, future screenshots |

---

## Visual System

| Token | Value |
|---|---|
| Background (primary) | `#0A0E1A` (deep navy) |
| Background (alt) | `#0D1220` |
| Accent | `#FF8C00` (orange) |
| Danger | `#FF3B30` |
| Info | `#5AC8FA` |
| Success | `#34C759` |
| Display / Mono font | `JetBrains Mono` (Google Fonts) |
| Body font | `Inter` (Google Fonts) |

The animated background canvas (`#bg-canvas` in `app.js`) renders ~16 warped concentric topographic rings around an off-center focal point. Same DNA as the iOS app icon. Pauses when the tab is hidden to save battery. Respects `prefers-reduced-motion`.

---

## Running Locally

No build step. Open the files directly:

```bash
# From the repo root, simplest possible local server:
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or just double-click `index.html` to open in your default browser. Most things will work, though some browsers block local font loads — the Python server is more reliable.

---

## Deploying

This repo deploys automatically via GitHub Pages.

```bash
git add .
git commit -m "your changes"
git push
```

Within ~1–3 minutes of pushing to `main`, the live site at [experiment700.github.io](https://experiment700.github.io) reflects the changes. No CI to configure. No build pipeline to debug.

GitHub Pages settings: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.

---

## Related

| Repository | Purpose |
|---|---|
| 📱 [Hazard-Intelligence](https://github.com/Experiment700/Hazard-Intelligence) | The iOS app + Python backend (private) |
| 🌐 Experiment700.github.io | This site (public) |

---

## Contact

- 🌐 **Website:** [experiment700.github.io](https://experiment700.github.io)
- ✉️ **Email:** [support@experiment700.com](mailto:support@experiment700.com)
- 🔒 **Privacy:** [experiment700.github.io/privacy](https://experiment700.github.io/privacy/)

---

## License

© 2026 Experiment700. All rights reserved.

Site copy, design, and brand are proprietary. Code is not licensed for reuse without written permission.

---

<div align="center">

**Built in New Orleans. Built because someone had to.**

🛡️ EXPERIMENT 700

</div>
