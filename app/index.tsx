/**
 * Tela de Login
 * - Responsável por autenticar o usuário e navegar para a área principal (tabs).
 * - Não altera lógica nem layout, apenas comentários explicativos.
 */

import { AuthContext, User } from "@/src/contexts/userContexts"; // contexto de autenticação
import apiFilmes from "@/src/services/apiFilmes"; // serviço API para filmes/usuário
import { LinearGradient } from "expo-linear-gradient"; // background gradiente
import { router } from "expo-router"; // navegação
import React, { useContext, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componente principal da tela de login
export default function LoginScreen() {
  // Estados locais do formulário
  const [email, setEmail] = useState(""); // e-mail do usuário
  const [senha, setSenha] = useState(""); // senha do usuário

  // Contexto de autenticação (fornece usuário e setter)
  const { usuario, setUsuario } = useContext(AuthContext);

  // Função que realiza a chamada de login ao back-end
  async function fazerLogin() {
    // Validação simples: campos obrigatórios
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      //   router.push("/(tabs)");
      return;
    }

    // Chamada ao endpoint /user/login retornando um User
    const reposta = await apiFilmes.post<User>("/user/login", {
      email,
      senha,
    });

    // Se o backend retornar um id, considera login válido
    if (reposta.data.id) {
      Alert.alert("Login realizado com sucesso!");
      // Atualiza contexto global com dados do usuário autenticado
      setUsuario({
        id: reposta.data.id,
        nome: reposta.data.nome,
        email: reposta.data.email,
      });

      // Navega para tela principal (tabs)
      router.push("/(tabs)");
    } else {
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    }
  }

  // Handlers auxiliares (recuperação de senha / cadastro)
  function recuperarSenha() {
    Alert.alert("Recuperação de Senha");
  }

  function cadastrar() {
    Alert.alert("Cadastro");
    router.push("/cadastroUser");
  }

  // JSX da tela: SafeAreaView -> LinearGradient -> Conteúdo do formulário
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#173046", "#08131d", "#030d16"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Logo / topo */}
        <View style={styles.laiout}>
          <Image
            source={require("../assets/images/icone-filme.png")}
            style={styles.logo}
          />
        </View>

        {/* Conteúdo principal com subtítulo e formulário */}
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Entre para acessar seus filmes favoritos
          </Text>

          <View style={styles.form}>
            {/* Campo de e-mail */}
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#8FA3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            {/* Campo de senha */}
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8FA3B8"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              style={styles.input}
            />

            {/* Botão de login */}
            <TouchableOpacity style={styles.loginButton} onPress={fazerLogin}>
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            {/* Links auxiliares */}
            <TouchableOpacity onPress={recuperarSenha}>
              <Text style={styles.linkText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            {/* Botão para navegar ao cadastro */}
            <TouchableOpacity style={styles.registerButton} onPress={cadastrar}>
              <Text style={styles.registerText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

/**
 * Estilos da tela
 * - Mantidos sem alteração lógica ou visual, apenas comentários para organização.
 */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#030d16",
  },
  laiout: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "contain",
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
