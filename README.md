# Sim UI

**Beautiful Angular UI components built with Tailwind CSS and Spartan.**

A curated collection of ready-to-use components to quickly build modern application UIs.

**Demo: [https://simui.dev](https://simui.dev)**

## Getting Started

Sim UI is built on top of Spartan UI, but the components are designed to work seamlessly with any Angular application. Following a consistent component architecture, Sim UI will feel familiar to Angular developers while providing the visual polish of Tailwind CSS.

**Set up Spartan UI**

You can follow this documentation to setup Spartan UI in your project: [https://spartan.ng/documentation/installation](https://spartan.ng/documentation/installation)

**Prerequisites**

- Angular 19+
- Tailwind CSS 4.x

## Tailwind v4 support

Sim UI is built with Tailwind CSS v4, while maintaining backward compatibility with Tailwind v3 for most components.

## Environment Setup

This project uses environment variables to avoid exposing secrets in the source code. The Angular environment files (`src/environments/environment.ts` and `src/environments/environment.development.ts`) are **not committed** — they are generated at build time.

**For local development:**

```bash
# 1. Copy the example file
cp .env.example .env

# 2. Fill in your values in .env
#    NG_APP_BASE_URL=...
#    NG_APP_API_URL=...
#    NG_APP_GOOGLE_CLIENT_ID=...

# 3. Start the dev server (generates env files automatically)
pnpm start
```

**For CI / production (Netlify):**

Set the following variables in the Netlify dashboard under **Site → Configuration → Environment variables**:

| Variable | Description |
|---|---|
| `NG_APP_BASE_URL` | API base URL |
| `NG_APP_API_URL` | Full API URL |
| `NG_APP_GOOGLE_CLIENT_ID` | Google OAuth client ID |

The build command (`node scripts/set-env.js && ng build`) generates the environment files from these variables before every build.

## Contributing

We welcome contributions to Sim UI! Please read our [contributing guidelines](CONTRIBUTING.md) on how to submit improvements and new components.

## License

Licensed under the [MIT License](https://github.com/dofu-lab/simui/blob/main/LICENSE).

If you have any questions or just want to say hi, feel free to reach out to us on X 👉 [@PhuongTranDong](https://x.com/PhuongTranDong)
