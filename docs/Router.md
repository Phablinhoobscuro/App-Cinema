# Aplicativo Cinema - Documentação Geral

## Descrição

O Aplicativo Cinema é uma aplicação mobile desenvolvida com React Native, Expo Router e TypeScript, destinada à consulta e visualização de filmes utilizando a API do TMDB (The Movie Database).

A aplicação permite:

* Autenticação de usuários.
* Navegação por categorias.
* Pesquisa de filmes.
* Visualização de lançamentos.
* Consulta de detalhes dos filmes.
* Gerenciamento de favoritos.
* Perfil do usuário.

---

# Arquitetura Geral

A aplicação segue uma arquitetura baseada em:

```text
Expo Router
+
React Context
+
Axios
+
TMDB API
+
API Própria (Spring Boot)
```

---

# Estrutura de Pastas

```text
app/
│
├── index.tsx
│
├── cadastroUser.tsx
│
├── (tabs)/
│   │
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── search.tsx
│   └── catalogo.tsx
│
├── (user)/
│   │
│   ├── user.tsx
│   └── favoritos.tsx
│
└── peges/
    │
    ├── categorias/
    │   └── [categoriasId].tsx
    │
    └── conteudo/
        └── [conteudoId].tsx
```

---

# Estrutura Src

```text
src/
│
├── components/
│   │
│   ├── AnimarCard.tsx
│   ├── Buton.tsx
│   ├── cartaz.tsx
│   ├── dataCarousel.tsx
│   ├── header.tsx
│   ├── iconBottonNav.tsx
│   ├── nivelEstrelas.tsx
│   └── sectionTemas.tsx
│
├── contexts/
│   │
│   └── userContexts.tsx
│
├── services/
│   │
│   ├── api.ts
│   ├── apiFilmes.ts
│   └── api_post_filem.ts
│
└── types/
    │
    └── types.ts
```

---

# Sistema de Rotas

A aplicação utiliza Expo Router.

---

## Layout Principal

Arquivo:

```text
app/_layout.tsx
```

Responsável por:

* Configurar Stack Navigation.
* Registrar Context Provider.
* Configurar Gesture Handler.

Rotas registradas:

```text
/
cadastroUser
(tabs)
peges/categorias/[categoriasId]
peges/conteudo/[conteudoId]
(user)/user
(user)/favoritos
```

---

# Rotas Públicas

## Login

```text
/
```

Arquivo:

```text
app/index.tsx
```

Objetivo:

* Realizar autenticação.

---

## Cadastro

```text
/cadastroUser
```

Arquivo:

```text
app/cadastroUser.tsx
```

Objetivo:

* Criar novos usuários.

---

# Rotas Privadas

As rotas privadas utilizam:

```tsx
AuthContext
```

para validar se existe usuário autenticado.

---

## Home

```text
/(tabs)
```

Arquivo:

```text
app/(tabs)/index.tsx
```

Responsável por:

* Exibir lançamentos.
* Exibir categorias.
* Exibir destaques.
* Exibir carrosséis.

---

## Pesquisa

```text
/(tabs)/search
```

Arquivo:

```text
app/(tabs)/search.tsx
```

Responsável por:

* Pesquisar filmes.
* Exibir resultados.
* Exibir lançamentos quando não houver pesquisa.

---

## Catálogo

```text
/(tabs)/catalogo
```

Arquivo:

```text
app/(tabs)/catalogo.tsx
```

Responsável por:

* Listar categorias disponíveis.

---

## Perfil

```text
/(user)/user
```

Arquivo:

```text
app/(user)/user.tsx
```

Responsável por:

* Exibir informações do usuário.
* Exibir favoritos.
* Logout.

---

## Favoritos

```text
/(user)/favoritos
```

Arquivo:

```text
app/(user)/favoritos.tsx
```

Responsável por:

* Exibir filmes favoritos do usuário.

---

## Categoria

```text
/peges/categorias/[categoriasId]
```

Exemplo:

```text
/peges/categorias/28
```

Responsável por:

* Exibir filmes de uma categoria específica.

---

## Conteúdo

```text
/peges/conteudo/[conteudoId]
```

Exemplo:

```text
/peges/conteudo/550
```

Responsável por:

* Exibir detalhes completos do filme.

---

# Context API

Arquivo:

```text
src/contexts/userContexts.tsx
```

---

## User

```ts
type User = {
  id: string;
  nome: string;
  email: string;
}
```

---

## AuthContext

Responsável por:

* Armazenar usuário logado.
* Compartilhar autenticação entre telas.
* Proteger rotas privadas.

---

## Provider

```tsx
<AuthProvider>
```

Envolve toda a aplicação.

---

# Integração com APIs

## TMDB

Arquivo:

```text
src/services/api.ts
```

Biblioteca:

```tsx
Axios
```

Base URL:

```text
https://api.themoviedb.org/3
```

Responsável por:

* Filmes.
* Categorias.
* Pesquisa.
* Detalhes.
* Lançamentos.

---

## API Backend

Arquivo:

```text
src/services/apiFilmes.ts
```

Base URL:

```text
http://localhost:8080
```

Responsável por:

* Favoritos.
* Usuários.
* Integrações próprias.

---

# Serviço de Imagens

Arquivo:

```text
src/services/api_post_filem.ts
```

Função:

```ts
post_Filme(link)
```

Retorna:

```text
https://image.tmdb.org/t/p/w500
```

Utilizada para:

* Posters.
* Backdrops.
* Banners.

---

# Componentes Utilizados

## Header

```text
src/components/header.tsx
```

Responsável por:

* Logo.
* Acesso ao perfil.

---

## Cartaz

```text
src/components/cartaz.tsx
```

Responsável por:

* Exibir filmes em formato de card.

---

## SectionTema

```text
src/components/sectionTemas.tsx
```

Responsável por:

* Exibir filmes por categoria.

---

## DataCarousel

```text
src/components/dataCarousel.tsx
```

Responsável por:

* Banner principal.
* Informações rápidas dos filmes.

---

## AnimarCard

```text
src/components/AnimarCard.tsx
```

Responsável por:

* Carrossel animado de lançamentos.

---

## InconBottonNav

```text
src/components/iconBottonNav.tsx
```

Responsável por:

* Ícones da navegação inferior.

---

## NivelEstrelas

```text
src/components/nivelEstrelas.tsx
```

Responsável por:

* Exibir avaliação do filme.

---

## Buton

```text
src/components/Buton.tsx
```

Responsável por:

* Exibir categorias e botões personalizados.

---

# Navegação

Fluxo principal:

```text
Login
   │
   ▼
Home
   │
   ├── Pesquisa
   │
   ├── Catálogo
   │      │
   │      ▼
   │   Categoria
   │      │
   │      ▼
   │   Conteúdo
   │
   ├── Perfil
   │      │
   │      ├── Favoritos
   │      │
   │      └── Logout
   │
   └── Lançamentos
          │
          ▼
      Conteúdo
```

---

# Bibliotecas Utilizadas

## Expo Router

```tsx
expo-router
```

Responsável por:

* Sistema de rotas.

---

## Axios

```tsx
axios
```

Responsável por:

* Comunicação HTTP.

---

## React Native Reanimated Carousel

```tsx
react-native-reanimated-carousel
```

Responsável por:

* Carrosséis animados.

---

## Expo Linear Gradient

```tsx
expo-linear-gradient
```

Responsável por:

* Fundos com gradiente.

---

## React Native Gesture Handler

```tsx
react-native-gesture-handler
```

Responsável por:

* Gestos da aplicação.

---

## Safe Area Context

```tsx
react-native-safe-area-context
```

Responsável por:

* Respeitar áreas seguras do dispositivo.

---

## Ionicons

```tsx
@expo/vector-icons
```

Responsável por:

* Ícones da interface.

---

# Paleta de Cores

## Fundo Principal

```text
#030d16
```

---

## Gradiente

```text
#173046
#08131d
#030d16
```

---

## Destaques

```text
#003870ff
#0e65bdff
```

---

## Texto Principal

```text
#FFFFFF
```

---

## Texto Secundário

```text
#999999
```

---

# Observações

O Aplicativo Cinema foi desenvolvido utilizando uma arquitetura moderna baseada em Expo Router, React Context e consumo da API TMDB. A estrutura foi organizada de forma modular, separando telas, componentes, serviços, contextos e tipagens, facilitando manutenção, escalabilidade e futuras implementações.