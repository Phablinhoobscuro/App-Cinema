import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Stack,
  useLocalSearchParams,
} from "expo-router";

import React, {
  useEffect,
  useState,
} from "react";

import { useHeaderHeight } from "@react-navigation/elements";

import api from "@/src/api/api";

import { Filme } from "@/src/types/types";

import Cartaz from "@/src/components/cartaz";

type Categoria = {
  id: number;
  name: string;
};

export default function CategoriaPage() {

  const { categoriaId } =
    useLocalSearchParams();

  const headerHeight =
    useHeaderHeight();

  const [filmes, setFilmes] =
    useState<Filme[]>([]);

  const [categoria, setCategoria] =
    useState<Categoria | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function carregarDados() {

      try {

        // Buscar categorias
        const respostaCategorias =
          await api.get(
            "/genre/movie/list",
            {
              params: {
                language: "pt-BR",
              },
            }
          );

        // Encontrar categoria atual
        const categoriaEncontrada =
          respostaCategorias.data.genres.find(
            (item: Categoria) =>
              item.id === Number(categoriaId)
          );

        setCategoria(
          categoriaEncontrada
        );

        // Buscar filmes da categoria
        const respostaFilmes =
          await api.get(
            "/discover/movie",
            {
              params: {
                with_genres: categoriaId,
                language: "pt-BR",
              },
            }
          );

        setFilmes(
          respostaFilmes.data.results
        );

      } catch (error: any) {

        Alert.alert(
          "Erro",
          error?.message ||
            "Erro ao carregar dados."
        );

      } finally {

        setLoading(false);

      }
    }

    carregarDados();

  }, [categoriaId]);

  // Loading
  if (loading) {
    return (
      <SafeAreaView
        style={
          styles.loadingContainer
        }
      >
        <ActivityIndicator
          size="large"
          color="#fff"
        />
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView style={styles.safe}>

      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#fff",
          title:
            categoria?.name ||
            "Categoria",
        }}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={[
          styles.content,
          {
            paddingTop:
              headerHeight,
          },
        ]}
      >

        {/* Título */}
        <Text style={styles.title}>
          {categoria?.name}
        </Text>

        {/* Lista de Filmes */}
        <View
          style={styles.listaFilmes}
        >

          {filmes.map((filme) => (
            <Cartaz
              key={filme.id}
              filme={filme}
            />
          ))}

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: "#030d16",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#030d16",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  content: {
    // paddingHorizontal: 20,
    // paddingBottom: 40,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },

  listaFilmes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
    paddingHorizontal:8
  },

});