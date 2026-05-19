# SENSE-TECH Kinetic

## Overview
- Type: Monorepo — **mobile** (Expo / React Native, portrait-only) + **web** (Next.js marketing site and admin prototype)
- Description: Industrial gas and environmental safety monitoring. The native app provides dashboard, alerts, settings, and a critical-alert modal. The web app adds a French **vitrine** (`/`) and an **admin console** (`/admin/*`) with mock sensor/alert data. No live backend on either surface.
- Target audience: Industrial operators and facility safety personnel monitoring gas levels, sensors, and infrastructure alerts.

## Tech Stack
- Frontend: Expo SDK 54, React 19.1.0, React Native 0.81.5, TypeScript 5.9 (strict)
- Backend: None (client-only prototype)
- Database: None
- Auth: None
- Styling: React Native `StyleSheet` + theme tokens in `mobile/src/theme/` (`colors`, `typography`, `spacing`, `radius`, `layout`)
- Key libraries: `@react-navigation/native` + `@react-navigation/bottom-tabs`, `react-native-safe-area-context`, `react-native-screens`, `react-native-svg`, `lucide-react-native`, `@expo-google-fonts/inter`, `expo-font`, `expo-haptics`, `expo-status-bar`, `@react-native-community/slider`
- Deploy: Expo Go for dev; production via `npx expo prebuild` + native tooling or [EAS Build](https://docs.expo.dev/build/introduction/) (`npx eas build --platform android|ios`). Bundle IDs: `com.sensetech.kinetic` (iOS/Android).

### Web (`web/`)
- Frontend: Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion
- Styling: CSS variables + utility classes in `web/app/globals.css` (`.badge-kicker`, `.select-field`, typography presets); `cn()` from `web/lib/cn.ts`
- Key libraries: `lucide-react`, `framer-motion`
- Data: `web/lib/mock-data.ts`; admin labels/helpers in `web/lib/admin-i18n.ts`, nav in `web/lib/admin-nav.ts`
- Deploy: `npm run web:build` from repo root; `next start` for production

## Design System
- Background: `#F5F6F8` (`colors.background`)
- Accent: `#4F6BED` (`colors.primary`)
- Headline font: Inter Bold (`Inter_700Bold`) via `@expo-google-fonts/inter`
- Body font: Inter Regular (`Inter_400Regular`)
- Aesthetic: Light, premium industrial UI — white cards, soft shadows, rounded corners (`radius` scale), blue primary, semantic success/warning/error. Icon-only floating bottom tab bar; compact fixed top bar (`TOP_BAR_HEIGHT` 48).

### Web tokens (`web/app/globals.css`)
- Background: `#FBFBFD`; surface: `#FFFFFF`; text: `#1D1D1F` / `#6E6E73`
- Primary (buttons): `#1D1D1F` (charcoal); accent (links): `#0071E3`
- Semantic: success `#34C759`, warning `#FF9500`, error `#FF3B30`
- Aesthetic: Apple-inspired neutral UI on vitrine and admin; hidden document scrollbar; card hover lift via `web/components/ui/Card.tsx`

## Pages / Sections

### Mobile (Expo)
| Route (navigator) | Screen | French label (a11y) | Purpose |
|-------------------|--------|---------------------|---------|
| `Dashboard` | `DashboardScreen` | Accueil | Greeting, status chip, gas gauge (PPM), stat cards (temp/humidity/battery), 24h history chart |
| `Alerts` | `AlertsScreen` | Alertes | Filter bar (Tous / Critique / Résolu), list of `AlertCard` items |
| `Settings` | `SettingsScreen` | Réglages | Profile, notification toggles, PPM threshold sliders, hardware device cards |
| (overlay) | `CriticalAlertModal` | — | Full-screen modal: critical CO alert, emergency call CTA, mark resolved (demo opens after 5s) |

Global chrome: `TopBar` (brand + radio/bell actions), `CustomTabBar` (3 tabs, icons only).

### Web (Next.js App Router)
| Route | Purpose |
|-------|---------|
| `/` | Vitrine: `Navbar`, `Hero`, `StatsStrip`, `Features`, `UseCases`, `Packs`, `HowItWorks`, `Faq`, `CtaBand`, `Footer` (French copy) |
| `/admin` | Overview: stats, sensor cards, `FakeAlertPanel`, `RecentAlertsTable` |
| `/admin/sensors` | Full sensor grid |
| `/admin/alerts` | Alerts table |
| `/admin/devices` | Gateway/repeater cards (static) |
| `/admin/reports` | Report placeholders |
| `/admin/settings` | Settings placeholder |

Redirects: `/dashboard` and `/dashboard/*` → `/admin` (`web/next.config.ts`). Legacy duplicate routes may exist under `web/app/dashboard/`; prefer `/admin` for new work.

Admin chrome: `DashboardFrame` (fixed top bar + sticky sidebar on desktop, drawer on mobile), `DashboardSidebar`, `DashboardTopBar`.

## API Routes

### Mobile
None. No HTTP client, no REST/GraphQL, no `fetch` to backend URLs. Data is hardcoded in screen/component files.

### Web
| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/alerts` | Demo only: logs JSON body to server console, returns `{ ok, message, received }` — no persistence. Called from `FakeAlertPanel`. |

## Environment Variables (keys only)
None committed. `.gitignore` ignores `.env*.local`. No `.env` or `expo-env.d.ts` in repo. App runs without env configuration.

## Dev Commands
- **Mobile dev:** `npm start` from repo root (runs `mobile/`); or `cd mobile && npm start` (`expo start`; also `npm run android` / `npm run ios`)
- **Mobile build:** `cd mobile && npx expo prebuild` then native build, or `npx eas build --platform android|ios`
- **Web dev:** `npm run web` from root, or `cd web && npm run dev`
- **Web build:** `npm run web:build` from root, or `cd web && npm run build`
- **Test:** Not defined (no test scripts in `mobile/package.json` or `web/package.json`)
- **Lint (mobile):** `npm run lint` from root or `mobile/` (`tsc --noEmit`)
- **Lint (web):** `cd web && npm run lint` (`eslint`)
- **Deploy:** Mobile via EAS Build or native projects; web via `next build` + host of `.next` output

## Rules (non-negotiable)
- Read Expo v54 docs before writing code: https://docs.expo.dev/versions/v54.0.0/ (see `AGENTS.md`).
- **French only** for all user-visible strings.
- **Light theme only** — use `mobile/src/theme/colors.ts`; do not introduce dark mode unless explicitly requested.
- **Theme tokens** — use `spacing`, `radius`, `typography`, `colors`, `shadows`; avoid magic numbers except local layout tweaks.
- **Press feedback** — interactive controls use `ScalePressable` + `triggerHaptic` from `mobile/src/lib/haptics.ts` (not plain `Pressable` for buttons).
- **App root** — all Expo source under `mobile/`; do not add duplicate app code at repository root.
- **Layout pitfall** — avoid parent `alignItems: 'center'` on pressables with row content; use `alignSelf: 'stretch'`, inner `flexDirection: 'row'` wrappers, or `flex: 1` slots so icon+text stay horizontal.
- **Navigation** — bottom tabs via `@react-navigation/bottom-tabs`; custom `CustomTabBar`; `sceneStyle` not `sceneContainerStyle`; `tabBarShowLabel: false` (labels are accessibility-only).
- **No scope creep** — no backend, auth, or real sensor integration unless explicitly requested.
- **Web source root** — all Next.js code under `web/`; do not duplicate the app at repository root.
- **Web UI language** — **French only** for vitrine and admin user-visible strings (match mobile).
- **Web theme** — use `globals.css` tokens and shared primitives (`Button`, `Card`, `Select`, `Reveal`); avoid reintroducing purple `#4F6BED` on web (primary is charcoal).
- **Admin layout** — use `DashboardFrame`; main content scrolls, sidebar stays fixed on desktop (`md+`).
- **Mobile product** — Expo app remains the primary native client; `react-native-web` is a dependency but not a supported end-user target.
