import { Ionicons } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/icone-filme.png")}
        style={styles.logo}
      />
      <Ionicons name="settings" size={28} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 0,
    paddingBottom: 0,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
