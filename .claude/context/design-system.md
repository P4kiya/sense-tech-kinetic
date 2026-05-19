# Design System — SENSE-TECH Kinetic

**Mobile** uses React Native `StyleSheet` and TypeScript theme modules (below). **Web** uses CSS variables in `web/app/globals.css` and Tailwind v4 — see [Web design tokens](#web-design-tokens-webappglobalscss) at the end of this file.

Mobile: **no CSS variables**, **no `@keyframes`**, **no responsive CSS breakpoints**. Layout adapts via flexbox, safe-area insets, and fixed token scales.

---

## Color tokens (`mobile/src/theme/colors.ts`)

| Token | Hex | Usage |
|-------|-----|--------|
| `background` | `#F5F6F8` | Screen root, top bar, nav background |
| `surface` | `#FFFFFF` | Cards, tab bar, modals |
| `surfaceContainerLow` | `#FFFFFF` | Reserved / same as surface |
| `surfaceContainer` | `#FFFFFF` | Reserved |
| `surfaceContainerHigh` | `#F9FAFB` | Modal detail blocks |
| `surfaceContainerHighest` | `#EEF1F5` | Segmented control tracks, switch off track, chart grid |
| `onSurface` | `#1C2130` | Primary text |
| `onSurfaceVariant` | `#6B7280` | Secondary text, inactive tab icons |
| `primary` | `#4F6BED` | Accent, links, active states, gauge stroke |
| `onPrimary` | `#FFFFFF` | Text on primary (rare) |
| `primaryContainer` | `#EEF1FD` | Icon backgrounds, active tab slot, badges |
| `onPrimaryContainer` | `#4F6BED` | Text on primary container |
| `secondary` | `#C98A1A` | Alias of warning |
| `warning` | `#C98A1A` | Warning severity, sliders |
| `warningContainer` | `#FEF7EC` | Warning badges, warning CTA bg |
| `error` | `#E5484D` | Critical alerts, emergency button |
| `errorContainer` | `#FEF2F2` | Critical icon backgrounds |
| `onError` | `#FFFFFF` | Text on error buttons |
| `onErrorContainer` | `#B42318` | Dark error text (reserved) |
| `outline` | `#D8DCE5` | Borders (reserved) |
| `outlineVariant` | `#E8EBF0` | Card borders, dividers |
| `success` | `#0D9F6E` | OK status, resolved filter |
| `successContainer` | `#ECFDF5` | Success chips/badges |
| `shadow` | `#1C2130` | Shadow color for elevation |

### Ad-hoc rgba (not in `colors` object)

| Value | Where |
|-------|--------|
| `rgba(79, 107, 237, 0.14)` | Default Android ripple (`ScalePressable`) |
| `rgba(79, 107, 237, 0.12)` | Filter bar / add-device ripples |
| `rgba(79, 107, 237, 0.18)` | TopBar radio ripple |
| `rgba(28, 33, 48, 0.08)` | TopBar bell ripple |
| `rgba(28, 33, 48, 0.45)` | Critical modal overlay |
| `rgba(13, 159, 110, 0.15)` | StatusChip border |
| `rgba(201, 138, 26, 0.25)` | Warning alert action border |
| `rgba(255, 255, 255, 0.22–0.25)` | Critical button ripples |
| `` `${accent}18` `` | Hardware icon bg (8-digit hex alpha) |

### Shadows (`shadows` export)

**`shadows.sm`**
- `shadowColor`: `colors.shadow`
- `shadowOffset`: `{ width: 0, height: 2 }`
- `shadowOpacity`: `0.06`
- `shadowRadius`: `8`
- `elevation`: `3`

**`shadows.md`**
- `shadowOffset`: `{ width: 0, height: 8 }`
- `shadowOpacity`: `0.1`
- `shadowRadius`: `20`
- `elevation`: `8`

Used on: `Card` (elevated), `CustomTabBar`, active filter tab, `CriticalAlertModal` card.

---

## Spacing scale (`mobile/src/theme/spacing.ts`)

| Token | px | Typical use |
|-------|-----|-------------|
| `screenX` | 24 | Horizontal screen padding |
| `screenY` | 8 | Minor vertical rhythm |
| `section` | 20 | Gap between major sections |
| `card` | 20 | Card inner padding |
| `cardSm` | 16 | Smaller card padding |
| `item` | 12 | List gaps, stat row gap |
| `tight` | 8 | Dense spacing |

**Additional layout constants (not in `spacing.ts`)**

| Constant | Value | File |
|----------|-------|------|
| `TOP_BAR_HEIGHT` | 48 | `mobile/src/theme/layout.ts` |
| `TAB_BAR_HEIGHT` | 78 | `mobile/App.tsx` (content padding below tabs) |
| Scroll `paddingBottom` | 96 | All main screens |
| Custom tab bar `minHeight` | 64 | `CustomTabBar` |
| Custom tab `minHeight` | 48 | `CustomTabBar` |
| Chart `CHART_HEIGHT` | 112 | `HistoryChart` |
| Gauge SVG size | 200×200 | `Gauge` |

---

## Radius scale (`mobile/src/theme/radius.ts`)

| Token | px | Usage |
|-------|-----|--------|
| `xs` | 8 | — |
| `sm` | 12 | Icon buttons, bars, small badges |
| `md` | 16 | Buttons, hardware icons, filter tabs |
| `lg` | 20 | Cards, tab press area |
| `xl` | 24 | Tab bar container, modal card |
| `full` | 9999 | Pills, avatars, dots, chips |

---

## Typography (`mobile/src/theme/typography.ts`)

### Font families (loaded in `mobile/App.tsx`)

| Token | Expo font |
|-------|-----------|
| `fontFamily.regular` | `Inter_400Regular` |
| `fontFamily.medium` | `Inter_500Medium` |
| `fontFamily.semiBold` | `Inter_600SemiBold` |
| `fontFamily.bold` | `Inter_700Bold` |

### Preset styles (size + weight + color)

| Preset | Family | Size | Weight (via font) | Letter spacing | Other |
|--------|--------|------|-------------------|----------------|-------|
| `brand` | bold | 16 | 700 | 2 | `colors.onSurface` |
| `pageTitle` | bold | 26 | 700 | -0.6 | |
| `sectionTitle` | semiBold | 15 | 600 | 0 | |
| `body` | regular | 15 | 400 | 0 | `lineHeight: 22` |
| `caption` | medium | 12 | 500 | 0 | `colors.onSurfaceVariant` |
| `overline` | semiBold | 11 | 600 | 0.8 | `textTransform: 'uppercase'` |
| `metric` | bold | 22 | 700 | -0.5 | |
| `metricLg` | bold | 48 | 700 | -2 | Gauge center value uses 52 locally |
| `tabLabel` | semiBold | 11 | 600 | 0 | inactive |
| `tabLabelActive` | semiBold | 11 | 600 | 0 | `colors.primary` |

### Local overrides (common)

- Top bar title: `brand` + `fontSize: 14`, `letterSpacing: 1.4`
- Dashboard greeting: `caption` with `color: primary`, `fontSize: 13`, no uppercase
- StatCard value: `metric` at `fontSize: 20`
- Alert filter tabs: `tabLabel` at `fontSize: 13`
- History chart time labels: `caption.fontFamily`, `fontSize: 9`, `fontWeight: '500'`

---

## Motion / animation

**No `@keyframes`.** Motion is implemented with:

1. **`ScalePressable`** — `Animated.spring` on press:
   - Press in: `toValue: pressScale` (default `0.96`, tabs `0.92`, modal CTAs `0.97`)
   - Press out: `toValue: 1`
   - Spring: `friction` 5–6, `tension` 380–480, `useNativeDriver: true`
2. **iOS pressed state** — `opacity: 0.88` when pressed
3. **Android** — `android_ripple` with configurable color
4. **Modal** — React Native `Modal` with `animationType="fade"`
5. **Critical alert demo** — `setTimeout` 5000ms in `mobile/App.tsx`

---

## Haptics (`mobile/src/lib/haptics.ts`)

| Kind | Implementation | Typical use |
|------|----------------|-------------|
| `selection` | `selectionAsync` | Tabs, filters, switches |
| `light` | `ImpactFeedbackStyle.Soft` | Default buttons |
| `medium` | `Medium` | Secondary actions |
| `heavy` | `Heavy` | Critical CTAs |
| `success` | `NotificationFeedbackType.Success` | Resolve alert |
| `warning` / `error` | Notification types | Outcomes |
| `none` | Skip | Disabled / no feedback |
| Web | No-op | `Platform.OS === 'web'` |

---

## Component patterns

### Card
- `backgroundColor: surface`, `borderRadius: radius.lg`, `borderWidth: 1`, `borderColor: outlineVariant`
- Optional `elevated` → `shadows.md` vs `shadows.sm`

### Segmented control (`AlertFilterBar`)
- Track: `surfaceContainerHighest`, `radius.lg`, `padding: 4`, `gap: 4`
- Each tab in `flex: 1` `tabSlot`; active tab gets themed bg + `shadows.sm`

### Top bar
- Fixed absolute top, `zIndex: 50`, height `insets.top + TOP_BAR_HEIGHT`
- Icon buttons: 40×40, `radius.sm`, bordered surface

### Bottom tab bar
- Floating pill: `radius.xl`, horizontal `screenX` margin, icon-only (24px Lucide)
- Active: top pill indicator 28×3, `primaryContainer` icon slot

### Buttons with icon + text
- Always wrap in inner `View` with `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'center'`, `gap`
- Use `alignSelf: 'stretch'` on full-width CTAs

---

## Responsive / breakpoints

**Not defined.** Single mobile portrait layout (`app.json`: `"orientation": "portrait"`). iOS `supportsTablet: true` but UI is not tablet-adapted. Safe areas handled via `useSafeAreaInsets()` only.

---

## Navigation theme (`mobile/App.tsx`)

```ts
navTheme.colors.background = colors.background
navTheme.colors.card = colors.surface
navTheme.colors.border = colors.outlineVariant
navTheme.colors.text = colors.onSurface
navTheme.colors.primary = colors.primary
dark: false
```

## Expo shell

- Splash / adaptive icon background: `#F5F6F8`
- `userInterfaceStyle`: `light`
- `StatusBar`: `style="dark"`

---

## Web design tokens (`web/app/globals.css`)

Tailwind theme via `@theme inline` with literal hex (not linked to mobile `colors.ts`).

| Token / class | Value | Usage |
|---------------|-------|--------|
| `--background` / `bg-background` | `#FBFBFD` | Page background |
| `--surface` | `#FFFFFF` | Cards, inputs |
| `--primary` | `#1D1D1F` | Primary buttons, dark CTA band |
| `--accent` | `#0071E3` | Link hovers (use sparingly) |
| `--on-surface` | `#1D1D1F` | Body text |
| `--on-surface-variant` | `#6E6E73` | Secondary text |
| `--outline` / `--outline-variant` | `#D2D2D7` / `#E8E8ED` | Borders |
| `.text-page-title`, `.text-lead-title`, etc. | — | Typography presets (Inter via `layout.tsx`) |
| `.badge-kicker` | — | Section label pills on landing |
| `.select-field` | — | Styled native `<select>` (chevron via `Select.tsx`) |
| `.shadow-card-sm` / `-md` / `-lg` | layered rgba shadows | Cards; hover uses `-lg` |

**Motion:** Framer Motion in `web/components/ui/Reveal.tsx`, `web/lib/motion.ts`; `prefers-reduced-motion` respected. Landing `ScrollProgress` bar.

**Scrollbar:** `html` scrollbar hidden globally; admin main pane uses `overflow-y-auto`.

**Do not** use mobile primary `#4F6BED` on web unless explicitly re-theming.
