import { View, Text, StyleSheet } from 'react-native';
import { Radio, Bell } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { TOP_BAR_HEIGHT } from '../../theme/layout';
import { ScalePressable } from '../ui/ScalePressable';

export function TopBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, height: insets.top + TOP_BAR_HEIGHT },
      ]}
    >
      <View style={styles.row}>
        <ScalePressable
          style={styles.iconButton}
          hitSlop={8}
          haptic="selection"
          rippleColor="rgba(79, 107, 237, 0.18)"
        >
          <Radio size={20} color={colors.primary} strokeWidth={2.25} />
        </ScalePressable>

        <View style={styles.brand}>
          <View style={styles.brandMark} />
          <Text style={styles.title}>SENSE-TECH</Text>
        </View>

        <ScalePressable
          style={styles.iconButton}
          hitSlop={8}
          haptic="selection"
          rippleColor="rgba(28, 33, 48, 0.08)"
        >
          <Bell size={20} color={colors.onSurface} strokeWidth={2.25} />
          <View style={styles.badge} />
        </ScalePressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenX,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  brandMark: {
    width: 3,
    height: 16,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    ...typography.brand,
    fontSize: 14,
    letterSpacing: 1.4,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: radius.full,
    backgroundColor: colors.error,
    borderWidth: 1.5,
    borderColor: colors.surface,
  },
});
