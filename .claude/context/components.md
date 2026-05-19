# Components — SENSE-TECH Kinetic

All paths relative to repo root. Screens live in `mobile/src/screens/` and are not listed here unless they export reusable pieces.

---

## `ScalePressable` — `mobile/src/components/ui/ScalePressable.tsx`

**Structure:** `Animated.createAnimatedComponent(Pressable)` with spring scale transform, optional Android ripple, haptic on `onPress`.

**Props (extends `PressableProps`):**

| Prop | Default | Description |
|------|---------|-------------|
| `haptic` | `'light'` | `HapticKind` from `mobile/src/lib/haptics.ts` |
| `rippleColor` | `rgba(79, 107, 237, 0.14)` | Android ripple |
| `pressScale` | `0.96` | Scale when pressed |
| `disabled` | — | Skips haptic when true |

**Usage:**

```tsx
<ScalePressable haptic="medium" onPress={handlePress} style={styles.button}>
  <Text>Action</Text>
</ScalePressable>
```

**Do not change:** Haptic fires on `onPress` (not `onPressIn`). Default ripple and spring tuning are intentional for native feel.

---

## `Card` — `mobile/src/components/ui/Card.tsx`

**Props:**

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | required |
| `style` | `StyleProp<ViewStyle>` | — |
| `elevated` | `boolean` | `false` → `shadows.sm`; `true` → `shadows.md` |

**Usage:**

```tsx
<Card elevated style={{ padding: 20 }}>
  {children}
</Card>
```

**Do not change:** Base card uses `radius.lg`, white surface, `outlineVariant` border.

---

## `TopBar` — `mobile/src/components/layout/TopBar.tsx`

**Structure:** Safe-area padded fixed header — left `Radio` button, center brand mark + "SENSE-TECH", right `Bell` with red dot badge. No props.

**Usage:** Rendered once in `AppShell` above tab content.

**Do not change:** `TOP_BAR_HEIGHT` (48) + safe area top padding; absolute positioning `zIndex: 50`.

---

## `CustomTabBar` — `mobile/src/components/layout/CustomTabBar.tsx`

**Structure:** Implements `BottomTabBarProps`. Maps route names to Lucide icons: `Dashboard` → `LayoutDashboard`, `Alerts` → `AlertTriangle`, `Settings` → `Settings`.

**Props:** Standard React Navigation tab bar props (`state`, `descriptors`, `navigation`, `insets`).

**Behavior:** Icon-only UI; `tabBarLabel` / `title` used only for `accessibilityLabel`. Active tab shows top pill + `primaryContainer` icon background.

**Do not change:** Floating pill styling, `tabBarShowLabel: false` contract in `mobile/App.tsx`, `haptic="selection"` on tabs.

---

## `Gauge` — `mobile/src/components/dashboard/Gauge.tsx`

**Props:**

| Prop | Type |
|------|------|
| `value` | `number` |
| `max` | `number` |
| `label` | `string` |
| `unit` | `string` |

**Structure:** Label, `react-native-svg` circular progress (r=42, stroke 7), centered value + unit, hint `"{n} % du seuil max."`

**Usage:**

```tsx
<Gauge value={12} max={100} label="Niveau de gaz" unit="PPM" />
```

---

## `StatCard` — `mobile/src/components/dashboard/StatCard.tsx`

**Props:** `label`, `value` (strings), `icon` (`LucideIcon`).

**Structure:** `Card` with icon in `primaryContainer` square, metric value, overline label.

---

## `HistoryChart` — `mobile/src/components/dashboard/HistoryChart.tsx`

**Props:** None (data hardcoded inside).

**Structure:** `Card` with title "Historique 24 h", 8 bar columns (mock PPM), peak bar uses `primary` fill.

**Do not change:** Internal `data` array and `CHART_HEIGHT` unless wiring real time-series API.

---

## `StatusChip` — `mobile/src/components/dashboard/StatusChip.tsx`

**Props:** `label`, `updated` (strings).

**Structure:** Green pill chip with dot + timestamp row.

---

## `AlertCard` — `mobile/src/components/alerts/AlertCard.tsx`

**Exported type:** `AlertSeverity = 'critical' | 'warning' | 'resolved'`

**Props:**

| Prop | Type |
|------|------|
| `title` | `string` |
| `location` | `string` |
| `time` | `string` |
| `severity` | `AlertSeverity` |

**Variants:** Severity drives icon, colors, badge label (Critique / Avertissement / Résolu), and CTA:
- `critical` → "Accuser réception", `haptic="heavy"`, red button
- `warning` → "Enquêter", `haptic="medium"`, warning container
- `resolved` → no button; "Effacé automatiquement"

---

## `AlertFilterBar` — `mobile/src/components/alerts/AlertFilterBar.tsx`

**Exported type:** `AlertFilter = 'Tous' | 'Critique' | 'Résolu'`

**Props:**

| Prop | Type |
|------|------|
| `value` | `AlertFilter` |
| `onChange` | `(filter: AlertFilter) => void` |

**Structure:** Three equal-width segments in `flex: 1` slots (full-width segmented control).

**Do not change:** `tabSlot` + `flex: 1` pattern (required for full-width tabs).

---

## `CriticalAlertModal` — `mobile/src/screens/CriticalAlertModal.tsx`

Treated as overlay component (not a tab screen).

**Props:**

| Prop | Type |
|------|------|
| `visible` | `boolean` |
| `onClose` | `() => void` |

**Structure:** Modal overlay, detail rows (gas type, ppm, location), emergency + resolve buttons with `buttonInner` row layout.

**Do not change:** `buttonInner` row wrapper on full-width buttons; `alignSelf: 'stretch'` on action buttons.

---

## Screen-local helpers (not exported)

In `SettingsScreen.tsx`:

| Name | Role |
|------|------|
| `Section` | Overline title + optional `action` slot (e.g. Ajouter un appareil) |
| `ToggleRow` | Icon + title/desc + `Switch` with selection haptic |
| `ThresholdSlider` | Label + `@react-native-community/slider` 0–1000 |
| `HardwareCard` | Device row with status badge and detail text |

Reuse patterns from these when extending Settings; extract to `mobile/src/components/` only if used twice.

---

## `triggerHaptic` — `mobile/src/lib/haptics.ts`

**Not a component.** Import for non-`ScalePressable` interactions (e.g. `Switch`).

```ts
triggerHaptic('selection');
```

---

## Import conventions

- Theme: `from '../../theme/colors'` (adjust depth)
- UI primitives: `from '../ui/ScalePressable'`
- Icons: `from 'lucide-react-native'`
- Named exports only (no default exports in components)
