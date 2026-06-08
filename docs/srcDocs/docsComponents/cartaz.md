# Componente Cartaz

## Descrição

O componente `Cartaz` é responsável por exibir o pôster de um filme em formato de card.

Além de apresentar a imagem do filme e seu título, o componente permite navegar para a tela de detalhes do conteúdo ao ser pressionado.

Durante o carregamento da imagem é exibido um indicador visual para melhorar a experiência do usuário.

---

## Arquivo

```text
src/components/cartaz.tsx
```

---

## Objetivos

* Exibir pôsteres de filmes.
* Exibir o título do filme.
* Navegar para a tela de detalhes.
* Exibir indicador de carregamento da imagem.
* Padronizar a apresentação dos filmes na aplicação.

---

## Props

### Interface

```ts
{
  filme: Filme;
}
```

---

### filme

Tipo:

```ts
Filme
```

Descrição:

Objeto contendo as informações do filme que será exibido.

Exemplo:

```tsx
<Cartaz filme={filme} />
```

---

## Dependências

### Expo Router

```tsx
import { router } from "expo-router";
```

Responsável por:

* Navegação para a tela de detalhes do filme.

---

### React

```tsx
import React, { useState } from "react";
```

Responsável por:

* Controle dos estados do componente.

---

### React Native

```tsx
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
```

Responsável por:

* Estrutura visual.
* Exibição da imagem.
* Captura de eventos de toque.
* Indicador de carregamento.

---

### Serviço de Imagens

```tsx
import post_Filme from "../services/api_post_filem";
```

Responsável por:

* Gerar a URL completa da imagem do filme.

---

### Tipagem

```tsx
import { Filme } from "../types/types";
```

Responsável por:

* Definir a estrutura dos dados recebidos.

---

## Estados Utilizados

### loadingImage

```tsx
const [loadingImage, setLoadingImage] = useState(true);
```

Responsável por:

* Controlar o carregamento da imagem.

Valores:

```ts
true
```

Imagem carregando.

```ts
false
```

Imagem carregada.

---

## Funções

### Navegação para Detalhes

```tsx
router.push(`/peges/conteudo/${filme.id}`)
```

Responsável por:

* Abrir a página de detalhes do filme selecionado.

---

### Controle de Carregamento

#### Início do carregamento

```tsx
onLoadStart={() => setLoadingImage(true)}
```

Responsável por:

* Exibir o indicador de carregamento.

---

#### Finalização do carregamento

```tsx
onLoadEnd={() => setLoadingImage(false)}
```

Responsável por:

* Ocultar o indicador.
* Exibir a imagem.

---

#### Erro de carregamento

```tsx
onError={() => setLoadingImage(false)}
```

Responsável por:

* Encerrar o loading caso a imagem não seja carregada.

---

## Estrutura Visual

### Container Principal

```tsx
<View style={styles.container}>
```

Responsável por:

* Definir o espaço ocupado pelo card.

---

### Indicador de Carregamento

```tsx
<ActivityIndicator />
```

Responsável por:

* Informar que a imagem está sendo carregada.

Exibido somente quando:

```tsx
loadingImage === true
```

---

### Imagem do Filme

```tsx
<ImageBackground />
```

Responsável por:

* Exibir o pôster do filme.

Imagem utilizada:

```tsx
post_Filme(filme.poster_path)
```

---

### Título

```tsx
<Text>
  {filme.original_title}
</Text>
```

Responsável por:

* Exibir o nome original do filme.

---

### Área Clicável

```tsx
<TouchableOpacity>
```

Responsável por:

* Detectar o toque do usuário.
* Abrir a página de detalhes.

---

## Fluxo do Componente

```text
Recebe Filme
      │
      ▼
Renderiza Cartaz
      │
      ▼
Carrega Imagem
      │
      ├── Loading
      │       │
      │       ▼
      │ ActivityIndicator
      │
      └── Imagem Carregada
              │
              ▼
        Exibe Cartaz
              │
              ▼
      Usuário Pressiona
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

* Exibir os detalhes completos do filme.

---

## Cálculo do Tamanho dos Cards

### Largura da Tela

```tsx
const larguraTela =
  Dimensions.get("window").width;
```

---

### Tamanho do Cartaz

```tsx
const tamanhoCard =
  (larguraTela - 30) / 3;
```

Responsável por:

* Exibir três cartazes por linha.
* Ajustar automaticamente em diferentes dispositivos.

---

## Estilos Utilizados

### Fundo Principal

```text
#030d16
```

Utilizado no estado de carregamento.

---

### Cor do Texto

```text
#FFFFFF
```

Utilizada nos títulos.

---

### Sombra do Texto

```tsx
textShadowColor:
"rgba(0, 0, 0, 0.8)"
```

Responsável por:

* Melhorar a leitura sobre imagens claras.

---

### Altura do Cartaz

```tsx
height: 200
```

Responsável por:

* Padronizar a exibição dos pôsteres.

---

## Observações

O componente `Cartaz` é um dos principais elementos visuais da aplicação, sendo utilizado em listagens, categorias, favoritos, pesquisas e seções temáticas. Sua principal função é apresentar os filmes de forma compacta e permitir acesso rápido aos detalhes do conteúdo através da navegação para a página específica do filme.
