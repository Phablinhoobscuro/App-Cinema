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
import { router, Stack } from "expo-router";
import apiFilmes from "@/src/api/apiFilmes";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
    //   router.push("/(tabs)");
      return;
    }

    const reposta = await apiFilmes.post("/user/login", {
      email,
      senha,
    });



    console.log(reposta.data);
    if(reposta.data.id) {
      Alert.alert("Login realizado com sucesso!");
      router.push("/(tabs)");
    } else {
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    }
  }

  function recuperarSenha() {
    Alert.alert("Recuperação de Senha");
  }

  function cadastrar() {
    Alert.alert("Cadastro");
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
          <Text style={styles.title}>CineFlix</Text>
          <Text style={styles.subtitle}>
            Entre para acessar seus filmes favoritos
          </Text>

          <View style={styles.form}>
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
              style={styles.loginButton}
              onPress={fazerLogin}
            >
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={recuperarSenha}>
              <Text style={styles.linkText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={cadastrar}
            >
              <Text style={styles.registerText}>Criar Conta</Text>
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
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#B5C7D8",
    fontSize: 16,
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

  loginButton: {
    backgroundColor: "#1E88E5",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  linkText: {
    color: "#5DADE2",
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },

  registerButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1E88E5",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  registerText: {
    color: "#1E88E5",
    fontSize: 16,
    fontWeight: "600",
  },
});