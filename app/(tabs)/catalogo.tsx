import Buton from "@/src/components/Buton";
import Header from "@/src/components/header";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { Categorias } from "@/src/types/types";
import api from "@/src/api/api";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

export default function Catalogo() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  async function categoriasFilmes() {
    try {
      const resposta = await api.get("/genre/movie/list", {
        params: {
          language: "pt-BR",
        },
      });

      setCategorias(resposta.data.genres);
    } catch (error: any) {
      Alert.alert(
        "Erro",
        `Ocorreu um erro na Buscas dos dados.${error.message}`,
      );
    }
  }
  useEffect(() => {
    categoriasFilmes();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#030d16" }]}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Header />
        <Text style={styles.categoria}>Categorias</Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {categorias?.map((categoria, index) => (
            <Link key={index} href={`/peges/categorias/${categoria.id}`} asChild>
              <TouchableOpacity key={index}>
                <Buton text={categoria.name} color="rgba(255,255,255,0.08)" />
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
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

  categoria: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffff",
    marginBottom: 5,
  },
});
