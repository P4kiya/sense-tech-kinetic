# Architectural Decisions — SENSE-TECH Kinetic

## Why `mobile/` at repo root

- Keeps Expo app isolated; root `package.json` proxies `npm start` / `lint` into `mobile/`
- **`web/`** sits alongside for Next.js vitrine + admin (see below)

## Why Expo / React Native

- Single codebase for iOS and Android with fast iteration via Expo Go
- Expo SDK 54 aligns with current React Native 0.81 and React 19
- `newArchEnabled: true` in `app.json` for future-native performance
- Rich ecosystem: fonts, haptics, status bar without ejecting for prototypes

## Why no backend or database

- Product goal is a **high-fidelity UI prototype** for industrial safety monitoring
- Mock data keeps demos reliable (no network, auth, or ops dependency)
- Faster iteration on French copy, haptics, and layout fixes
- Backend can be added later without restructuring navigation

## Why React Navigation bottom tabs

- Three primary destinations match operator workflow: dashboard → alerts → settings
- Custom tab bar allows branded floating pill + icon-only layout
- `react-native-screens` + safe area context are standard Expo stack

## Why theme modules instead of a UI kit

- Full control over light industrial aesthetic (colors, radius, Inter)
- No NativeWind/Tamagui weight for a small component set
- `StyleSheet.create` keeps styles colocated and performant

## Why `ScalePressable` + expo-haptics

- Plain `Pressable` feels web-like on device
- Centralized spring scale + ripple + haptic kinds match native expectations
- Documented layout fixes (row inner wrappers) prevent recurring icon-above-text bugs

## Why French-only UI

- Target operators in French-speaking industrial facilities
- All strings are inline in components (no i18n framework yet)

## Why critical alert auto-opens at 5 seconds

- `mobile/App.tsx` `useEffect` demo for stakeholders to see emergency modal without manual trigger
- **Technical debt:** Remove or gate behind dev flag before production

## Why Inter via Expo Google Fonts

- Professional, neutral sans for dashboards and dense data
- Loaded once in root `App` with loading spinner until `useFonts` resolves

## Why lucide-react-native

- Consistent stroke icons matching light UI
- Tree-shakable per-icon imports

## Why `@react-native-community/slider` for PPM thresholds

- Native slider feel on iOS/Android for settings screen
- Themed with `minimumTrackTintColor` / `thumbTintColor` per threshold severity

## Why Next.js web (`web/`)

- Marketing **vitrine** and **admin prototype** in the browser without shipping RN Web
- App Router, Tailwind v4, and Framer Motion for scroll animations on landing
- Admin under `/admin` with sidebar layout; `/dashboard/*` redirects for old URLs
- French UI on vitrine and admin; mock data shared via `web/lib/mock-data.ts`
- Web design tokens intentionally **neutral/Apple-inspired** (charcoal primary), separate from mobile blue `#4F6BED`

## Removed / rejected approaches
- **Default React Navigation tab bar** — replaced by `CustomTabBar` (avoided blue fill / cramped labels)
- **Visible tab text labels** — icon-only bar; labels kept for accessibility only
- **Dark mode** — explicitly out of scope; `userInterfaceStyle: light`

## Known technical debt

1. Critical alert modal auto-show after 5s (demo only)
2. No persistence for settings toggles/sliders
3. No real sensor/gas API integration
4. `react-native-web` in dependencies but not a supported target experience
5. Tablet supported on iOS flag but layout not optimized for large screens
6. TopBar radio/bell buttons have no navigation handlers
7. Alert card CTAs ("Accuser réception", "Enquêter") have no `onPress` handlers
8. Emergency call button in modal has no `onPress` handler
## Documentation rule

Always consult https://docs.expo.dev/versions/v54.0.0/ before changing Expo APIs (`AGENTS.md`).
