# API — SENSE-TECH Kinetic

## Summary

**Mobile:** No HTTP API layer — no `fetch` to backend URLs; mock data in screen/component files.

**Web:** One demo route handler only; admin/vitrine data from `web/lib/mock-data.ts`.

| Location | Data |
|----------|------|
| `mobile/src/screens/AlertsScreen.tsx` | `alerts` array (4 items) |
| `mobile/src/components/dashboard/HistoryChart.tsx` | `data` array (8 time buckets) |
| `mobile/src/screens/DashboardScreen.tsx` | Inline props to `Gauge` / `StatCard` |
| `mobile/src/screens/SettingsScreen.tsx` | Profile, toggles, sliders, hardware cards |
| `mobile/src/screens/CriticalAlertModal.tsx` | Hardcoded CO 450 ppm demo copy |
| `web/lib/mock-data.ts` | `sensors`, `recentAlerts`, `dashboardStats`, `alertTypes` |
| `web/app/admin/devices/page.tsx` | Local `devices` array (gateways) |

---

## Endpoints

| Method | Path | Auth | Request | Response | Errors |
|--------|------|------|---------|----------|--------|
| `POST` | `/api/alerts` | None | JSON: `{ sensorId, sensorName?, alertType, triggeredAt }` | `200` `{ ok: true, message: string, received: body }` | Standard Next parse errors |

**Implementation:** `web/app/api/alerts/route.ts` — logs body with `console.log`, no database. French `message`: « Alerte enregistrée (démo — sans persistance) ».

**Client:** `web/components/dashboard/FakeAlertPanel.tsx` (`fetch` on trigger).

All other routes are static React Server/Client pages — no REST surface.

---

## Future integration notes (not implemented)

When adding an API, prefer:

1. **Mobile:** `mobile/src/lib/api.ts` or `mobile/src/services/` for client + types
2. **Web:** `web/lib/api.ts` or Route Handlers under `web/app/api/`
3. Environment keys via Expo (`EXPO_PUBLIC_*`) or Next (`NEXT_PUBLIC_*`) in `.env` (gitignored locally)
4. French error strings mapped from server codes in the UI layer
5. Replace mock arrays with hooks / server actions when wired

Do not invent placeholder endpoints in this file; update with real method/path/shape when code exists.
