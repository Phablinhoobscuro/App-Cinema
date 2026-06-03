import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import apiFilmes from "@/src/api/apiFilmes";

export default function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      // Exemplo da chamada para API

      await apiFilmes.post("/user", {
        nome,
        email,
        senha,
      });


      Alert.alert(
        "Sucesso",
        "Usuário cadastrado com sucesso!"
      );

      router.replace("/");
    } catch (error: any) {
      Alert.alert(
        "Erro",
        error?.response?.data?.message ||
          "Erro ao cadastrar usuário."
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Criar Conta</Text>

          <Text style={styles.subtitle}>
            Cadastre-se para acessar filmes e séries
          </Text>

          <View style={styles.form}>
            <TextInput
              placeholder="Nome completo"
              placeholderTextColor="#8FA3B8"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />

            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#8FA3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8FA3B8"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.registerButton}
              onPress={cadastrar}
            >
              <Text style={styles.registerText}>
                Criar Conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.back()}
            >
              <Text style={styles.loginLink}>
                Já possui uma conta? Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#030d16",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  content: {
    gap: 25,
  },

  title: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#B5C7D8",
    fontSize: 15,
    textAlign: "center",
  },

  form: {
    gap: 15,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    color: "#FFF",
    paddingHorizontal: 18,
    height: 55,
    fontSize: 16,
  },

  registerButton: {
    backgroundColor: "#1E88E5",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  registerText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  loginLink: {
    textAlign: "center",
    color: "#5DADE2",
    marginTop: 10,
    fontSize: 15,
  },
});