# Componente DataCarousel

## Descrição

O componente `DataCarousel` é responsável por exibir os filmes dentro do carrossel principal da aplicação.

Além de apresentar o banner do filme, o componente permite abrir um painel animado contendo informações adicionais, como título e sinopse.

---

## Arquivo

```text
src/components/dataCarousel.tsx
```

---

## Objetivos

* Exibir banners de destaque dos filmes.
* Exibir informações resumidas do filme.
* Permitir visualização rápida da sinopse.
* Aplicar animações para melhorar a experiência do usuário.

---

## Props

### Interface

```ts
type Props = {
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

Objeto contendo os dados do filme exibido no carrossel.

Exemplo:

```tsx
<DataCarousel filme={filme} />
```

---

## Dependências

### React

```tsx
import React, { useRef, useState } from "react";
```

Responsável por:

* Controle de estados.
* Controle da animação.

---

### React Native Animated

```tsx
import { Animated } from "react-native";
```

Responsável por:

* Executar a animação de abertura e fechamento do painel.

---

### API de Imagens

```tsx
import post_Filme from "../services/api_post_filem";
```

Responsável por:

* Gerar a URL da imagem do filme.

---

### Types

```tsx
import { Filme } from "../types/types";
```

Responsável por:

* Definir a estrutura dos dados recebidos.

---

## Estados Utilizados

### status

```tsx
const [status, setStatus] = useState(false);
```

Responsável por:

* Controlar a visibilidade do painel de detalhes.

Valores:

```ts
true
```

Painel aberto.

```ts
false
```

Painel fechado.

---

### slideAnim

```tsx
const slideAnim = useRef(
  new Animated.Value(300)
).current;
```

Responsável por:

* Controlar a posição horizontal da animação.

---

## Funções

### abrirContainer()

```tsx
function abrirContainer()
```

Responsável por:

* Exibir o painel de detalhes.
* Executar animação de entrada.

Processo:

```text
Status = true
      │
      ▼
Animated.timing
      │
      ▼
translateX = 0
```

---

### fecharContainer()

```tsx
function fecharContainer()
```

Responsável por:

* Fechar o painel de detalhes.
* Executar animação de saída.

Processo:

```text
Status = false
      │
      ▼
Animated.timing
      │
      ▼
translateX = 300
```

---

## Estrutura Visual

### Banner Principal

```tsx
<ImageBackground />
```

Responsável por:

* Exibir a imagem principal do filme.

Imagem utilizada:

```tsx
post_Filme(filme.backdrop_path)
```

---

### Overlay

```tsx
<View style={styles.overlay}>
```

Responsável por:

* Melhorar a legibilidade do conteúdo sobre a imagem.

---

### Título

```tsx
<Text>
  {filme.title}
</Text>
```

Responsável por:

* Exibir o nome do filme.

---

### Botão Ver

```tsx
<TouchableOpacity>
```

Texto:

```text
Ver
```

Responsável por:

* Abrir o painel de detalhes.

---

### Painel Animado

```tsx
<Animated.View>
```

Responsável por:

* Exibir informações adicionais do filme.

---

### Título do Painel

```tsx
<Text>
  {filme.title}
</Text>
```

Responsável por:

* Exibir o título do filme.

---

### Sinopse

```tsx
<Text>
  {filme.overview}
</Text>
```

Responsável por:

* Exibir a descrição do filme.

---

### Botão Fechar

```tsx
<TouchableOpacity>
```

Texto:

```text
Fechar
```

Responsável por:

* Encerrar a visualização do painel.

---

## Fluxo do Componente

```text
Recebe Filme
      │
      ▼
Exibe Banner
      │
      ▼
Usuário Pressiona "Ver"
      │
      ▼
abrirContainer()
      │
      ▼
Painel Animado Abre
      │
      ├── Título
      ├── Sinopse
      └── Botão Fechar
                 │
                 ▼
         fecharContainer()
                 │
                 ▼
           Painel Fecha
```

---

## Animação Utilizada

### Entrada

```tsx
Animated.timing(slideAnim,{
  toValue: 0
})
```

Responsável por:

* Mover o painel da direita para a esquerda.

---

### Saída

```tsx
Animated.timing(slideAnim,{
  toValue: 300
})
```

Responsável por:

* Retornar o painel para fora da tela.

---

## Estilos Utilizados

### Cor Principal

```text
#173046
```

Utilizada nos botões.

---

### Overlay Escuro

```text
rgba(0,0,0,0.4)
```

Aplicado sobre o banner principal.

---

### Overlay do Modal

```text
rgba(0,0,0,0.75)
```

Aplicado sobre o painel de detalhes.

---

### Texto Principal

```text
#FFFFFF
```

Utilizado nos títulos e descrições.

---

## Observações

O componente `DataCarousel` é utilizado no carrossel principal da tela inicial para destacar filmes em exibição. Ele combina imagens promocionais com animações e exibição rápida de informações, permitindo uma experiência mais dinâmica e interativa para o usuário.
