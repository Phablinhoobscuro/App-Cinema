import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

type Props = {
  image: string;
};

export default function DataCarousel({ image }: Props) {
  return (
    <View >
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>TÍTULO DO FILME</Text>
          <Text style={styles.subtitle}>Subtítulo</Text>
          <Text style={styles.description}>
            Descrição do filme
          </Text>
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
    fontSize: 16,
  },

  description: {
    color: "#fff",
    fontSize: 14,
  },
});