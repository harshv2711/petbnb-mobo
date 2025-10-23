import {
  BricolageGrotesque_400Regular,
  BricolageGrotesque_500Medium,
  BricolageGrotesque_700Bold,
  useFonts,
} from "@expo-google-fonts/bricolage-grotesque";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "./global.css";

// Prevent splash from auto-hiding until fonts are ready
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_400Regular,
    BricolageGrotesque_500Medium,
    BricolageGrotesque_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Wait for fonts

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="sitterProfile" />
      <Stack.Screen name="checkout" />
      <Stack.Screen name="checkoutComplete" />
      <Stack.Screen name="bookingSuccessfull" />
      <Stack.Screen name="trackStatus" />
      <Stack.Screen name="bookingDetails" />
    </Stack>
  );
}
