import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {
  ShieldCheck,
  Smartphone,
  Mail,
  MessageSquare,
  Thermometer,
  Warehouse,
  Scan,
  LucideIcon,
} from 'lucide-react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import { Card } from '../components/ui/Card';
import { ScalePressable } from '../components/ui/ScalePressable';
import { triggerHaptic } from '../lib/haptics';
import { useAlertBridgeSettings } from '../context/AlertBridgeContext';

export function SettingsScreen() {
  const { pushEnabled, setPushEnabled, hasApiUrl } = useAlertBridgeSettings();
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Paramètres</Text>

      <Section title="Profil opérateur">
        <Card style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1621243848324-ee4f526366fa?auto=format&fit=crop&q=80&w=400',
            }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>J. Doe</Text>
            <Text style={styles.profileId}>ST-9942-A</Text>
            <View style={styles.clearanceBadge}>
              <ShieldCheck size={14} color={colors.primary} strokeWidth={2} />
              <Text style={styles.clearanceText}>Habilitation niveau 4</Text>
            </View>
          </View>
        </Card>
      </Section>

      <Section title="Notifications">
        <Card style={styles.groupCard}>
          <ToggleRow
            icon={Smartphone}
            title="Notifications push"
            desc={
              hasApiUrl
                ? 'Alertes démo depuis l’admin web (son + bannière)'
                : 'Définir EXPO_PUBLIC_API_URL dans mobile/.env'
            }
            value={pushEnabled}
            onValueChange={setPushEnabled}
          />
          <ToggleRow icon={Mail} title="Rapports par e-mail" desc="Synthèses quotidiennes" />
          <ToggleRow
            icon={MessageSquare}
            title="SMS critiques"
            desc="Uniquement incidents de niveau 1"
            defaultOn
          />
        </Card>
      </Section>

      <Section title="Seuils (PPM)">
        <Card style={styles.groupCardPadded}>
          <ThresholdSlider
            label="Seuil critique"
            desc="Déclenche les protocoles d’urgence"
            defaultValue={400}
            valueColor={colors.error}
          />
          <View style={styles.divider} />
          <ThresholdSlider
            label="Seuil d’avertissement"
            desc="Alertes d’investigation"
            defaultValue={150}
            valueColor={colors.warning}
          />
        </Card>
      </Section>

      <Section
        title="Matériel"
        action={
          <ScalePressable
            haptic="medium"
            pressScale={0.96}
            rippleColor="rgba(79, 107, 237, 0.12)"
            style={styles.addDeviceButton}
          >
            <View style={styles.addDeviceInner}>
              <Scan size={16} color={colors.primary} strokeWidth={2.25} />
              <Text style={styles.addDeviceText} numberOfLines={1}>
                Ajouter un appareil
              </Text>
            </View>
          </ScalePressable>
        }
      >
        <HardwareCard
          icon={Thermometer}
          title="Capteur salle chaudières"
          id="SN-883-BR"
          status="En ligne"
          detail="Disponibilité 98,2 %"
          active
        />
        <HardwareCard
          icon={Warehouse}
          title="Entrepôt ouest"
          id="SN-412-WW"
          status="Calibrage"
          detail="Signal faible"
        />
      </Section>
    </ScrollView>
  );
}

function Section({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {action}
      </View>
      {children}
    </View>
  );
}

function ToggleRow({
  icon: Icon,
  title,
  desc,
  defaultOn = false,
  value,
  onValueChange,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  defaultOn?: boolean;
  value?: boolean;
  onValueChange?: (next: boolean) => void;
}) {
  const [internalOn, setInternalOn] = useState(defaultOn);
  const on = value ?? internalOn;

  const handleChange = (next: boolean) => {
    triggerHaptic('selection');
    if (onValueChange) {
      onValueChange(next);
    } else {
      setInternalOn(next);
    }
  };

  return (
    <View style={styles.toggleRow}>
      <View style={styles.toggleLeft}>
        <View style={styles.toggleIcon}>
          <Icon size={18} color={colors.primary} strokeWidth={2} />
        </View>
        <View>
          <Text style={styles.toggleTitle}>{title}</Text>
          <Text style={styles.toggleDesc}>{desc}</Text>
        </View>
      </View>
      <Switch
        value={on}
        onValueChange={handleChange}
        trackColor={{ false: colors.surfaceContainerHighest, true: colors.primaryContainer }}
        thumbColor={on ? colors.primary : colors.surface}
        ios_backgroundColor={colors.surfaceContainerHighest}
      />
    </View>
  );
}

function ThresholdSlider({
  label,
  desc,
  defaultValue,
  valueColor,
}: {
  label: string;
  desc: string;
  defaultValue: number;
  valueColor: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <View style={styles.threshold}>
      <View style={styles.thresholdHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.toggleTitle}>{label}</Text>
          <Text style={styles.toggleDesc}>{desc}</Text>
        </View>
        <Text style={[styles.thresholdValue, { color: valueColor }]}>{Math.round(value)}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={1000}
        step={1}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor={valueColor}
        maximumTrackTintColor={colors.surfaceContainerHighest}
        thumbTintColor={valueColor}
      />
    </View>
  );
}

function HardwareCard({
  icon: Icon,
  title,
  id,
  status,
  detail,
  active = false,
}: {
  icon: LucideIcon;
  title: string;
  id: string;
  status: string;
  detail: string;
  active?: boolean;
}) {
  const accent = active ? colors.success : colors.warning;
  const statusBg = active ? colors.successContainer : colors.warningContainer;

  return (
    <Card style={styles.hardwareCard}>
      <View style={styles.hardwareLeft}>
        <View style={[styles.hardwareIcon, { backgroundColor: `${accent}18` }]}>
          <Icon size={22} color={accent} strokeWidth={2.25} />
        </View>
        <View style={styles.hardwareInfo}>
          <Text style={styles.hardwareTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.hardwareId}>{id}</Text>
        </View>
      </View>
      <View style={styles.hardwareRight}>
        <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
          <Text style={[styles.hardwareStatus, { color: accent }]}>{status}</Text>
        </View>
        <Text style={styles.hardwareDetail} numberOfLines={2}>
          {detail}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 4,
    gap: 28,
    paddingBottom: 96,
  },
  pageTitle: {
    ...typography.pageTitle,
    marginBottom: 4,
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  sectionTitle: {
    ...typography.overline,
    fontSize: 12,
    flexShrink: 0,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.primaryContainer,
  },
  profileInfo: {
    flex: 1,
    gap: 2,
  },
  profileName: {
    ...typography.sectionTitle,
    fontSize: 18,
  },
  profileId: {
    ...typography.caption,
  },
  clearanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.full,
    backgroundColor: colors.primaryContainer,
  },
  clearanceText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  groupCard: {
    overflow: 'hidden',
  },
  groupCardPadded: {
    padding: 20,
    gap: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.outlineVariant,
    marginVertical: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  toggleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 12,
  },
  toggleIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleTitle: {
    ...typography.sectionTitle,
    fontSize: 15,
  },
  toggleDesc: {
    ...typography.caption,
    marginTop: 2,
  },
  threshold: {
    gap: 12,
  },
  thresholdHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },
  thresholdValue: {
    fontSize: 22,
    fontWeight: '600',
  },
  addDeviceButton: {
    flexShrink: 1,
    backgroundColor: colors.primaryContainer,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'rgba(79, 107, 237, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    overflow: 'hidden',
  },
  addDeviceInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  addDeviceText: {
    fontFamily: typography.tabLabelActive.fontFamily,
    fontSize: 11,
    color: colors.primary,
    flexShrink: 1,
  },
  hardwareCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 10,
    gap: 12,
  },
  hardwareLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    minWidth: 0,
  },
  hardwareInfo: {
    flex: 1,
    minWidth: 0,
    paddingRight: 4,
  },
  hardwareTitle: {
    ...typography.sectionTitle,
    fontSize: 15,
    lineHeight: 20,
  },
  hardwareIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  hardwareId: {
    ...typography.caption,
    marginTop: 4,
  },
  hardwareRight: {
    flexShrink: 0,
    maxWidth: '38%',
    alignItems: 'flex-end',
    gap: 6,
    paddingLeft: 4,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.full,
  },
  hardwareStatus: {
    fontFamily: typography.tabLabelActive.fontFamily,
    fontSize: 12,
    textAlign: 'right',
  },
  hardwareDetail: {
    ...typography.caption,
    fontSize: 11,
    textAlign: 'right',
    lineHeight: 15,
  },
});
