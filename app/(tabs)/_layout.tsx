import { router, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import InconBottonNav from "@/src/components/iconBottonNav";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/src/contexts/userContexts";

export default function TabLayout() {
  const { usuario } = useContext(AuthContext);
  useEffect(() => {
    if (!usuario) {
      router.replace("/");
    }
  }, [usuario]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#030d16",
          borderTopWidth: 0,

          height: 45,
          paddingTop: 8,
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
