# SENSE-TECH Kinetic

## Overview
- Type: Mobile app (Expo / React Native, portrait-only)
- Description: Native client for industrial gas and environmental safety monitoring with dashboard, alerts, settings, and critical-alert modal. French UI throughout; all sensor/alert data is mock/static (no live backend).
- Target audience: Industrial operators and facility safety personnel monitoring gas levels, sensors, and infrastructure alerts.

## Tech Stack
- Frontend: Expo SDK 54, React 19.1.0, React Native 0.81.5, TypeScript 5.9 (strict)
- Backend: None (client-only prototype)
- Database: None
- Auth: None
- Styling: React Native `StyleSheet` + theme tokens in `mobile/src/theme/` (`colors`, `typography`, `spacing`, `radius`, `layout`)
- Key libraries: `@react-navigation/native` + `@react-navigation/bottom-tabs`, `react-native-safe-area-context`, `react-native-screens`, `react-native-svg`, `lucide-react-native`, `@expo-google-fonts/inter`, `expo-font`, `expo-haptics`, `expo-status-bar`, `@react-native-community/slider`
- Deploy: Expo Go for dev; production via `npx expo prebuild` + native tooling or [EAS Build](https://docs.expo.dev/build/introduction/) (`npx eas build --platform android|ios`). Bundle IDs: `com.sensetech.kinetic` (iOS/Android).

## Design System
- Background: `#F5F6F8` (`colors.background`)
- Accent: `#4F6BED` (`colors.primary`)
- Headline font: Inter Bold (`Inter_700Bold`) via `@expo-google-fonts/inter`
- Body font: Inter Regular (`Inter_400Regular`)
- Aesthetic: Light, premium industrial UI — white cards, soft shadows, rounded corners (`radius` scale), blue primary, semantic success/warning/error. Icon-only floating bottom tab bar; compact fixed top bar (`TOP_BAR_HEIGHT` 48).

## Pages / Sections
| Route (navigator) | Screen | French label (a11y) | Purpose |
|-------------------|--------|---------------------|---------|
| `Dashboard` | `DashboardScreen` | Accueil | Greeting, status chip, gas gauge (PPM), stat cards (temp/humidity/battery), 24h history chart |
| `Alerts` | `AlertsScreen` | Alertes | Filter bar (Tous / Critique / Résolu), list of `AlertCard` items |
| `Settings` | `SettingsScreen` | Réglages | Profile, notification toggles, PPM threshold sliders, hardware device cards |
| (overlay) | `CriticalAlertModal` | — | Full-screen modal: critical CO alert, emergency call CTA, mark resolved (demo opens after 5s) |

Global chrome: `TopBar` (brand + radio/bell actions), `CustomTabBar` (3 tabs, icons only).

## API Routes
None. No HTTP client, no REST/GraphQL, no `fetch` to backend URLs. Data is hardcoded in screen/component files.

## Environment Variables (keys only)
None committed. `.gitignore` ignores `.env*.local`. No `.env` or `expo-env.d.ts` in repo. App runs without env configuration.

## Dev Commands
- Dev: `npm start` from repo root (runs `mobile/`); or `cd mobile && npm start` (`expo start`; also `npm run android` / `npm run ios`)
- Build: `cd mobile && npx expo prebuild` then native build, or `npx eas build --platform android|ios`
- Test: Not defined (no test script in `mobile/package.json`)
- Lint: `npm run lint` from root or `mobile/` (`tsc --noEmit`)
- Deploy: EAS Build or store submission from `mobile/android/` / `mobile/ios/` (not automated in repo)

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
- **Mobile-first** — no separate web app; `react-native-web` is a dependency but the product is the native Expo app.
