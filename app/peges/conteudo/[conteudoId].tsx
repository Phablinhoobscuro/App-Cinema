/**
 * Página de conteúdo (detalhes do filme)
 * - Busca dados do TMDB pela API interna (api)
 * - Controla estado de loading, favoritos e providers
 * - Mantém a renderização do layout original; adicionados comentários explicativos
 */
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import { Stack, useLocalSearchParams } from "expo-router";

import React, { useContext, useEffect, useState } from "react";

import { useHeaderHeight } from "@react-navigation/elements";

import api from "@/src/services/api";

import { Filme } from "@/src/types/types";

import post_Filme from "@/src/services/api_post_filem";

import NivelEstrelas from "@/src/components/nivelEstelas";

import YoutubePlayer from "react-native-youtube-iframe";

import { AuthContext } from "@/src/contexts/userContexts";
import apiFilmes from "@/src/services/apiFilmes";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type Favorito = {
  id: string;
  filmeId: string;
  usuarioId: string;
  dataCriacao: string;
  dataAtualizacao: string;
};

export default function PageComteudo() {
  // Contexto de autenticação para obter usuário atual
  const { usuario, setUsuario } = useContext(AuthContext);

  // Obtém parâmetro dinâmico da rota (conteudoId)
  const { conteudoId } = useLocalSearchParams();

  // Altura do header usada para ajustar o banner
  const headerHeight = useHeaderHeight();

  // Estados locais: filme, loading, trailer, favorito e providers
  const [filme, setFilme] = useState<Filme | null>(null);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState("");
  const [favorito, setFavorito] = useState(false);
  const [providers, setProviders] = useState<any[]>([]);

  /**
   * Verifica se o filme já é favorito do usuário
   * - Chama endpoint /favoritos/:usuarioId/:conteudoId
   * - Ajusta estado `favorito` caso exista registro
   */
  async function stadoFavorito() {
    try {
      const resposta = await apiFilmes.get<Favorito>(
        `/favoritos/${usuario?.id}/${conteudoId}`,
      );
      if (resposta.data.id) {
        setFavorito(true);
      }
    } catch (e) {
      // Falha silenciosa: não bloqueia a renderização
      return;
    }
  }

  /**
   * Adiciona/remova favorito via API
   * - Faz POST para criar favorito e atualiza estado local
   */
  async function addFavoritos() {
    try {
      const resposta = await apiFilmes.post("/favoritos", {
        usuarioId: usuario?.id,
        filmeId: conteudoId,
      });

      if (resposta.data.id) {
        setFavorito(!favorito);
      }
    } catch (e: any) {
      Alert.alert("Erro", e.response?.data?.message || e.message);
    }
  }

  // Efeito principal que busca detalhes do filme, vídeos e providers
  useEffect(() => {
    async function buscarFilme() {
      try {
        // Busca detalhes do filme (idioma pt-BR)
        const response = await api.get(`/movie/${conteudoId}`, {
          params: {
            language: "pt-BR",
          },
        });

        setFilme(response.data);

        // Busca vídeos/trailers associados ao filme
        const videosResponse = await api.get(`/movie/${conteudoId}/videos`);

        // Localiza trailer oficial no YouTube
        const trailer = videosResponse.data.results.find(
          (video: any) => video.site === "YouTube" && video.type === "Trailer",
        );

        // Busca provedores de streaming por país
        const providersResponse = await api.get(
          `/movie/${conteudoId}/watch/providers`,
        );

        const brasilProviders =
          providersResponse.data.results?.BR?.flatrate || [];

        setProviders(brasilProviders);

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (erro) {
        console.log(erro);
      } finally {
        // Sempre remove o estado de loading ao final
        setLoading(false);
      }
    }

    // Executa buscas e verifica estado de favorito
    buscarFilme();
    stadoFavorito();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conteudoId]);

  // Enquanto carrega, mostra indicador de progresso
  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  // JSX: detalhamento do filme com banner, providers, sinopse e trailer
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

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Banner com imagem de fundo e informações principais */}
        <ImageBackground
          source={{
            uri: filme?.backdrop_path
              ? post_Filme(filme.backdrop_path)
              : undefined,
          }}
          resizeMode="cover"
          style={[styles.banner, { paddingTop: headerHeight }]}
        >
          {/* Botão de favorito no topo do banner */}
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => addFavoritos()}
          >
            <Ionicons
              name={favorito ? "heart" : "heart-outline"}
              size={30}
              color={favorito ? "#45617eff" : "#fff"}
            />
          </TouchableOpacity>

          <LinearGradient
            colors={["transparent", "rgba(3,13,22,0.8)", "#030d16"]}
            style={styles.overlay}
          >
            <Text style={styles.title}>{filme?.title}</Text>

            <NivelEstrelas nota={filme?.vote_average || 0} />

            <View style={styles.infoContainer}>
              <Text style={styles.data}>📅 {filme?.release_date}</Text>

              <Text style={styles.data}>
                ⭐ {filme?.vote_average?.toFixed(1)}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* Lista de provedores onde o conteúdo está disponível */}
        {providers.length > 0 && (
          <View style={styles.providersContainer}>
            <Text style={styles.sectionTitle}>Disponível em</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {providers.map((provider) => (
                <View key={provider.provider_id} style={styles.providerItem}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w92${provider.logo_path}`,
                    }}
                    style={styles.providerLogo}
                  />

                  <Text style={styles.providerName} numberOfLines={2}>
                    {provider.provider_name}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Conteúdo: sinopse, trailer e informações adicionais */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Sinopse</Text>

          <Text style={styles.overview}>{filme?.overview}</Text>

          <Text style={styles.sectionTitle}>Trailer</Text>

          {trailerKey ? (
            <YoutubePlayer height={220} play={false} videoId={trailerKey} />
          ) : (
            <Text style={styles.noTrailer}>Trailer não disponível</Text>
          )}

          <Text style={styles.sectionTitle}>Informações</Text>

          <View style={styles.cardInfo}>
            <Text style={styles.infoText}>
              Idioma Original: {filme?.original_language}
            </Text>

            <Text style={styles.infoText}>
              Popularidade: {filme?.popularity}
            </Text>

            <Text style={styles.infoText}>Votos: {filme?.vote_count}</Text>
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

  providersContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  providerItem: {
    alignItems: "center",
    marginRight: 15,
    width: 75,
  },

  providerLogo: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },

  providerName: {
    color: "#fff",
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
  },
});
