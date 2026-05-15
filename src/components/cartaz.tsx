import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import NivelEstrelas from "./nivelEstelas";
import { Link } from "expo-router";

export default function Cartaz() {
  return (
      <Link href="/peges/10" asChild>
      <View  style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/6496/filme_6496.jpg",
          }}
          style={styles.image}
        >
          <Text style={styles.title}>Titulo</Text>
          <NivelEstrelas nota={3} />
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
