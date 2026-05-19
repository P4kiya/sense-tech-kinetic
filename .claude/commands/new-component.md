# Command: Create a New Component

## File location

| Component kind | Path | Example |
|----------------|------|---------|
| Primitive (press, card) | `mobile/src/components/ui/` | `ScalePressable.tsx` |
| Layout chrome | `mobile/src/components/layout/` | `TopBar.tsx` |
| Domain widget | `mobile/src/components/<domain>/` | `mobile/src/components/alerts/AlertCard.tsx` |

Use **PascalCase** filename matching the export: `MyWidget.tsx` → `export function MyWidget`.

## Boilerplate

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Card } from '../ui/Card';

interface MyWidgetProps {
  title: string;
}

export function MyWidget({ title }: MyWidgetProps) {
  return (
    <Card style={styles.root}>
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: spacing.card,
    gap: spacing.item,
  },
  title: {
    ...typography.sectionTitle,
  },
});
```

Adjust `../../` depth based on folder nesting.

## Styling rules

1. Import tokens from `mobile/src/theme/` — never hardcode `#4F6BED` if `colors.primary` exists
2. Use `radius.*` for all corners; default cards use `radius.lg`
3. Spread typography presets: `...typography.body` then override `fontSize` if needed
4. Shadows: import `shadows` from `colors.ts`; use `shadows.sm` / `shadows.md` only
5. Prefer `Card` wrapper for elevated surfaces instead of duplicating border/shadow styles

## Export pattern

- **Named export only:** `export function MyWidget`
- Export related types from same file: `export type MyWidgetVariant = 'a' | 'b'`
- No default exports

## Import style

```tsx
import { ScalePressable } from '../ui/ScalePressable';
import { Thermometer } from 'lucide-react-native';
```

Order: React → RN → third-party → theme → local components → lib.

## Interactive components

Extend or wrap `ScalePressable`, not raw `Pressable`:

```tsx
<ScalePressable haptic="light" style={styles.btn} onPress={onPress}>
  <Text style={styles.btnText}>Label</Text>
</ScalePressable>
```

For toggles inside forms, `Switch` may call `triggerHaptic('selection')` directly.

## Props conventions

- Use `interface` for props (not `type` alias) unless union-heavy
- String labels in French at call site; component props stay language-agnostic (`title: string`)
- Optional styling: `style?: StyleProp<ViewStyle>` on container components
- Icons: pass `LucideIcon` type, render as `icon: Icon` → `<Icon size={20} color={colors.primary} />`

## Accessibility

- `accessibilityRole`, `accessibilityLabel` on icon-only buttons
- `numberOfLines` + `flexShrink` on dense rows (see `HardwareCard`)

## Layout pitfalls (must not regress)

- Segmented / equal columns: wrap each segment in `flex: 1` parent (`tabSlot` pattern)
- Row icon + text: inner `flexDirection: 'row'` View; avoid centering parent that collapses width
- Full-width segment buttons: `width: '100%'` on pressable inside `flex: 1` slot

## After creating

1. Use the component from a screen; keep screen thin
2. Document in `.claude/context/components.md` if reusable across features
3. Run `npm run lint`

## When to keep logic in the screen

- One-off section used once → private function in screen file (`Section`, `ToggleRow` in `SettingsScreen.tsx`)
- Extract to `mobile/src/components/` when second consumer appears or file exceeds ~300 lines
