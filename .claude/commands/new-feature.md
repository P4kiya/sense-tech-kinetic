# Command: Add a New Feature

Follow this checklist when adding a user-facing feature to SENSE-TECH Kinetic.

## 1. Confirm scope

- Mobile-only (Expo RN). No web-only or backend unless explicitly requested.
- All new copy in **French**.
- Use existing theme tokens; read `.claude/context/design-system.md` before adding colors or spacing.

## 2. Choose where code lives

```
mobile/
  App.tsx             # Navigation, fonts, global overlays
  src/
    screens/          # Full-page views (tab or modal)
    components/
      dashboard/      # Dashboard-specific widgets
      alerts/         # Alert list / filters
      layout/         # TopBar, CustomTabBar
      ui/             # Reusable primitives (Card, ScalePressable)
    theme/            # colors, typography, spacing, radius, layout
    lib/              # Non-UI utilities (e.g. haptics)
```

| Feature type | Location |
|--------------|----------|
| New main tab | New `mobile/src/screens/*Screen.tsx` + `Tab.Screen` in `mobile/App.tsx` + icon in `CustomTabBar` `TAB_ICONS` |
| New section on existing screen | Extend screen file or extract component under `mobile/src/components/<domain>/` |
| Global overlay / modal | `mobile/src/screens/` or `mobile/src/components/` + state in `mobile/App.tsx` or parent screen |
| Shared primitive | `mobile/src/components/ui/` |

## 3. Wire navigation (if needed)

In `mobile/App.tsx`:

```tsx
<Tab.Screen name="MyFeature" component={MyFeatureScreen} options={{ tabBarLabel: 'Libellé' }} />
```

In `CustomTabBar.tsx`, add to `TAB_ICONS`:

```tsx
MyFeature: SomeLucideIcon,
```

Use `sceneStyle: { backgroundColor: colors.background }`. Do not use deprecated `sceneContainerStyle`.

## 4. Screen template

```tsx
import { ScrollView, StyleSheet } from 'react-native';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export function MyFeatureScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* content */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 4,
    gap: spacing.section,
    paddingBottom: 96, // clear floating tab bar
  },
});
```

Account for `TopBar` + safe area: content starts below `paddingTop: insets.top + TOP_BAR_HEIGHT` applied in `AppShell`, not inside each screen.

## 5. Interactions

- Buttons: `ScalePressable` with appropriate `haptic` (`selection` | `light` | `medium` | `heavy`)
- Icon + text buttons: inner `View` with `flexDirection: 'row'`, `alignItems: 'center'`, `gap`
- Full-width controls: `alignSelf: 'stretch'` or parent `width: '100%'`

## 6. Data

- Until API exists, colocate mock data at top of screen file (see `AlertsScreen.tsx`)
- Do not add fake `fetch` URLs; document real endpoints in `.claude/context/api.md` when implemented

## 7. Quality gates

```bash
npm run lint
```

Manual test on device/Expo Go: safe areas, tab bar overlap, filter/tab full width, haptics on physical device.

## 8. Update context docs

If the feature adds colors, components, or API surface, update the matching file under `.claude/context/`.
