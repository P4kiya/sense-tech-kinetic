import { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TopBar } from './src/components/layout/TopBar';
import { CustomTabBar } from './src/components/layout/CustomTabBar';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { AlertsScreen } from './src/screens/AlertsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { CriticalAlertModal } from './src/screens/CriticalAlertModal';
import { AlertBridgeProvider, useAlertBridgeSettings } from './src/context/AlertBridgeContext';
import { useWebAlertBridge } from './src/hooks/useWebAlertBridge';
import type { BridgeAlert } from './src/lib/alert-bridge';
import { colors } from './src/theme/colors';
import { TOP_BAR_HEIGHT } from './src/theme/layout';

const Tab = createBottomTabNavigator();
const TAB_BAR_HEIGHT = 78;

const navTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    border: colors.outlineVariant,
    text: colors.onSurface,
    primary: colors.primary,
  },
};

function MainTabs() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 12);
  const contentBottom = TAB_BAR_HEIGHT + bottomInset;

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: contentBottom,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarLabel: 'Accueil' }} />
      <Tab.Screen name="Alerts" component={AlertsScreen} options={{ tabBarLabel: 'Alertes' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Réglages' }} />
    </Tab.Navigator>
  );
}

function AppShell() {
  const insets = useSafeAreaInsets();
  const { pushEnabled, hasApiUrl } = useAlertBridgeSettings();
  const [criticalAlert, setCriticalAlert] = useState<BridgeAlert | null>(null);
  const [showCriticalAlert, setShowCriticalAlert] = useState(false);

  useWebAlertBridge({
    enabled: pushEnabled && hasApiUrl,
    onCriticalAlert: (alert) => {
      setCriticalAlert(alert);
      setShowCriticalAlert(true);
    },
  });

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <TopBar />
      <View style={[styles.main, { paddingTop: insets.top + TOP_BAR_HEIGHT }]}>
        <MainTabs />
      </View>
      <CriticalAlertModal
        visible={showCriticalAlert}
        alert={criticalAlert}
        onClose={() => setShowCriticalAlert(false)}
      />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AlertBridgeProvider>
        <NavigationContainer theme={navTheme}>
          <AppShell />
        </NavigationContainer>
      </AlertBridgeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
