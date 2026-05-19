import { View, Text, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';
import { Card } from '../ui/Card';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.iconWrap}>
        <Icon size={20} color={colors.primary} strokeWidth={2.25} />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    gap: 10,
    minHeight: 118,
    justifyContent: 'center',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    ...typography.metric,
    fontSize: 20,
  },
  label: {
    ...typography.overline,
    fontSize: 10,
    textAlign: 'center',
  },
});
