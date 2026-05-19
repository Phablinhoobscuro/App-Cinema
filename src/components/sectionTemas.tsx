import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Cartaz from "./cartaz";
import api from "../api/api";
import { Filme } from "../types/types";

export default function SectionTema({
  categoria,
  nome,
}: {
  categoria?: number;
  nome: string;
}) {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  async function buscarFilmes() {
    try {
      const response = await api.get("/discover/movie", {
        params: {
          with_genres: categoria ,
          language: "pt-BR",
        },
      });
      setFilmes(response.data.results);
      console.log(response.data.results);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    buscarFilmes();
  }, []);

  return (
    <View style={styles.tema}>
      <Text style={styles.textLabel}>{nome}</Text>

      <ScrollView
        horizontal
        pagingEnabled={false}
        contentContainerStyle={styles.cartazes}
      >
        {filmes &&
          filmes.map((filme, index) => <Cartaz key={index} filme={filme} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tema: {
    marginTop: 20,
    marginHorizontal: 10,
  },

  cartazes: {
    // paddingHorizontal: 10,
    alignItems: "center",
    gap: 5,
  },

  textLabel: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
