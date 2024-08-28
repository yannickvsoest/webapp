import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#5918e9",
        tabBarActiveTintColor: "#5918e9",
        tabBarStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "aanvragen",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Mijn account",
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Mijn vingetten",
          tabBarIcon: ({ color }) => (
            <Icon name="all-inbox" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
