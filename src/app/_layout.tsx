import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
export { ErrorBoundary } from "expo-router";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Lexend_400Regular } from "@expo-google-fonts/lexend";
import { Stack } from "expo-router";
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";

SplashScreen.preventAutoHideAsync();

const Fonts = {
  Inter_500Medium,
  Roboto_500Medium,
  Lexend_400Regular,
};

export default function RootLayout() {
  const [fontLoaded] = useFonts(Fonts);

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ToastProvider placement="top">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/home/index" />
      </Stack>
    </ToastProvider>
  );
}
