import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./app/screens/LoginScreen/Login";
import colors from "./app/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./app/navigations/Navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={TabsNavigation} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingTop: 20,
  },
});
