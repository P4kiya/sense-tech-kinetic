import { View, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LayoutDashboard, AlertTriangle, Settings, LucideIcon } from 'lucide-react-native';
import { colors, shadows } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { ScalePressable } from '../ui/ScalePressable';

const TAB_ICONS: Record<string, LucideIcon> = {
  Dashboard: LayoutDashboard,
  Alerts: AlertTriangle,
  Settings: Settings,
};

export function CustomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const bottom = Math.max(insets.bottom, 10);

  return (
    <View style={[styles.outer, { paddingBottom: bottom }]}>
      <View style={[styles.bar, shadows.md]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.title ?? route.name;
          const isFocused = state.index === index;
          const Icon = TAB_ICONS[route.name] ?? LayoutDashboard;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <ScalePressable
              key={route.key}
              haptic="selection"
              pressScale={0.92}
              rippleColor="rgba(79, 107, 237, 0.14)"
              onPress={onPress}
              style={styles.tab}
              accessibilityRole="tab"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={label}
            >
              {isFocused && <View style={styles.activePill} />}
              <View style={[styles.iconSlot, isFocused && styles.iconSlotActive]}>
                <Icon
                  size={24}
                  color={isFocused ? colors.primary : colors.onSurfaceVariant}
                  strokeWidth={isFocused ? 2.5 : 2}
                />
              </View>
            </ScalePressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.screenX,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    paddingVertical: 10,
    paddingHorizontal: 12,
    minHeight: 64,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  activePill: {
    position: 'absolute',
    top: 6,
    width: 28,
    height: 3,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  iconSlot: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSlotActive: {
    backgroundColor: colors.primaryContainer,
  },
});
