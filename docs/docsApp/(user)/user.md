# Tela de Perfil do Usuário

## Descrição

A tela de Perfil do Usuário é responsável por exibir as informações do usuário autenticado e disponibilizar funcionalidades relacionadas à conta.

Através desta tela o usuário pode:

* Visualizar seus dados.
* Acessar sua lista de favoritos.
* Encerrar sua sessão.
* Visualizar sua foto de perfil.

---

## Arquivo

```text
app/(user)/user.tsx
```

---

## Objetivos

* Exibir informações do usuário logado.
* Exibir foto de perfil.
* Permitir acesso aos favoritos.
* Permitir logout do sistema.
* Bloquear acesso caso não exista usuário autenticado.

---

## Dependências

### Expo Router

```tsx
import { router, Stack } from "expo-router";
```

Responsável por:

* Navegação entre telas.
* Configuração do cabeçalho.

---

### Context API

```tsx
import { AuthContext } from "@/src/contexts/userContexts";
```

Responsável por:

* Disponibilizar os dados do usuário autenticado.
* Controlar sessão do aplicativo.

---

### Expo Linear Gradient

```tsx
import { LinearGradient } from "expo-linear-gradient";
```

Responsável pelo fundo gradiente da tela.

---

### React Native Safe Area

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
```

Responsável por respeitar áreas seguras do dispositivo.

---

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Utilizado para exibir ícones da interface.

---

## Contexto Utilizado

A tela utiliza o contexto global de autenticação:

```tsx
const { usuario, setUsuario } = useContext(AuthContext);
```

Dados disponíveis:

```ts
type User = {
  id: string;
  nome: string;
  email: string;
};
```

---

## Controle de Autenticação

Ao carregar a tela é realizada uma verificação:

```tsx
useEffect(() => {
  if (!usuario) {
    router.replace("/");
  }
}, [usuario]);
```

Objetivo:

* Impedir acesso à página sem autenticação.
* Redirecionar para login automaticamente.

---

## Navegação

### Voltar

Função:

```tsx
function voutar() {
  router.push("/(tabs)");
}
```

Responsável por retornar para a área principal da aplicação.

---

### Favoritos

Função:

```tsx
router.push("/favoritos");
```

Abre a tela contendo os filmes favoritos do usuário.

---

## Logout

Função atual:

```tsx
function sairDoApp() {
  console.log("Usuário saiu");
}
```

Atualmente apenas registra uma mensagem no console.

### Implementação Recomendada

```tsx
function sairDoApp() {
  setUsuario(null);
  router.replace("/");
}
```

Resultado:

* Remove usuário do contexto.
* Retorna para tela de login.

---

## Estrutura Visual

### Foto de Perfil

Componente:

```tsx
<Image
  source={{
    uri: "https://i.pravatar.cc/300",
  }}
/>
```

Responsável por exibir o avatar do usuário.

---

### Botão de Alteração de Foto

Ícone:

```tsx
<Ionicons
  name="camera"
  size={18}
  color="#fff"
/>
```

Objetivo futuro:

* Alterar foto do perfil.

---

### Nome do Usuário

Exibição:

```tsx
<Text>
  {usuario?.nome}
</Text>
```

---

### E-mail do Usuário

Exibição:

```tsx
<Text>
  {usuario?.email}
</Text>
```

---

## Menu de Opções

### Favoritos

Exibe:

```text
Favoritos
Veja seus filmes favoritos
```

Função:

```tsx
router.push("/favoritos");
```

---

### Sair

Exibe:

```text
Sair
Encerrar sessão do aplicativo
```

Função:

```tsx
sairDoApp();
```

---

## Cabeçalho

Configuração:

```tsx
<Stack.Screen />
```

Características:

* Transparente.
* Texto branco.
* Botão de voltar personalizado.

---

## Fluxo da Tela

```text
Usuário Logado
      │
      ▼
Tela Perfil
      │
      ├── Exibe Avatar
      │
      ├── Exibe Nome
      │
      ├── Exibe Email
      │
      ├── Favoritos
      │       │
      │       ▼
      │   Tela Favoritos
      │
      └── Logout
              │
              ▼
          Tela Login
```

---

## Estilos Utilizados

### Cor Principal

```text
#030d16
```

---

### Gradiente

```text
#173046
#08131d
#030d16
```

---

### Cor dos Cards

```text
rgba(255,255,255,0.05)
```

---

### Cor dos Textos

Título:

```text
#FFFFFF
```

Descrição:

```text
#999999
```

---
