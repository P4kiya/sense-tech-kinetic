# SENSE-TECH Kinetic

Native mobile app (Expo / React Native) for industrial gas and environmental safety monitoring — dashboard, alerts, settings, and emergency notifications.

The Expo app lives in [`mobile/`](mobile/).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/go) on your phone (for quick testing), or Android Studio / Xcode for emulators

## Run locally

From the repository root:

```bash
npm install --prefix mobile
npm start
```

Or from `mobile/`:

```bash
cd mobile
npm install
npm start
```

- Scan the QR code with **Expo Go** (Android / iOS)
- Press `a` for Android emulator
- Press `i` for iOS simulator (macOS only)

## Production builds

```bash
cd mobile
npx expo prebuild
```

Then open the generated `android/` or `ios/` project in Android Studio or Xcode, or use [EAS Build](https://docs.expo.dev/build/introduction/):

```bash
cd mobile
npx eas build --platform android
npx eas build --platform ios
```

## Web (Next.js)

The marketing site and admin UI live in [`web/`](web/). From repo root: `npm run web` (or `cd web && npm run dev`).

- **`/`** — Vitrine (landing)
- **`/admin`** — Admin console (sidebar: overview, sensors, alerts, devices, reports, settings)
- Old **`/dashboard`** URLs redirect to **`/admin`**