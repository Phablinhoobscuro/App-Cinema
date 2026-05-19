import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Filme } from "../types/types";
import post_Filme from "../api/api_post_filem";

type Props = {
  image: string;
};

export default function DataCarousel({ filme }: { filme: Filme }) {
  return (
    <View>
      <ImageBackground source={{ uri: post_Filme(filme.backdrop_path) }} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{filme.title}</Text>
          <Text style={styles.subtitle}>{filme.overview}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 10,
  // },

  image: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",
  },

  overlay: {
    padding: 15,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#fff",
    fontSize: 10,
  },

  description: {
    color: "#fff",
    fontSize: 14,
  },
});
