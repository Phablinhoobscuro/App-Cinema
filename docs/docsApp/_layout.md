# Layout Principal da Aplicação

## Descrição

O Layout Principal é responsável por configurar a estrutura global de navegação da aplicação CineFlix.

Ele define:

* Contexto global de autenticação.
* Navegação entre telas.
* Configuração do Stack Navigator.
* Integração com Gesture Handler.

Todas as páginas da aplicação são carregadas dentro deste layout.

---

## Arquivo

```text
app/_layout.tsx
```

---

## Responsabilidades

* Inicializar o contexto de autenticação.
* Disponibilizar os dados do usuário para toda a aplicação.
* Gerenciar a navegação entre páginas.
* Configurar as telas registradas no Stack Navigator.
* Habilitar suporte a gestos.

---

## Dependências

### Expo Router

```tsx
import { Stack } from "expo-router";
```

Responsável pela navegação entre páginas.

---

### Contexto de Usuário

```tsx
import { AuthProvider } from "@/src/contexts/userContexts";
```

Disponibiliza os dados do usuário autenticado para toda a aplicação.

---

### Gesture Handler

```tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
```

Necessário para funcionamento correto de componentes que utilizam gestos.

---

## Estrutura Geral

```text
GestureHandlerRootView
│
└── AuthProvider
      │
      └── Stack Navigator
            │
            ├── Login
            ├── Cadastro
            ├── Home
            ├── Categorias
            ├── Conteúdo
            ├── Perfil
            └── Favoritos
```

---

## Componentes Utilizados

### GestureHandlerRootView

```tsx
<GestureHandlerRootView style={{ flex: 1 }}>
```

Funções:

* Habilita gestos globais.
* Necessário para diversos componentes do React Native.

---

### AuthProvider

```tsx
<AuthProvider>
```

Funções:

* Armazena os dados do usuário.
* Disponibiliza o contexto para toda a aplicação.
* Evita necessidade de passar propriedades manualmente entre telas.

---

### Stack Navigator

```tsx
<Stack>
```

Responsável por:

* Registrar telas.
* Navegar entre páginas.
* Gerenciar histórico de navegação.

---

## Configurações do Stack

```tsx
screenOptions={{
  headerShown: false,
}}
```

Configuração aplicada globalmente.

Resultado:

* Remove o cabeçalho padrão do React Navigation.
* Cada tela pode criar seu próprio cabeçalho personalizado.

---

## Telas Registradas

### Login

```tsx
<Stack.Screen name="index" />
```

Responsável pela autenticação do usuário.

Rota:

```text
/
```

---

### Cadastro de Usuário

```tsx
<Stack.Screen name="cadastroUser" />
```

Responsável pela criação de contas.

Rota:

```text
/cadastroUser
```

---

### Área Principal

```tsx
<Stack.Screen name="(tabs)" />
```

Contém a navegação inferior da aplicação.

Rota:

```text
/(tabs)
```

---

### Categorias

```tsx
<Stack.Screen name="peges/categorias/[categoriasId]" />
```

Exibe filmes de uma categoria específica.

Exemplo:

```text
/peges/categorias/28
```

---

### Conteúdo

```tsx
<Stack.Screen name="peges/conteudo/[conteudoId]" />
```

Exibe detalhes de um filme.

Exemplo:

```text
/peges/conteudo/12345
```

---

### Perfil do Usuário

```tsx
<Stack.Screen name="(user)/user" />
```

Exibe informações do usuário logado.

---

### Favoritos

```tsx
<Stack.Screen name="(user)/favoritos" />
```

Lista os filmes favoritos do usuário.

---

## Fluxo da Aplicação

```text
Login
  │
  ▼
Tabs (Home)
  │
  ├── Categorias
  │
  ├── Conteúdo
  │
  ├── Perfil
  │
  └── Favoritos
```

---

## Contexto Global

O AuthProvider disponibiliza:

```tsx
type User = {
  id: string;
  nome: string;
  email: string;
};
```

E também:

```tsx
usuario
setUsuario
```

Permitindo acesso ao usuário autenticado em qualquer tela.

---

## Benefícios da Estrutura

* Navegação centralizada.
* Compartilhamento global de autenticação.
* Código organizado.
* Facilidade para adicionar novas telas.
* Suporte a navegação dinâmica.
* Suporte a gestos em toda aplicação.

---

## Melhorias Futuras

* Persistência de login com AsyncStorage.
* Controle de rotas protegidas.
* Splash Screen inicial.
* Middleware de autenticação.
* Tema escuro/claro.
* Controle de permissões por usuário.
* Deep Linking.
* Notificações push.

---

## Observações

Este layout é o ponto de entrada principal da aplicação e deve permanecer simples, contendo apenas configurações globais e registro de telas.

Toda regra de negócio deve permanecer nos componentes e páginas específicas.
