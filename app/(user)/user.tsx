import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import { Link, Stack } from "expo-router";

export default function PerfilPage() {
  function sairDoApp() {
    console.log("Usuário saiu");
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#fff",
          title: "User",

          headerLeft: () => (
            <Link href={"/(tabs)"} style={{ marginRight: 5 }}>
              {" "}
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={23} color="#fff" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* FOTO */}
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/300",
              }}
              style={styles.avatar}
            />

            <TouchableOpacity style={styles.editPhotoButton}>
              <Ionicons name="camera" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* NOME */}
          <Text style={styles.nomeUsuario}>Junior</Text>

          <Text style={styles.emailUsuario}>usuario@email.com</Text>

          {/* MENU */}
          <View style={styles.menuContainer}>
            {/* FAVORITOS */}
            <Link href="./favoritos" asChild>
              <TouchableOpacity style={styles.cardMenu} activeOpacity={0.8}>
                <View style={styles.iconContainer}>
                  <Ionicons name="heart" size={24} color="#ff3040" />
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.menuTitle}>Favoritos</Text>

                  <Text style={styles.menuSubtitle}>
                    Veja seus filmes favoritos
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={22} color="#888" />
              </TouchableOpacity>
            </Link>

            {/* SAIR */}
            <TouchableOpacity
              style={styles.cardMenu}
              onPress={sairDoApp}
              activeOpacity={0.8}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="log-out-outline" size={24} color="#ff3040" />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.menuTitle}>Sair</Text>

                <Text style={styles.menuSubtitle}>
                  Encerrar sessão do aplicativo
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={22} color="#888" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#030d16",
  },

  container: {
    flex: 1,
  },

  content: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.15)",
  },

  editPhotoButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#173046",
    justifyContent: "center",
    alignItems: "center",
  },

  nomeUsuario: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
  },

  emailUsuario: {
    color: "#999",
    fontSize: 15,
    marginBottom: 40,
  },

  menuContainer: {
    width: "100%",
    gap: 18,
  },

  cardMenu: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.06)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  menuTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  menuSubtitle: {
    color: "#999",
    fontSize: 13,
  },
});
