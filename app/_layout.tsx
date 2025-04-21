import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  ThemeProvider,
  DarkTheme,
} from "@react-navigation/native";
import {ReanimatedScreenProvider} from 'react-native-screens/reanimated';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  useEffect(() => {
      SplashScreen.hideAsync();
  }, );

  return (
    <ReanimatedScreenProvider>
      <ThemeProvider value={DarkTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="note" options={{
            presentation: "modal"
          }}/>
          <Stack.Screen name="noteActions" options={{
            presentation: "modal"
          }}/>
        </Stack>
      </ThemeProvider>
    </ReanimatedScreenProvider>
  );
}