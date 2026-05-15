import Buton from "@/src/components/Buton";
import Header from "@/src/components/header";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function catalogo() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#030d16" }]}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Header/>
        <Text style={styles.categoria}>Categorias</Text>
        <ScrollView>
          <Buton text="Filmes" color="rgba(255,255,255,0.08)"/>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  content: {
    paddingTop: 10,
    paddingBottom: 30,
  },

  categoria:{
    fontSize:15,
    fontWeight:"bold",
    color:"#ffff",
    marginBottom:5
  }
});
