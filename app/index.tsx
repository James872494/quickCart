import { useEffect } from "react";
import { Redirect } from "expo-router";

export default function Index() {
  // Immediately send users to the first onboarding screen
  return <Redirect href="/OnboardScreens/welcome1" />;
}

