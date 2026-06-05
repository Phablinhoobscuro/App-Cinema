/**
 * Tela de cadastro de usuário
 * - Realiza validações simples de formulário.
 * - Chama API para criar usuário e navega após sucesso.
 * - Não altera lógica ou layout, apenas comentários explicativos.
 */
import apiFilmes from "@/src/services/apiFilmes";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CadastroUsuario() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /**
   * Função que envia os dados para o backend e trata resultado
   * - Valida campos obrigatórios
   * - Faz POST /user
   * - Em caso de sucesso navega para a tela de login
   */
  async function cadastrar() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      // Chamada à API para criar usuário
      await apiFilmes.post("/user", {
        nome,
        email,
        senha,
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

      // Substitui a rota atual pela tela de login
      router.replace("/");
    } catch (error: any) {
      // Mostra mensagem de erro vinda do backend ou genérica
      Alert.alert(
        "Erro",
        error?.response?.data?.message || "Erro ao cadastrar usuário.",
      );
    }
  }

  // JSX: layout com LinearGradient, formulário e botões
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
            {/* Campo nome */}
            <TextInput
              placeholder="Nome completo"
              placeholderTextColor="#8FA3B8"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />

            {/* Campo e-mail */}
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#8FA3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            {/* Campo senha */}
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8FA3B8"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              style={styles.input}
            />

            {/* Botão de cadastro */}
            <TouchableOpacity style={styles.registerButton} onPress={cadastrar}>
              <Text style={styles.registerText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* Link para voltar ao login */}
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.loginLink}>Já possui uma conta? Entrar</Text>
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
