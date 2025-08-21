import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "../hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="OnboardScreens/welcome1">
        <Stack.Screen
          name="OnboardScreens/welcome1"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardScreens/welcome2"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OnboardScreens/welcome3"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth/LogIn"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="auth/SignUp"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="auth/SignupDetails"
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="auth/Email"
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="auth/EmailPassword"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="auth/Success"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreens/Welcome"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
