import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';

interface StatusChipProps {
  label: string;
  updated: string;
}

export function StatusChip({ label, updated }: StatusChipProps) {
  return (
    <View style={styles.row}>
      <View style={styles.chip}>
        <View style={styles.dot} />
        <Text style={styles.chipText}>{label}</Text>
      </View>
      <Text style={styles.updated}>{updated}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.successContainer,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'rgba(13, 159, 110, 0.15)',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.success,
  },
  chipText: {
    ...typography.sectionTitle,
    fontSize: 14,
    color: colors.success,
  },
  updated: {
    ...typography.caption,
  },
});
