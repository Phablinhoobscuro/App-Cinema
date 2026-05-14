import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import NivelEstrelas from "./nivelEstelas";

export default function Cartaz() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/6496/filme_6496.jpg",
        }}
        style={styles.image}
      >
        <Text style={styles.title}>Titulo</Text>
        <NivelEstrelas nota={3}/>
      </ImageBackground>
    </View>
  );
}
const larguraTela = Dimensions.get("window").width;
const tamanhoCard = (larguraTela-30) / 3;

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