import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import NivelEstrelas from "./nivelEstelas";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Filme } from "../types/types";
import post_Filme from "../api/api_post_filem";

export default function Cartaz({ filme }: { filme: Filme }) {
  return (
    <Link href={`/peges/${filme.id}`} asChild>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: post_Filme(filme.poster_path),
          }}
          style={styles.image}
        >
          <Text style={styles.title}>{filme.original_title}</Text>
          <NivelEstrelas nota={filme.vote_average} />
        </ImageBackground>
      </View>
    </Link>
  );
}
const larguraTela = Dimensions.get("window").width;
const tamanhoCard = (larguraTela - 30) / 3;

const styles = StyleSheet.create({
  container: {
    width: tamanhoCard,
    // marginRight: ,
  },

  image: {
    // width: tamanhoCard,
    height: 200,
    justifyContent: "flex-end",
    padding: 10,
  },

  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
