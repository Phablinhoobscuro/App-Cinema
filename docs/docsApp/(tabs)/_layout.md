# Navegação Principal (Tabs)

## Descrição

A tela de navegação principal (Tabs) é responsável por controlar as páginas principais da aplicação através de uma barra de navegação inferior.

Através desta estrutura o usuário pode:

* Acessar a página inicial.
* Realizar pesquisas de filmes.
* Navegar pelas categorias.
* Manter a sessão autenticada.
* Alternar rapidamente entre as principais funcionalidades do aplicativo.

---

## Arquivo

```text
app/(tabs)/_layout.tsx
```

---

## Objetivos

* Centralizar a navegação principal.
* Organizar as telas em abas.
* Garantir acesso apenas para usuários autenticados.
* Exibir ícones personalizados na barra inferior.

---

## Dependências

### Expo Router

```tsx
import { router, Tabs } from "expo-router";
```

Responsável por:

* Gerenciar navegação por abas.
* Redirecionar usuários.
* Controlar as rotas principais.

---

### Context API

```tsx
import { AuthContext } from "@/src/contexts/userContexts";
```

Responsável por:

* Disponibilizar os dados do usuário autenticado.
* Controlar acesso às páginas.

---

### React Hooks

```tsx
import { useContext, useEffect } from "react";
```

Responsável por:

* Consumir o contexto.
* Monitorar alterações no usuário logado.

---

### Componente Personalizado

```tsx
import InconBottonNav from "@/src/components/iconBottonNav";
```

Responsável por:

* Renderizar os ícones da barra inferior.
* Aplicar estilos personalizados para itens ativos e inativos.

---

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Biblioteca utilizada para os ícones do aplicativo.

---

## Controle de Autenticação

A navegação verifica continuamente se existe um usuário autenticado:

```tsx
const { usuario } = useContext(AuthContext);
```

---

### Verificação de Sessão

```tsx
useEffect(() => {
  if (!usuario) {
    router.replace("/");
  }
}, [usuario]);
```

Objetivo:

* Impedir acesso às telas protegidas.
* Redirecionar para login caso o usuário não esteja autenticado.

---

## Estrutura das Tabs

A navegação utiliza o componente:

```tsx
<Tabs />
```

Configuração principal:

```tsx
initialRouteName="index"
```

Tela inicial:

```text
Home
```

---

## Configurações Gerais

### Cabeçalho

```tsx
headerShown: false
```

Objetivo:

* Ocultar cabeçalho padrão do Expo Router.

---

### Cor de Fundo

```tsx
backgroundColor: "#030d16"
```

Cor utilizada na barra inferior.

---

### Remoção da Borda Superior

```tsx
borderTopWidth: 0
```

Objetivo:

* Remover a linha padrão da TabBar.

---

### Altura da Barra

```tsx
height: 45
```

Define a altura da navegação inferior.

---

### Ocultar Texto das Abas

```tsx
tabBarShowLabel: false
```

Objetivo:

* Exibir apenas ícones.

---

### Cor dos Ícones Inativos

```tsx
tabBarInactiveTintColor: "#999"
```

Cor aplicada aos ícones não selecionados.

---

## Tela Home

Configuração:

```tsx
<Tabs.Screen
  name="index"
/>
```

Ícone:

```tsx
<InconBottonNav
  stado={focused}
  icon="home"
/>
```

Objetivo:

* Exibir a página inicial do aplicativo.

---

## Tela Pesquisa

Configuração:

```tsx
<Tabs.Screen
  name="search"
/>
```

Ícone:

```tsx
<InconBottonNav
  stado={focused}
  icon="search"
/>
```

Objetivo:

* Permitir pesquisa de filmes.

---

## Tela Catálogo

Configuração:

```tsx
<Tabs.Screen
  name="catalogo"
/>
```

Ícone:

```tsx
<InconBottonNav
  stado={focused}
  icon="book"
/>
```

Objetivo:

* Exibir todas as categorias disponíveis.

---

## Componente de Ícones

Todos os ícones utilizam o componente:

```tsx
<InconBottonNav />
```

Parâmetros:

```tsx
stado={focused}
icon="home"
```

Onde:

* `stado` indica se a aba está selecionada.
* `icon` define qual ícone será exibido.

---

## Fluxo da Navegação

```text
Login
   │
   ▼
Tabs
   │
   ├── Home
   │
   ├── Pesquisa
   │
   └── Catálogo
```

---

## Fluxo de Autenticação

```text
Usuário
   │
   ▼
Tabs
   │
   ├── Usuário Existe?
   │         │
   │         ├── Sim
   │         │      ▼
   │         │   Continua
   │         │
   │         └── Não
   │                ▼
   │            Tela Login
   │
   ▼
Navegação Liberada
```

---

## Estilos Utilizados

### Cor Principal

```text
#030d16
```

---

### Cor dos Ícones Inativos

```text
#999999
```

---

### Altura da Barra

```text
45px
```

---

### Espaçamento Superior

```text
paddingTop: 8
```

---
## Observações

O TabLayout é a estrutura principal de navegação do aplicativo, sendo responsável por organizar as telas mais utilizadas e controlar o acesso de usuários autenticados através da Context API.
