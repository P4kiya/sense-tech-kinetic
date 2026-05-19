import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { AlertCard } from '../components/alerts/AlertCard';
import { AlertFilterBar, type AlertFilter } from '../components/alerts/AlertFilterBar';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

const alerts = [
  {
    title: 'Pression au-dessus de la limite',
    location: 'Salle des chaudières principale',
    time: 'il y a 15 min',
    severity: 'critical' as const,
  },
  {
    title: 'Fluctuation de température',
    location: 'Tour de refroidissement B',
    time: 'il y a 42 min',
    severity: 'warning' as const,
  },
  {
    title: 'Baisse du débit',
    location: 'Tronçon de canalisation 4',
    time: 'il y a 2 h',
    severity: 'resolved' as const,
  },
  {
    title: 'Panne d’alimentation',
    location: 'Poste Alpha',
    time: 'il y a 3 h',
    severity: 'critical' as const,
  },
];

export function AlertsScreen() {
  const [filter, setFilter] = useState<AlertFilter>('Tous');

  const filtered = alerts.filter((a) => {
    if (filter === 'Tous') return true;
    if (filter === 'Critique') return a.severity === 'critical';
    return a.severity === 'resolved';
  });

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Alertes</Text>
        <Text style={styles.subtitle}>Anomalies et franchissements de seuils</Text>
      </View>

      <View style={styles.filterWrap}>
        <AlertFilterBar value={filter} onChange={setFilter} />
      </View>

      <View style={styles.list}>
        {filtered.map((alert) => (
          <AlertCard key={alert.title} {...alert} />
        ))}
      </View>
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
    gap: 6,
    marginBottom: 4,
  },
  title: {
    ...typography.pageTitle,
  },
  subtitle: {
    ...typography.body,
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  filterWrap: {
    width: '100%',
    alignSelf: 'stretch',
  },
  list: {
    gap: spacing.item,
  },
});
