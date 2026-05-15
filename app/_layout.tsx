import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="peges/[conteudoId]"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
            headerTransparent: true,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
