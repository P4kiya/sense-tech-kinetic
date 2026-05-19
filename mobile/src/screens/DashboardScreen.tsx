import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Thermometer, Droplets, Battery } from 'lucide-react-native';
import { Gauge } from '../components/dashboard/Gauge';
import { StatCard } from '../components/dashboard/StatCard';
import { HistoryChart } from '../components/dashboard/HistoryChart';
import { StatusChip } from '../components/dashboard/StatusChip';
import { Card } from '../components/ui/Card';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export function DashboardScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour</Text>
        <Text style={styles.pageTitle}>Tableau de bord</Text>
      </View>

      <StatusChip label="Système normal" updated="il y a 2 min" />

      <Card elevated style={styles.gaugeCard}>
        <Gauge value={12} max={100} label="Niveau de gaz" unit="PPM" />
      </Card>

      <View style={styles.statsRow}>
        <StatCard label="Température" value="22°C" icon={Thermometer} />
        <StatCard label="Humidité" value="45%" icon={Droplets} />
        <StatCard label="Batterie" value="88%" icon={Battery} />
      </View>

      <HistoryChart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 4,
    gap: spacing.section,
    paddingBottom: 96,
  },
  header: {
    gap: 4,
    marginBottom: 4,
  },
  greeting: {
    ...typography.caption,
    color: colors.primary,
    textTransform: 'none',
    letterSpacing: 0,
    fontSize: 13,
  },
  pageTitle: {
    ...typography.pageTitle,
  },
  gaugeCard: {
    paddingVertical: 28,
    paddingHorizontal: spacing.card,
    alignItems: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.item,
  },
});
