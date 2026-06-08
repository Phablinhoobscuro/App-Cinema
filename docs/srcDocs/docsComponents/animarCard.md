# Componente AnimarCard

## Descrição

O componente `AnimarCard` é responsável por exibir um carrossel animado contendo filmes em destaque da plataforma.

Através de um efeito visual em formato Parallax, os filmes são apresentados em cartões grandes, contendo imagem de fundo, título e um botão para acesso rápido aos detalhes do conteúdo.

O componente é utilizado para destacar lançamentos e conteúdos recomendados, oferecendo uma experiência visual mais atrativa ao usuário.

---

## Arquivo

```text
src/components/animarCard.tsx
```

---

## Objetivos

* Exibir filmes em destaque.
* Exibir lançamentos da plataforma.
* Criar uma experiência visual moderna utilizando carrossel animado.
* Permitir navegação rápida para a tela de detalhes.
* Destacar filmes através de imagens em tela ampliada.

---

## Dependências

### React

```tsx
import React, { useEffect, useState } from "react";
```

Responsável por:

* Gerenciar estados.
* Executar efeitos colaterais.
* Controlar o ciclo de vida do componente.

---

### React Native

```tsx
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
```

Responsável por:

* Estrutura visual do componente.
* Exibição das imagens.
* Renderização dos textos.
* Captura dos eventos de toque.

---

### Expo Router

```tsx
import { router } from "expo-router";
```

Responsável por:

* Navegação para a página de detalhes do filme.

---

### React Native Reanimated Carousel

```tsx
import Carousel from "react-native-reanimated-carousel";
```

Responsável por:

* Renderizar o carrossel animado.
* Aplicar o efeito Parallax.
* Permitir navegação horizontal entre os filmes.

---

### Serviço da API

```tsx
import api from "../services/api";
```

Responsável por:

* Buscar os filmes exibidos no carrossel.

---

### Tipagem

```tsx
import { Filme } from "../types/types";
```

Responsável por:

* Definir a estrutura dos dados recebidos da API.

---

## Estados Utilizados

### filmes

```tsx
const [filmes, setFilmes] = useState<Filme[]>([]);
```

Responsável por:

* Armazenar os filmes retornados pela API.
* Alimentar o carrossel de exibição.

---

## Funções

### buscaLancamentos()

```tsx
async function buscaLancamentos()
```

Responsável por:

* Buscar filmes na API.
* Atualizar a lista exibida no carrossel.

Endpoint utilizado:

```text
/discover/movie
```

Parâmetros:

```ts
{
  language: "pt-BR",
  page: 1
}
```

---

### abrirDetalhes()

```tsx
function abrirDetalhes(filme: Filme)
```

Responsável por:

* Navegar para a página de detalhes do filme selecionado.

Implementação:

```tsx
router.push({
  pathname: `./peges/conteudo/${filme.id}`,
  params: {
    id: filme.id,
  },
});
```

---

## Hooks Utilizados

### useEffect

```tsx
useEffect(() => {
  buscaLancamentos();
}, []);
```

Responsável por:

* Executar a busca dos filmes ao carregar o componente.

---

## Estrutura Visual

### Container Principal

```tsx
<View style={styles.container}>
```

Responsável por:

* Organizar toda a estrutura visual do componente.

---

### Título da Seção

```tsx
<Text style={styles.sectionTitle}>
  Lançamentos do Mês
</Text>
```

Responsável por:

* Identificar o conteúdo exibido pelo carrossel.

---

### Carrossel

```tsx
<Carousel />
```

Responsável por:

* Exibir os filmes em formato de slider horizontal.
* Aplicar animações de transição.

---

### Card do Filme

```tsx
<View style={styles.card}>
```

Responsável por:

* Exibir cada item individual do carrossel.

---

### Imagem do Filme

```tsx
<Image />
```

Responsável por:

* Exibir o backdrop ou pôster do filme.

Prioridade:

```text
1º backdrop_path
2º poster_path
```

---

### Overlay

```tsx
<View style={styles.overlay}>
```

Responsável por:

* Aplicar um fundo escuro sobre a imagem.
* Melhorar a leitura das informações.

---

### Título do Filme

```tsx
<Text style={styles.movieTitle}>
```

Responsável por:

* Exibir o nome do filme.

---

### Botão Ver Detalhes

```tsx
<TouchableOpacity>
```

Responsável por:

* Permitir acesso à página de conteúdo.

Texto exibido:

```text
Ver Detalhes
```

---

## Configuração do Carrossel

### Loop Infinito

```tsx
loop
```

Responsável por:

* Permitir navegação contínua.

---

### Altura

```tsx
height={420}
```

Responsável por:

* Definir a altura do componente.

---

### Largura

```tsx
width={width}
```

Responsável por:

* Ajustar o carrossel à largura do dispositivo.

---

### Modo Parallax

```tsx
mode="parallax"
```

Responsável por:

* Criar efeito tridimensional durante a navegação.

---

### Escala dos Cards

```tsx
parallaxScrollingScale: 0.85
```

Responsável por:

* Reduzir os cards laterais.

---

### Deslocamento

```tsx
parallaxScrollingOffset: width * 0.4
```

Responsável por:

* Criar profundidade visual.

---

## Fluxo do Componente

```text
Componente Iniciado
         │
         ▼
Executa useEffect
         │
         ▼
Busca Filmes
         │
         ▼
Atualiza Estado
         │
         ▼
Renderiza Carrossel
         │
         ▼
Usuário Navega
         │
         ▼
Seleciona Filme
         │
         ▼
Pressiona Botão
         │
         ▼
Tela de Conteúdo
```

---

## Navegação

### Tela de Conteúdo

Rota:

```text
/peges/conteudo/[conteudoId]
```

Exemplo:

```text
/peges/conteudo/550
```

Responsável por:

* Exibir informações completas do filme selecionado.

---

## Estilos Utilizados

### Cor Principal

```text
#173046
```

Utilizada nos botões e elementos de destaque.

---

### Cor dos Textos

```text
#FFFFFF
```

Utilizada nos títulos e descrições.

---

### Overlay Escuro

```text
rgba(0,0,0,0.65)
```

Responsável por melhorar a leitura sobre as imagens.

---

### Raio dos Cards

```tsx
borderRadius: 20
```

Responsável por criar bordas arredondadas.

---

### Sombra dos Títulos

```tsx
textShadowColor: "#000"
```

Responsável por melhorar a legibilidade.

---

## Observações

O componente `AnimarCard` é utilizado para destacar conteúdos dentro da aplicação através de um carrossel animado em tela cheia. Sua principal função é aumentar a visibilidade dos lançamentos e facilitar o acesso rápido aos detalhes dos filmes, oferecendo uma experiência visual mais rica e moderna para o usuário.
