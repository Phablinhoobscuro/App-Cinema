import Cartaz from "@/src/components/cartaz";
import Header from "@/src/components/header";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Header />
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="#fff" />

          <TextInput
            placeholder="Pesquisar..."
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
        <ScrollView contentContainerStyle={styles.resultadoPesquisa}>
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
          <Cartaz />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#1b2631",

    margin: 10,

    borderRadius: 15,

    paddingHorizontal: 15,

    height: 55,
  },

  input: {
    flex: 1,

    color: "#fff",

    marginLeft: 10,

    fontSize: 16,
  },

  resultadoPesquisa: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    padding: 10,
  },
});
