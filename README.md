<div align="center">
  <h1>Sim UI</h1>

  <p>
    Beautiful, accessible Angular UI components built with Tailwind CSS and Spartan.<br />
    Copy, customize, and ship modern apps — fast.
  </p>

  <p>
    <a href="https://simui.dev">Website</a>
    &nbsp;·&nbsp;
    <a href="https://simui.dev/introduction">Documentation</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/dofu-lab/simui/issues">Report a Bug</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/dofu-lab/simui/issues">Request a Feature</a>
  </p>

  <p>
    <img alt="Angular" src="https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white&style=flat-square" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square" />
    <img alt="License" src="https://img.shields.io/github/license/dofu-lab/simui?style=flat-square" />
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/dofu-lab/simui?style=flat-square&color=yellow" />
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" />
  </p>
</div>

---

## What is Sim UI?

Sim UI is a **free, open-source component library** for Angular applications, inspired by the philosophy of [shadcn/ui](https://ui.shadcn.com/). Instead of installing a package, you **copy components directly into your project** — giving you full ownership over the code, styles, and behavior.

Built on top of **[Spartan UI](https://spartan.ng)** (headless primitives) and powered by **Tailwind CSS v4**, every component is crafted to be:

- **Accessible** — built on Spartan's WAI-ARIA-compliant headless primitives
- **Customizable** — own the code, tweak anything without fighting a library's API
- **Beautiful by default** — polished visual design that works out of the box
- **Angular-native** — fully compatible with Angular 20+, standalone components, SSR, and signals

---

## ✨ Highlights

- **500+ component variants** across 21 categories — from simple badges to complex data tables
- **43 low-level UI primitives** (accordion, dialog, command palette, date picker, and more)
- **Tailwind CSS v4** with backward compatibility for v3
- **Angular 20** with standalone components, SSR, and signals-ready architecture
- **Built-in Theme Editor** — visually customize your color palette at [simui.dev/theme-editor](https://simui.dev/theme-editor)
- **Multiple icon sets** — Lucide, Remix Icons, and Tabler Icons via `@ng-icons`
- **Copy-paste model** — no lock-in, no black boxes, full ownership

---

## 📦 Components

Browse all components and copy the source code at **[simui.dev](https://simui.dev)**.

| Component | Variants | Component | Variants |
| --- | :---: | --- | :---: |
| [Input](https://simui.dev/components/input) | 55 | [Notification](https://simui.dev/components/notification) | 33 |
| [Button](https://simui.dev/components/button) | 54 | [Badge](https://simui.dev/components/badge) | 23 |
| [Dialog](https://simui.dev/components/dialog) | 35 | [Accordion](https://simui.dev/components/accordion) | 22 |
| [Avatar](https://simui.dev/components/avatar) | 22 | [Checkbox](https://simui.dev/components/checkbox) | 22 |
| [Tabs](https://simui.dev/components/tabs) | 20 | [Radio](https://simui.dev/components/radio) | 20 |
| [Slider](https://simui.dev/components/slider) | 19 | [Alert](https://simui.dev/components/alert) | 18 |
| [Switch](https://simui.dev/components/switch) | 18 | [Dropdown](https://simui.dev/components/dropdown) | 16 |
| [File Upload](https://simui.dev/components/file-upload) | 13 | [Pagination](https://simui.dev/components/pagination) | 12 |
| [Banner](https://simui.dev/components/banner) | 11 | [Card](https://simui.dev/components/card) | 11 |
| [Popover](https://simui.dev/components/popover) | 11 | [Breadcrumb](https://simui.dev/components/breadcrumb) | 9 |
| [Event Calendar](https://simui.dev/components/event-calendar) | 1 | | |

---

## 🚀 Getting Started

Sim UI follows a **copy-paste model** — there is no npm package to install. Components are built on top of [Spartan UI](https://spartan.ng) primitives.

### Prerequisites

- Angular **19+**
- Tailwind CSS **4.x** ([install guide](https://tailwindcss.com/docs/installation))

### 1. Set up Spartan UI

Follow the official Spartan UI installation guide to add the headless primitives to your project:

```
https://spartan.ng/documentation/installation
```

### 2. Browse & copy a component

Visit **[simui.dev](https://simui.dev)**, pick a component variant you like, and click **"Copy"** to grab its source code. Paste it anywhere in your project.

### 3. Import and use

```typescript
// Import the component you copied
import { SimButtonComponent } from './ui/button/sim-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimButtonComponent],
  template: `
    <sim-button variant="default">Get started</sim-button>
    <sim-button variant="outline">Learn more</sim-button>
    <sim-button variant="ghost">Cancel</sim-button>
  `,
})
export class AppComponent {}
```

> **Tip:** Because you own the component code, you can rename, extend, or restyle anything freely — no API constraints.

> **Tailwind v4:** Sim UI is built with Tailwind CSS v4, while maintaining backward compatibility with v3 for most components.

---

## 🖥️ Local Development

Want to run the docs site locally or contribute new components?

```bash
# 1. Clone the repository
git clone https://github.com/dofu-lab/simui.git
cd simui

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your values

# 4. Start the dev server
pnpm start
```

The app will be available at `http://localhost:4200`.

<details>
<summary><strong>Environment variables reference</strong></summary>
<br />

The Angular environment files are generated at build time and are **not committed to source control**. You need a `.env` file for local development:

```env
NG_APP_BASE_URL=...
NG_APP_API_URL=...
NG_APP_GOOGLE_CLIENT_ID=...
```

**For Netlify deployments**, set these in **Site → Configuration → Environment variables**:

| Variable | Description |
| --- | --- |
| `NG_APP_BASE_URL` | API base URL |
| `NG_APP_API_URL` | Full API URL |
| `NG_APP_GOOGLE_CLIENT_ID` | Google OAuth Client ID |

The build command (`node scripts/set-env.js && ng build`) generates the environment files automatically on every build.

</details>

### Useful Commands

| Command | Description |
| --- | --- |
| `pnpm start` | Start the development server |
| `pnpm build` | Production build |
| `pnpm test` | Run unit tests (Karma + Jasmine) |
| `pnpm run codes` | Regenerate component registry JSON |
| `pnpm lint` | Lint the codebase |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [Angular](https://angular.dev) | 20 | Core framework |
| [Spartan UI](https://spartan.ng) | alpha | Headless component primitives |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |
| [TanStack Table](https://tanstack.com/table) | v8 | Advanced table functionality |
| [@ng-icons](https://github.com/ng-icons/ng-icons) | v32 | Icon sets (Lucide, Remix, Tabler) |
| [class-variance-authority](https://cva.style) | 0.7 | Component variant management |
| [date-fns](https://date-fns.org) | v4 | Date utilities |
| [ngx-sonner](https://github.com/tutkli/ngx-sonner) | v3 | Toast notifications |
| [Express](https://expressjs.com) | v4 | SSR server runtime |

---

## 🤝 Contributing

Contributions are what make open source great. All contributions are welcome — whether it's a new component variant, a bug fix, a documentation improvement, or a feature request.

1. **Fork** the repository
2. **Create** your branch: `git checkout -b feat/my-new-component`
3. **Commit** your changes: `git commit -m 'feat: add new button variant'`
4. **Push** to the branch: `git push origin feat/my-new-component`
5. **Open a Pull Request**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on coding standards and the contribution process.

---

## 🙏 Acknowledgments

Sim UI stands on the shoulders of great open-source projects:

- **[Spartan UI](https://spartan.ng)** — the headless primitives powering every component
- **[shadcn/ui](https://ui.shadcn.com)** — the inspiration for the copy-paste component model
- **[Tailwind CSS](https://tailwindcss.com)** — the utility-first CSS engine
- **[Angular](https://angular.dev)** — the framework that makes it all possible

---

## 📄 License

Licensed under the [MIT License](LICENSE). Copyright © 2025 [Phuong Tran Dong](https://x.com/PhuongTranDong).

---

<div align="center">
  <sub>
    If you find Sim UI useful, consider ⭐ <strong>starring the repo</strong> — it helps others discover it!<br />
    Built with ❤️ by <a href="https://x.com/PhuongTranDong">@PhuongTranDong</a>
  </sub>
</div>
