import { Modal, View, Text, StyleSheet } from 'react-native';
import { AlertTriangle, Phone, CheckCircle } from 'lucide-react-native';
import { colors, shadows } from '../theme/colors';
import { radius } from '../theme/radius';
import { typography } from '../theme/typography';
import { ScalePressable } from '../components/ui/ScalePressable';
import type { BridgeAlert } from '../lib/alert-bridge';

interface CriticalAlertModalProps {
  visible: boolean;
  onClose: () => void;
  alert?: BridgeAlert | null;
}

export function CriticalAlertModal({ visible, onClose, alert }: CriticalAlertModalProps) {
  const location = alert?.location ?? 'Cuisine du personnel';
  const sensorName = alert?.sensorName ?? 'CO-Zone';
  return (
    <Modal visible={visible} animationType="fade" transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={[styles.card, shadows.md]}>
          <View style={styles.iconWrap}>
            <AlertTriangle size={40} color={colors.error} strokeWidth={2} />
          </View>
          <Text style={styles.heading}>Gaz critique détecté</Text>
          <Text style={styles.subheading}>Action immédiate requise</Text>

          <View style={styles.details}>
            <DetailRow label="Type de gaz" value="CO (monoxyde de carbone)" />
            <DetailRow label="Capteur" value={sensorName} />
            <DetailRow label="Emplacement" value={location} last />
          </View>

          <View style={styles.actions}>
          <ScalePressable
            haptic="heavy"
            pressScale={0.97}
            rippleColor="rgba(255, 255, 255, 0.22)"
            style={styles.emergencyButton}
          >
              <View style={styles.buttonInner}>
                <Phone size={20} color={colors.onError} strokeWidth={2.25} />
                <Text style={styles.emergencyText}>Appeler les secours</Text>
              </View>
            </ScalePressable>

          <ScalePressable
            haptic="success"
            pressScale={0.97}
            rippleColor="rgba(79, 107, 237, 0.12)"
            style={styles.resolveButton}
            onPress={onClose}
          >
              <View style={styles.buttonInner}>
                <View style={styles.resolveIconWrap}>
                  <CheckCircle size={20} color={colors.success} strokeWidth={2.25} />
                </View>
                <Text style={styles.resolveText}>Marquer comme résolu</Text>
              </View>
            </ScalePressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function DetailRow({
  label,
  value,
  highlight,
  last,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  last?: boolean;
}) {
  return (
    <View style={[styles.detailRow, !last && styles.detailBorder]}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, highlight && styles.detailHighlight]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(28, 33, 48, 0.45)',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    padding: 28,
    alignItems: 'center',
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    backgroundColor: colors.errorContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    ...typography.sectionTitle,
    fontSize: 22,
    textAlign: 'center',
  },
  subheading: {
    ...typography.body,
    fontSize: 15,
    color: colors.onSurfaceVariant,
    marginTop: 6,
    marginBottom: 24,
    textAlign: 'center',
  },
  details: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: radius.md,
    padding: 4,
    marginBottom: 24,
    overflow: 'hidden',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  detailBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  detailLabel: {
    ...typography.caption,
    fontSize: 14,
  },
  detailValue: {
    fontFamily: typography.sectionTitle.fontFamily,
    fontSize: 14,
    color: colors.onSurface,
  },
  detailHighlight: {
    fontSize: 18,
    color: colors.error,
  },
  actions: {
    width: '100%',
    alignSelf: 'stretch',
    gap: 10,
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  emergencyButton: {
    alignSelf: 'stretch',
    backgroundColor: colors.error,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  emergencyText: {
    fontFamily: typography.sectionTitle.fontFamily,
    fontSize: 16,
    color: colors.onError,
  },
  resolveButton: {
    alignSelf: 'stretch',
    backgroundColor: colors.surface,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.outlineVariant,
    overflow: 'hidden',
  },
  resolveIconWrap: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.successContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resolveText: {
    fontFamily: typography.sectionTitle.fontFamily,
    fontSize: 16,
    color: colors.onSurface,
  },
});
