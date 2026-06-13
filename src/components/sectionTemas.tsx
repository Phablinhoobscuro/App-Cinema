import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import api from "../services/api";
import { Filme } from "../types/types";
import Cartaz from "./cartaz";

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
          with_genres: categoria,
          language: "pt-BR",
        },
      });
      setFilmes(response.data.results);
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
    color: "#eeeded",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
