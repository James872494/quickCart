import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome1 from "./app/OnboardScreens/welcome1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome1" // 👈 Sets the first screen
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome1" component={Welcome1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
