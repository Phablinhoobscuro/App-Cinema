import { AuthProvider } from "@/src/contexts/userContexts";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="cadastroUser" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="peges/categorias/[categoriasId]" />
          <Stack.Screen name="peges/conteudo/[conteudoId]" />
          <Stack.Screen name="(user)/user" />
          <Stack.Screen name="(user)/favoritos" />
        </Stack>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
