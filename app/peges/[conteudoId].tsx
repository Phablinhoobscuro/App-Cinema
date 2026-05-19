import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import NivelEstrelas from "@/src/components/nivelEstelas";
import post_Filme from "@/src/api/api_post_filem";
import api from "@/src/api/api";
import { useEffect, useState } from "react";
import { Filme } from "@/src/types/types";

export default function PageComteudo() {
  const { conteudoId } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  const [filme, setFilme] = useState<Filme|null>(null);

  useEffect(() => {
    async function buscarFilme() {
      try {
        const response = await api.get(`/movie/${conteudoId}`);

        setFilme(response.data.results);
      } catch (erro) {
        console.log(erro);
      }
    }

    buscarFilme();
  }, []);

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
        <ImageBackground
          source={{
            uri: post_Filme(filme?.poster_path),
          }}
          style={styles.img}
        >
          {" "}
          <Text style={styles.text}>Os Vingadores</Text>
          <NivelEstrelas nota={2} />
        </ImageBackground>
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

  img: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "#ffff",
  },
});
