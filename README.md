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

## Prototype alertes web → iPhone (Expo Go)

Sur **iPhone**, Expo Go peut afficher des **notifications locales** (pas besoin de build ni de compte Apple Push). L’app interroge l’admin web toutes les ~3 s.

1. **Même réseau Wi‑Fi** pour le PC et l’iPhone.
2. **Web** (écoute sur le LAN) :
   ```bash
   npm install --prefix web
   npm run web
   ```
3. **Adresse IP du PC** (ex. `192.168.1.42` via `ipconfig` sur Windows).
4. **Mobile** — copier `mobile/.env.example` vers `mobile/.env` et définir :
   ```
   EXPO_PUBLIC_API_URL=http://192.168.1.42:3000
   ```
5. Redémarrer Expo (`npm start`), ouvrir **Expo Go** sur l’iPhone, accepter les **notifications** à la première ouverture.
6. Sur le PC : [http://localhost:3000/admin](http://localhost:3000/admin) → **Panneau d’alerte démo** → **Déclencher une alerte**.
7. Sur l’iPhone : notification + modal si l’alerte est **CRITIQUE** (Réglages → *Notifications push* doit rester activé).

Si rien n’arrive : pare-feu Windows (autoriser le port **3000**), vérifier l’IP, redémarrer `npm start` après modification de `.env`.