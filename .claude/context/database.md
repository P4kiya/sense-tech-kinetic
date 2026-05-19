# Database — SENSE-TECH Kinetic

## Summary

**No database.** Neither the mobile app nor the web app uses SQLite, AsyncStorage persistence, Realm, Supabase, Firebase, or any ORM. `POST /api/alerts` does not persist data.

- No schema migrations
- No tables or collections
- No local persistence of alerts, thresholds, or device list (all UI state is in-memory `useState` only)

---

## Schema

| Table | Fields | Relationships | Indexes |
|-------|--------|---------------|---------|
| — | — | — | — |

**N/A**

---

## In-memory state only

| Screen / component | State | Lost on reload |
|------------------|-------|----------------|
| `AlertsScreen` | `filter: AlertFilter` | Yes |
| `SettingsScreen` | Toggle on/off, slider values | Yes |
| `mobile/App.tsx` | `showCriticalAlert` | Yes |
| `CriticalAlertModal` | Controlled by parent `visible` | Yes |

---

## Future integration notes (not implemented)

If persistence is added:

- Prefer `@react-native-async-storage/async-storage` for simple settings, or SQLite/WatermelonDB for offline alert history
- Document tables here with field types and constraints
- PPM thresholds and device list should sync from backend when available

Do not add fictional tables to this file.
