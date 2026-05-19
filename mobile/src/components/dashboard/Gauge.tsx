import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

interface GaugeProps {
  value: number;
  max: number;
  label: string;
  unit: string;
}

export function Gauge({ value, max, label, unit }: GaugeProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.ringContainer}>
        <Svg width={200} height={200} viewBox="0 0 100 100" style={styles.svg}>
          <Circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={colors.surfaceContainerHighest}
            strokeWidth={7}
          />
          <Circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={colors.primary}
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            rotation="-90"
            origin="50, 50"
          />
        </Svg>
        <View style={styles.center}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
      <Text style={styles.hint}>{percentage.toFixed(0)} % du seuil max.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '100%',
  },
  label: {
    ...typography.overline,
    marginBottom: 16,
  },
  ringContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    transform: [{ rotate: '-90deg' }],
    position: 'absolute',
  },
  center: {
    alignItems: 'center',
  },
  value: {
    ...typography.metricLg,
    fontSize: 52,
  },
  unit: {
    ...typography.overline,
    marginTop: 4,
    fontSize: 12,
  },
  hint: {
    ...typography.caption,
    marginTop: 12,
  },
});
