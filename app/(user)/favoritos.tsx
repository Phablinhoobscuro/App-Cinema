import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Link, Stack, useLocalSearchParams } from "expo-router";

import React, { useEffect, useState } from "react";

import { useHeaderHeight } from "@react-navigation/elements";

import api from "@/src/api/api";

import { Filme } from "@/src/types/types";

import Cartaz from "@/src/components/cartaz";
import { Ionicons } from "@expo/vector-icons";
import apiFilmes from "@/src/api/apiFilmes";

type Categoria = {
  id: number;
  name: string;
};

type Favoritos = {
    id: string,
    filmeId: string,
    usuarioId: string,
    dataCriacao: string,
    dataAtualizacao: string
  };

export default function CategoriaPage() {
  const { usuario, setUsuario } = useContext(AuthContext);

  const headerHeight = useHeaderHeight();

  const [filmes, setFilmes] = useState<Filme[]>([]);

  const [categoria, setCategoria] = useState<Categoria | null>(null);

  const [loading, setLoading] = useState(true);

  async function BuscarListaFavoritos() {
    try {
      const resposta = await apiFilmes.get<Favoritos[]>(`/favoritos/listFavoritosUsuario/${usuario.id}`);

      if(resposta.data.length > 0){
        resposta.data.map(()=)
        setFilmes()
      }
    } catch (error) {
      
    }
  }

  async function BuscarFilme(id:string) {
    try {
      const reposta = await api.get(`/movie/${id}`)
      return reposta.data
    } catch (error) {
      return
    }
  }
  useEffect(()=>{
     
  },[])

  // Loading
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
          title: "Favoritos",

          headerLeft: () => (
            <Link href={"./user"} style={{ marginRight: 5 }}>
              {" "}
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={23} color="#fff" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: headerHeight,
          },
        ]}
      >
        {/* Título */}
        <Text style={styles.title}>{categoria?.name}</Text>

        {/* Lista de Filmes */}
        <View style={styles.listaFilmes}>
          {filmes.map((filme) => (
            <Cartaz key={filme.id} filme={filme} />
          ))}
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

  content: {
    // paddingHorizontal: 20,
    // paddingBottom: 40,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },

  listaFilmes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
    paddingHorizontal: 8,
  },
});
