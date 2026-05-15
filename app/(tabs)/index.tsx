import AnimarCard from "@/src/components/animarCard";
import Buton from "@/src/components/Buton";
import DataCarousel from "@/src/components/dataCarousel";
import Header from "@/src/components/header";
import SectionTema from "@/src/components/sectionTemas";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXH44XS6NTeQCkM-BPsql_odqZZyzBmR9BQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqevjJmu1p28SNaN4-1p7ceHPMIe66g2XxA&s",
  "https://cdn.cineart.com.br/vibezz_526203857.jpg",
];

export default function HomePage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030d16" }}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categorias}
          >
            <Buton text="Filmes" color="rgba(255,255,255,0.08)" />
            <Buton text="Séries" color="rgba(255,255,255,0.08)" />
            <Buton text="Documentários" color="rgba(255,255,255,0.08)" />
            <Buton text="Esportes" color="rgba(255,255,255,0.08)" />
            <Buton text="Esportes" color="rgba(255,255,255,0.08)" />
          </ScrollView>

          <View style={styles.carouselContainer}>
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
          <SectionTema categoria="Drama" />
          <SectionTema categoria="Series" />
          <AnimarCard />
          <SectionTema categoria="Terror" />
          <SectionTema categoria="Ação" />
          <SectionTema categoria="Aventura" />
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

  categorias: {
    paddingHorizontal: 5,
    gap: 5,
    marginBottom: 10,
  },

  carouselContainer: {
    alignItems: "center",
  },
});
