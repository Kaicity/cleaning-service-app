import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./app/screens/LoginScreen/Login";
import colors from "./app/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./app/navigations/Navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BusinessListByCategory from "./app/screens/BusinessListByCategory/BusinessListByCategory";
import BusinessDetail from "./app/screens/BusinessDetailScreen/BusinessDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/font/Outfit-Regular.ttf"),
    outfit_medium: require("./assets/font/Outfit-Medium.ttf"),
    outfit_semibold: require("./assets/font/Outfit-SemiBold.ttf"),
    outfit_bold: require("./assets/font/Outfit-Bold.ttf"),
  });

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="tabs" component={TabsNavigation} />
        <Stack.Screen name="business-list" component={BusinessListByCategory} />
        <Stack.Screen name="business-detail" component={BusinessDetail} />
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
