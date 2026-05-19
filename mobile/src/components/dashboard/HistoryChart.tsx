import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';
import { Card } from '../ui/Card';

const data = [
  { time: '0h', value: 12 },
  { time: '3h', value: 15 },
  { time: '6h', value: 18 },
  { time: '9h', value: 10 },
  { time: '12h', value: 20 },
  { time: '15h', value: 22 },
  { time: '18h', value: 28 },
  { time: '21h', value: 14 },
];

const maxValue = Math.max(...data.map((d) => d.value));
const CHART_HEIGHT = 112;

export function HistoryChart() {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Historique 24 h</Text>
          <Text style={styles.subtitle}>Niveau de gaz (PPM)</Text>
        </View>
        <View style={styles.trendBadge}>
          <TrendingUp size={16} color={colors.primary} strokeWidth={2.5} />
        </View>
      </View>

      <View style={styles.chartArea}>
        <View style={styles.gridLine} />
        <View style={styles.chart}>
          {data.map((item) => {
            const h = (item.value / maxValue) * CHART_HEIGHT;
            const isPeak = item.value === maxValue;
            return (
              <View key={item.time} style={styles.barColumn}>
                <View
                  style={[
                    styles.bar,
                    { height: h },
                    isPeak && styles.barPeak,
                  ]}
                />
                <Text style={styles.timeLabel}>{item.time}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    ...typography.sectionTitle,
  },
  subtitle: {
    ...typography.caption,
    marginTop: 2,
  },
  trendBadge: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartArea: {
    position: 'relative',
    paddingTop: 4,
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: CHART_HEIGHT,
    height: 1,
    backgroundColor: colors.outlineVariant,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: CHART_HEIGHT + 24,
    gap: 6,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  bar: {
    width: '100%',
    maxWidth: 28,
    minHeight: 8,
    backgroundColor: colors.primaryContainer,
    borderRadius: radius.sm,
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm,
    marginBottom: 8,
  },
  barPeak: {
    backgroundColor: colors.primary,
  },
  timeLabel: {
    fontFamily: typography.caption.fontFamily,
    fontSize: 9,
    color: colors.onSurfaceVariant,
    fontWeight: '500',
  },
});
