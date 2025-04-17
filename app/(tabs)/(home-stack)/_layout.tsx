import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  ThemeProvider,
  DarkTheme,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  useEffect(() => {
      SplashScreen.hideAsync();
  }, );

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="note-detail" options={{
          headerShown: true,
        }} />
      </Stack>
    </ThemeProvider>
  );
}