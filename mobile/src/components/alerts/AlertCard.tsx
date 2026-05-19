import { View, Text, StyleSheet } from 'react-native';
import { ScalePressable } from '../ui/ScalePressable';
import { AlertTriangle, CheckCircle, MapPin } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';
import { Card } from '../ui/Card';

export type AlertSeverity = 'critical' | 'warning' | 'resolved';

interface AlertCardProps {
  title: string;
  location: string;
  time: string;
  severity: AlertSeverity;
}

const configs = {
  critical: {
    icon: AlertTriangle,
    color: colors.error,
    bg: colors.errorContainer,
    label: 'Critique',
  },
  warning: {
    icon: AlertTriangle,
    color: colors.warning,
    bg: colors.warningContainer,
    label: 'Avertissement',
  },
  resolved: {
    icon: CheckCircle,
    color: colors.success,
    bg: colors.successContainer,
    label: 'Résolu',
  },
} as const;

export function AlertCard({ title, location, time, severity }: AlertCardProps) {
  const config = configs[severity];
  const Icon = config.icon;

  return (
    <Card style={[styles.card, severity === 'resolved' && styles.resolved]}>
      <View style={styles.row}>
        <View style={[styles.badge, { backgroundColor: config.bg }]}>
          <Icon size={14} color={config.color} strokeWidth={2.5} />
          <Text style={[styles.badgeText, { color: config.color }]}>{config.label}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.locationRow}>
        <MapPin size={15} color={colors.onSurfaceVariant} strokeWidth={2} />
        <Text style={styles.location}>{location}</Text>
      </View>
      {severity !== 'resolved' ? (
        <ScalePressable
          haptic={severity === 'critical' ? 'heavy' : 'medium'}
          pressScale={0.96}
          rippleColor={
            severity === 'critical' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(201, 138, 26, 0.2)'
          }
          style={[styles.action, severity === 'critical' ? styles.actionCritical : styles.actionWarning]}
        >
          <Text style={[styles.actionText, severity === 'warning' && styles.actionTextWarning]}>
            {severity === 'critical' ? 'Accuser réception' : 'Enquêter'}
          </Text>
        </ScalePressable>
      ) : (
        <Text style={styles.cleared}>Effacé automatiquement</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    gap: 12,
  },
  resolved: {
    opacity: 0.88,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  badgeText: {
    fontFamily: typography.tabLabelActive.fontFamily,
    fontSize: 12,
  },
  time: {
    ...typography.caption,
  },
  title: {
    ...typography.sectionTitle,
    fontSize: 17,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  location: {
    ...typography.body,
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  action: {
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: radius.md,
    marginTop: 4,
    overflow: 'hidden',
  },
  actionCritical: {
    backgroundColor: colors.error,
  },
  actionWarning: {
    backgroundColor: colors.warningContainer,
    borderWidth: 1,
    borderColor: 'rgba(201, 138, 26, 0.25)',
  },
  actionText: {
    fontFamily: typography.tabLabelActive.fontFamily,
    fontSize: 14,
    color: colors.onError,
  },
  actionTextWarning: {
    color: colors.warning,
  },
  cleared: {
    ...typography.caption,
    marginTop: 4,
  },
});
