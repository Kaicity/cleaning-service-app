import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import { Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../utils/colors";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Chính</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Dịch vụ</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Tài khoản</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
