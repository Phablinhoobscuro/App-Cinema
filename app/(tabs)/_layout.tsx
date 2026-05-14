import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#030d16",
          borderTopWidth: 0,

          height: 40,

          // overflow: "visible",
        },

        tabBarActiveTintColor: "#ff0000",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,

                backgroundColor: focused
                  ? "#1b2631"
                  : "rgba:(0,0,0,0)",

                justifyContent: "center",
                alignItems: "center",

                transform: [
                  {
                    translateY: -20,
                  },
                ],
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color="#fff"
              />
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="catalogo"
        options={{
          title: "Catalogo",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="book"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}