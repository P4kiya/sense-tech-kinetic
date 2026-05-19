import { TextStyle } from 'react-native';
import { colors } from './colors';

export const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

export const typography = {
  brand: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    letterSpacing: 2,
    color: colors.onSurface,
  } satisfies TextStyle,
  pageTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    letterSpacing: -0.6,
    color: colors.onSurface,
  } satisfies TextStyle,
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.onSurface,
  } satisfies TextStyle,
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    color: colors.onSurface,
    lineHeight: 22,
  } satisfies TextStyle,
  caption: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: colors.onSurfaceVariant,
  } satisfies TextStyle,
  overline: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.onSurfaceVariant,
  } satisfies TextStyle,
  metric: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    letterSpacing: -0.5,
    color: colors.onSurface,
  } satisfies TextStyle,
  metricLg: {
    fontFamily: fontFamily.bold,
    fontSize: 48,
    letterSpacing: -2,
    color: colors.onSurface,
  } satisfies TextStyle,
  tabLabel: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: colors.onSurfaceVariant,
  } satisfies TextStyle,
  tabLabelActive: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: colors.primary,
  } satisfies TextStyle,
} as const;
