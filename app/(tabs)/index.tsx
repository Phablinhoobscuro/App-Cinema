import Buton from "@/src/components/Buton";
import DataCarousel from "@/src/components/dataCarousel";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions,Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXH44XS6NTeQCkM-BPsql_odqZZyzBmR9BQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqevjJmu1p28SNaN4-1p7ceHPMIe66g2XxA&s",
  "https://cdn.cineart.com.br/vibezz_526203857.jpg",
];

export default function HomePage() {
  return (
    <LinearGradient
      colors={["#244b6b", "#08131d", "#030d16"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/icone-filme.png")}
            style={styles.logo}
          />

          <Ionicons name="settings" size={28} color="#fff" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categorias}
        >
          <Buton text="Filmes" color="rgba(255,255,255,0.08)" />
          <Buton text="Séries" color="rgba(255,255,255,0.08)" />
          <Buton text="Documentários" color="rgba(255,255,255,0.08)" />
          <Buton text="Esportes" color="rgba(255,255,255,0.08)" />
        </ScrollView>

        <View style={styles.carouselContainer}>
          <Text>Ola</Text>
          <Carousel
            loop
            width={width}
            height={250}
            autoPlay
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => <DataCarousel image={item} />}
          />
        </View>
      </ScrollView>
    </LinearGradient>
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

  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
    // // position: "absolute",
    // backgroundColor:"#030d16"
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  categorias: {
    paddingHorizontal: 5,
    gap: 10,
    marginBottom: 20,
  },

  carouselContainer: {
    alignItems: "center",
  },
});
