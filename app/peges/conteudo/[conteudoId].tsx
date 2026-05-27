import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import { Stack, useLocalSearchParams } from "expo-router";

import React, { useEffect, useState } from "react";

import { useHeaderHeight } from "@react-navigation/elements";

import api from "@/src/api/api";

import { Filme } from "@/src/types/types";

import post_Filme from "@/src/api/api_post_filem";

import NivelEstrelas from "@/src/components/nivelEstelas";

import YoutubePlayer from "react-native-youtube-iframe";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function PageComteudo() {

  const { conteudoId } = useLocalSearchParams();

  const headerHeight = useHeaderHeight();

  const [filme, setFilme] = useState<Filme | null>(null);

  const [loading, setLoading] = useState(true);

  const [trailerKey, setTrailerKey] = useState("");

  const [favorito, setFavorito] = useState(false);

  useEffect(() => {

    async function buscarFilme() {

      try {

        // Buscar detalhes do filme
        const response = await api.get(`/movie/${conteudoId}`, {
          params: {
            language: "pt-BR",
          },
        });

        setFilme(response.data);

        // Buscar vídeos/trailers
        const videosResponse = await api.get(
          `/movie/${conteudoId}/videos`
        );

        // Procurar trailer oficial do YouTube
        const trailer = videosResponse.data.results.find(
          (video: any) =>
            video.site === "YouTube" &&
            video.type === "Trailer"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }

      } catch (erro) {

        console.log(erro);

      } finally {

        setLoading(false);

      }
    }

    buscarFilme();

  }, [conteudoId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView style={styles.safe}>

      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#fff",
          title: filme?.title || "Detalhes",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >

        <ImageBackground
          source={{
            uri: filme?.backdrop_path
              ? post_Filme(filme.backdrop_path)
              : undefined,
          }}
          resizeMode="cover"
          style={[
            styles.banner,
            { paddingTop: headerHeight },
          ]}
        >

          {/* BOTÃO FAVORITO */}
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setFavorito(!favorito)}
          >
            <Ionicons
              name={favorito ? "heart" : "heart-outline"}
              size={30}
              color={favorito ? "#45617eff" : "#fff"}
            />
          </TouchableOpacity>

          <LinearGradient
            colors={[
              "transparent",
              "rgba(3,13,22,0.8)",
              "#030d16",
            ]}
            style={styles.overlay}
          >

            <Text style={styles.title}>
              {filme?.title}
            </Text>

            <NivelEstrelas
              nota={filme?.vote_average || 0}
            />

            <View style={styles.infoContainer}>

              <Text style={styles.data}>
                📅 {filme?.release_date}
              </Text>

              <Text style={styles.data}>
                ⭐ {filme?.vote_average?.toFixed(1)}
              </Text>

            </View>

          </LinearGradient>

        </ImageBackground>

        <View style={styles.content}>

          <Text style={styles.sectionTitle}>
            Sinopse
          </Text>

          <Text style={styles.overview}>
            {filme?.overview}
          </Text>

          <Text style={styles.sectionTitle}>
            Trailer
          </Text>

          {trailerKey ? (
            <YoutubePlayer
              height={220}
              play={false}
              videoId={trailerKey}
            />
          ) : (
            <Text style={styles.noTrailer}>
              Trailer não disponível
            </Text>
          )}

          <Text style={styles.sectionTitle}>
            Informações
          </Text>

          <View style={styles.cardInfo}>

            <Text style={styles.infoText}>
              Idioma Original: {filme?.original_language}
            </Text>

            <Text style={styles.infoText}>
              Popularidade: {filme?.popularity}
            </Text>

            <Text style={styles.infoText}>
              Votos: {filme?.vote_count}
            </Text>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: "#030d16",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#030d16",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  banner: {
    height: 500,
    justifyContent: "flex-end",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  infoContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },

  data: {
    color: "#ccc",
    fontSize: 14,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 25,
  },

  overview: {
    color: "#ccc",
    lineHeight: 24,
    fontSize: 16,
  },

  cardInfo: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    gap: 10,
  },

  infoText: {
    color: "#fff",
    fontSize: 15,
  },

  noTrailer: {
    color: "#999",
    marginTop: 10,
  },

  /* FAVORITO */
  favoriteButton: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.45)",
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },

});