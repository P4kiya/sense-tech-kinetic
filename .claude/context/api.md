# API — SENSE-TECH Kinetic

## Summary

This project has **no HTTP API layer**. There are:

- No `fetch` / `axios` / API client modules
- No route handlers, Edge functions, or server directory
- No OpenAPI/Swagger specs
- No authentication headers or token storage

All data is **static mock data** defined in:

| Location | Data |
|----------|------|
| `mobile/src/screens/AlertsScreen.tsx` | `alerts` array (4 items) |
| `mobile/src/components/dashboard/HistoryChart.tsx` | `data` array (8 time buckets) |
| `mobile/src/screens/DashboardScreen.tsx` | Inline props to `Gauge` / `StatCard` |
| `mobile/src/screens/SettingsScreen.tsx` | Profile, toggles, sliders, hardware cards |
| `mobile/src/screens/CriticalAlertModal.tsx` | Hardcoded CO 450 ppm demo copy |

---

## Endpoints

| Method | Path | Auth | Request | Response | Errors |
|--------|------|------|---------|----------|--------|
| — | — | — | — | — | — |

**N/A** — nothing to document until a backend is integrated.

---

## Future integration notes (not implemented)

When adding an API, prefer:

1. `mobile/src/lib/api.ts` or `mobile/src/services/` for client + types
2. Environment keys via Expo (`EXPO_PUBLIC_*`) in `.env` (gitignored locally)
3. French error strings mapped from server codes in the UI layer
4. Replace mock arrays in screens with hooks (`useQuery` / custom `useEffect` + state)

Do not invent placeholder endpoints in this file; update with real method/path/shape when code exists.
