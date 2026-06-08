# Componente NivelEstrelas

## Descrição

O componente `NivelEstrelas` é responsável por exibir a nota de avaliação de um filme juntamente com uma representação visual utilizando ícones de estrelas.

---

## Arquivo

```text
src/components/nivelEstelas.tsx
```

---

## Objetivos

* Exibir a nota do filme.
* Representar visualmente a avaliação através de estrelas.
* Melhorar a experiência visual do usuário.
* Permitir reutilização em diferentes telas.

---

## Props

### Interface

```ts
type Props = {
  nota?: number;
}
```

---

### nota

Tipo:

```ts
number
```

Descrição:

Nota recebida do filme que será exibida na tela.

Valor padrão:

```ts
0
```

---

## Dependências

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Responsável por:

* Exibir os ícones de estrelas.

---

### React Native

```tsx
import { View, Text } from "react-native";
```

Responsável por:

* Estruturar os elementos visuais.
* Exibir textos e ícones.

---

## Estados Utilizados

Este componente não utiliza estados internos.

---

## Funções

Este componente não possui funções auxiliares.

A renderização das estrelas é feita diretamente através do método:

```tsx
Array.from()
```

---

## Estrutura Visual

### Nota

```tsx
<Text>{nota}</Text>
```

Responsável por exibir o valor numérico da avaliação.

---

### Estrelas

```tsx
<Ionicons
  name="star"
  size={10}
  color="gold"
/>
```

Responsável por representar visualmente a avaliação.

---

### Container

```tsx
<View>
```

Responsável por alinhar a nota e as estrelas horizontalmente.

---

## Fluxo do Componente

```text
Componente
     │
     ▼
Recebe Nota
     │
     ▼
Exibe Valor Numérico
     │
     ▼
Gera Estrelas
     │
     ▼
Renderiza Interface
```

---

## Estilos Utilizados

### Cor Principal

```text
#FFFFFF
```

Utilizada na exibição da nota.

---

### Cor das Estrelas

```text
gold
```

Utilizada para destacar a avaliação.

---

### Layout

```tsx
flexDirection: "row"
alignItems: "center"
```

Responsável pelo alinhamento horizontal dos elementos.

---

## Observações

O componente `NivelEstrelas` é utilizado para exibir avaliações de filmes de forma simples e intuitiva. Atualmente ele exibe a nota recebida e gera uma quantidade de estrelas correspondente ao valor informado.
