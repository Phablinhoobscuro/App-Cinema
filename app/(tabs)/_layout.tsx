import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import InconBottonNav from "@/src/components/iconBottonNav";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#030d16",
          borderTopWidth: 0,

          height: 40,

          overflow: "visible",
        },
        tabBarInactiveTintColor: "#999",
        tabBarShowLabel: false,
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "Home",

          tabBarIcon: ({ focused }) => (
            <InconBottonNav stado={focused} icon="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          // title: "Search",

          tabBarIcon: ({ focused }) => (
            <InconBottonNav stado={focused} icon="search" />
          ),
        }}
      />

      <Tabs.Screen
        name="catalogo"
        options={{
          // title: "Catalogo",

          tabBarIcon: ({ focused }) => (
            <InconBottonNav stado={focused} icon="book" />
          ),
        }}
      />
    </Tabs>
  );
}
