import { View, Text, StyleSheet } from 'react-native';
import { colors, shadows } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';
import { ScalePressable } from '../ui/ScalePressable';

export type AlertFilter = 'Tous' | 'Critique' | 'Résolu';

const FILTERS: AlertFilter[] = ['Tous', 'Critique', 'Résolu'];

const FILTER_STYLE: Record<
  AlertFilter,
  { activeBg: string; activeColor: string; ripple: string }
> = {
  Tous: {
    activeBg: colors.surface,
    activeColor: colors.primary,
    ripple: 'rgba(79, 107, 237, 0.12)',
  },
  Critique: {
    activeBg: colors.errorContainer,
    activeColor: colors.error,
    ripple: 'rgba(229, 72, 77, 0.15)',
  },
  Résolu: {
    activeBg: colors.successContainer,
    activeColor: colors.success,
    ripple: 'rgba(13, 159, 110, 0.15)',
  },
};

interface AlertFilterBarProps {
  value: AlertFilter;
  onChange: (filter: AlertFilter) => void;
}

export function AlertFilterBar({ value, onChange }: AlertFilterBarProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.track}>
        {FILTERS.map((tab) => {
          const active = value === tab;
          const theme = FILTER_STYLE[tab];

          return (
            <View key={tab} style={styles.tabSlot}>
              <ScalePressable
                haptic="selection"
                pressScale={0.96}
                rippleColor={theme.ripple}
                onPress={() => onChange(tab)}
                style={[
                  styles.tab,
                  active && { backgroundColor: theme.activeBg },
                  active && shadows.sm,
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    active && styles.tabTextActive,
                    active && { color: theme.activeColor },
                  ]}
                >
                  {tab}
                </Text>
              </ScalePressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignSelf: 'stretch',
  },
  track: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    padding: 4,
    gap: 4,
  },
  tabSlot: {
    flex: 1,
    minWidth: 0,
  },
  tab: {
    width: '100%',
    minHeight: 44,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tabText: {
    ...typography.tabLabel,
    fontSize: 13,
    textAlign: 'center',
  },
  tabTextActive: {
    fontFamily: typography.tabLabelActive.fontFamily,
  },
});
