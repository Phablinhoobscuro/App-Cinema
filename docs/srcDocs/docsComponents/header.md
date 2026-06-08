# Componente Header

## Descrição

O componente `Header` é responsável por exibir o cabeçalho principal da aplicação.

Ele apresenta a logo do aplicativo e um botão de acesso ao perfil do usuário.

---

## Arquivo

```text
src/components/header.tsx
```

---

## Objetivos

* Exibir a identidade visual do aplicativo.
* Fornecer acesso rápido ao perfil do usuário.
* Padronizar o cabeçalho das telas.
* Facilitar a navegação para a área do usuário.

---

## Props

Este componente não recebe propriedades.

```tsx
<Header />
```

---

## Dependências

### Expo Router

```tsx
import { router } from "expo-router";
```

Responsável por:

* Navegação entre telas.
* Abertura da tela de perfil.

---

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Responsável por:

* Exibir o ícone do usuário.

---

### React Native

```tsx
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
```

Responsável por:

* Estrutura visual do componente.
* Exibição da logo.
* Captura de eventos de toque.

---

## Estados Utilizados

Este componente não utiliza estados internos.

---

## Funções

### Navegação para Perfil

```tsx
onPress={() => {
  router.push("/(user)/user");
}}
```

Responsável por:

* Abrir a tela de perfil.
* Adicionar a rota ao histórico de navegação.

---

## Estrutura Visual

### Container Principal

```tsx
<View style={styles.header}>
```

Responsável por organizar os elementos do cabeçalho.

---

### Logo

```tsx
<Image
  source={require("../../assets/images/icone-filme.png")}
/>
```

Responsável por exibir a identidade visual da aplicação.

---

### Botão de Perfil

```tsx
<TouchableOpacity>
```

Responsável por detectar o toque do usuário.

---

### Ícone de Usuário

```tsx
<Ionicons
  name="person-circle-outline"
  size={28}
  color="#fff"
/>
```

Responsável por representar visualmente o acesso ao perfil.

---

## Fluxo do Componente

```text
Componente
     │
     ▼
Renderiza Header
     │
     ├── Exibe Logo
     │
     └── Exibe Ícone Usuário
                 │
                 ▼
          Usuário toca
                 │
                 ▼
          Tela de Perfil
```

---

## Estilos Utilizados

### Container Header

```tsx
header: {
  height: 50,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 10,
}
```

Responsável por:

* Organizar os elementos horizontalmente.
* Distribuir os itens nas extremidades.

---

### Logo

```tsx
logo: {
  width: 40,
  height: 40,
  resizeMode: "contain",
}
```

Responsável por:

* Definir o tamanho da imagem.
* Manter a proporção da logo.

---

## Cores Utilizadas

### Cor do Ícone

```text
#FFFFFF
```

---

## Rotas Utilizadas

### Perfil do Usuário

```text
/(user)/user
```

Responsável por abrir a tela de perfil do usuário.

---
## Observações

O componente `Header` é utilizado como cabeçalho padrão da aplicação. Sua principal função é exibir a identidade visual do sistema através da logo e disponibilizar acesso rápido à área do usuário, mantendo consistência visual entre as telas.
