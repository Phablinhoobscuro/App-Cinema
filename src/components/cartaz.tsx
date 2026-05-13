import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
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

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginRight: 10,
  },

  image: {
    width: 140,
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