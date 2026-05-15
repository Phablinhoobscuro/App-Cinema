import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

export default function PageComteudo() {
  const { conteudoId } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030d16" }}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, { paddingTop: headerHeight }]}
      >
        <Stack.Screen
          options={{
            title: `Conteúdo ${conteudoId}`,
            headerShown: true,
            headerTransparent: true,

            headerStyle: {
              backgroundColor: "transparent",
            },

            headerTintColor: "#fff",
          }}
        />
        <Text>Conteudo {conteudoId}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingTop: 10,
    paddingBottom: 30,
  },

  categorias: {
    paddingHorizontal: 5,
    gap: 5,
    marginBottom: 10,
  },

  carouselContainer: {
    alignItems: "center",
  },
});
