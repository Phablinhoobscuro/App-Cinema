# App Cinema

## Visão Geral

O **App Cinema** é uma aplicação mobile desenvolvida em **React Native com Expo Router**, cujo objetivo é permitir que usuários consultem informações sobre filmes utilizando a API do **TMDB (The Movie Database)**.

A aplicação oferece funcionalidades de autenticação, pesquisa de filmes, navegação por categorias, exibição de detalhes dos conteúdos e gerenciamento de favoritos.

---

# Objetivo do Projeto

O sistema foi desenvolvido para fornecer uma experiência simples e moderna de consulta de filmes, permitindo que o usuário:

* Navegue por categorias.
* Pesquise filmes.
* Visualize lançamentos.
* Consulte detalhes completos dos filmes.
* Gerencie sua lista de favoritos.
* Possua uma conta própria dentro da aplicação.

---

# Arquitetura Geral

A aplicação está dividida em quatro camadas principais:

```text
Interface (Telas)
        │
        ▼
Componentes
        │
        ▼
Serviços (APIs)
        │
        ▼
Dados Externos
```

---

# Tecnologias Utilizadas

## Frontend

```text
React Native
Expo
Expo Router
TypeScript
```

Responsáveis pela construção da interface mobile.

---

## Navegação

```text
Expo Router
```

Responsável por:

* Rotas.
* Navegação entre telas.
* Navegação por Tabs.
* Rotas dinâmicas.

---

## Estilização

```text
React Native StyleSheet
Expo Linear Gradient
```

Responsáveis pela aparência visual da aplicação.

---

## Requisições HTTP

```text
Axios
```

Responsável pela comunicação com APIs.

---

## API de Filmes

```text
TMDB - The Movie Database
```

Fornece:

* Filmes.
* Categorias.
* Imagens.
* Lançamentos.
* Detalhes.
* Pesquisa.

---

## Backend Próprio

```text
Spring Boot
```

Responsável por:

* Cadastro de usuários.
* Login.
* Favoritos.
* Dados persistentes.

---

# Estrutura do Projeto

```text
src
│
├── components
│
├── contexts
│
├── services
│
├── types
│
└── assets

app
│
├── (tabs)
│
├── (user)
│
└── peges
```

---

# Sistema de Autenticação

A autenticação é realizada através do contexto global:

```tsx
AuthContext
```

Estrutura:

```ts
type User = {
  id: string;
  nome: string;
  email: string;
};
```

Objetivos:

* Armazenar usuário logado.
* Compartilhar dados globalmente.
* Proteger telas privadas.

---

# Telas Principais

## Login

Permite:

* Autenticação do usuário.

---

## Cadastro

Permite:

* Criar uma nova conta.

---

## Home

Exibe:

* Lançamentos.
* Categorias.
* Carrosséis de filmes.

---

## Pesquisa

Permite:

* Buscar filmes pelo nome.

---

## Catálogo

Exibe:

* Todas as categorias disponíveis.

---

## Categoria

Exibe:

* Filmes de uma categoria específica.

---

## Conteúdo

Exibe:

* Informações completas do filme.

---

## Perfil

Exibe:

* Nome do usuário.
* E-mail.
* Favoritos.
* Logout.

---

## Favoritos

Exibe:

* Filmes favoritados pelo usuário.

---

# Componentes Principais

## Header

Responsável por:

* Exibir logo.
* Acesso ao perfil.

---

## Cartaz

Responsável por:

* Exibir pôsteres dos filmes.

---

## SectionTema

Responsável por:

* Exibir filmes agrupados por categoria.

---

## DataCarousel

Responsável por:

* Exibir destaques em formato de banner.

---

## AnimarCard

Responsável por:

* Exibir lançamentos em carrossel animado.

---

## InconBottonNav

Responsável por:

* Exibir os ícones da navegação inferior.

---

## NivelEstrelas

Responsável por:

* Exibir avaliações utilizando estrelas.

---

## ButtonCategoria

Responsável por:

* Exibir categorias em formato de botão.

---

# Serviços

## api.ts

Comunicação com o TMDB.

```text
https://api.themoviedb.org/3
```

Responsável por:

* Filmes.
* Categorias.
* Pesquisa.
* Detalhes.

---

## apiFilmes.ts

Comunicação com o backend próprio.

```text
http://localhost:8080
```

Responsável por:

* Usuários.
* Login.
* Favoritos.

---

## api_post_filem.ts

Responsável por:

* Montar URLs das imagens do TMDB.

---

# Navegação

## Rotas Públicas

```text
/
```

Login.

```text
/cadastroUser
```

Cadastro.

---

## Rotas Privadas

```text
/(tabs)
```

Área principal.

```text
/(user)/user
```

Perfil.

```text
/peges/conteudo/[id]
```

Detalhes do filme.

```text
/peges/categorias/[id]
```

Filmes da categoria.

```text
/favoritos
```

Lista de favoritos.

---

# Fluxo Geral da Aplicação

```text
Usuário
    │
    ▼
Login
    │
    ▼
Home
    │
    ├── Pesquisa
    │
    ├── Catálogo
    │
    ├── Categorias
    │
    ├── Conteúdo
    │
    └── Perfil
             │
             ├── Favoritos
             │
             └── Logout
```

---

# Padrão Visual

## Cor Principal

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

## Cor dos Botões

```text
#173046
```

---

## Cor dos Textos

```text
#FFFFFF
```

---

# Integrações Externas

## TMDB

Fornece:

* Filmes.
* Imagens.
* Categorias.
* Lançamentos.

---

## Backend Spring Boot

Fornece:

* Usuários.
* Favoritos.
* Autenticação.

---

# Observações

O App Cinema foi desenvolvido seguindo uma arquitetura baseada em componentes reutilizáveis, contexto global de autenticação e consumo de APIs REST. A aplicação integra dados do TMDB com funcionalidades próprias de usuários e favoritos, criando uma plataforma completa para consulta e organização de conteúdos cinematográficos.
