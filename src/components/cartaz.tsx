import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import NivelEstrelas from "./nivelEstelas";
import { Link } from "expo-router";
import { Filme } from "../types/types";
import post_Filme from "../api/api_post_filem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cartaz({ filme }: { filme: Filme }) {
  if (!filme) {
    return (
      <SafeAreaView style={styles.loadingContainer} >
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView >)
  }
  return (
    <Link href={`/peges/conteudo/${filme.id}`} asChild>
      <TouchableOpacity>
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
      </TouchableOpacity>
    </Link>
  )
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "#030d16",
    justifyContent: "center",
    alignItems: "center",
  },
});
