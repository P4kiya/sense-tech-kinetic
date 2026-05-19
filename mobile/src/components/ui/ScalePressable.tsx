import { useRef } from 'react';
import {
  Animated,
  Pressable,
  PressableProps,
  Platform,
} from 'react-native';
import { triggerHaptic, type HapticKind } from '../../lib/haptics';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ScalePressableProps = PressableProps & {
  haptic?: HapticKind;
  /** Android ripple color */
  rippleColor?: string;
  /** Slightly stronger press scale (e.g. primary CTAs) */
  pressScale?: number;
};

export function ScalePressable({
  children,
  style,
  haptic = 'light',
  rippleColor,
  pressScale = 0.96,
  onPressIn,
  onPressOut,
  onPress,
  disabled,
  android_ripple,
  ...rest
}: ScalePressableProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const defaultRipple =
    Platform.OS === 'android'
      ? { color: rippleColor ?? 'rgba(79, 107, 237, 0.14)', foreground: true as const }
      : undefined;

  const runIn = (e: Parameters<NonNullable<PressableProps['onPressIn']>>[0]) => {
    onPressIn?.(e);
    Animated.spring(scale, {
      toValue: pressScale,
      useNativeDriver: true,
      friction: 5,
      tension: 480,
    }).start();
  };

  const runOut = (e: Parameters<NonNullable<PressableProps['onPressOut']>>[0]) => {
    onPressOut?.(e);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 6,
      tension: 380,
    }).start();
  };

  const runPress = (e: Parameters<NonNullable<PressableProps['onPress']>>[0]) => {
    if (!disabled && haptic !== 'none') {
      triggerHaptic(haptic);
    }
    onPress?.(e);
  };

  return (
    <AnimatedPressable
      {...rest}
      disabled={disabled}
      onPressIn={runIn}
      onPressOut={runOut}
      onPress={runPress}
      android_ripple={android_ripple ?? defaultRipple}
      style={(state) => [
        { transform: [{ scale }] },
        typeof style === 'function' ? style(state) : style,
        state.pressed && Platform.OS === 'ios' && styles.pressedIos,
      ]}
    >
      {children}
    </AnimatedPressable>
  );
}

const styles = {
  pressedIos: {
    opacity: 0.88,
  },
};
