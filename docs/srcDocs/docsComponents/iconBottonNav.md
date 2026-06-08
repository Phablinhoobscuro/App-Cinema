# Componente InconBottonNav

## Descrição

O componente `InconBottonNav` é responsável por exibir os ícones da barra de navegação inferior da aplicação.

Ele altera automaticamente sua aparência quando a aba está ativa ou inativa, destacando visualmente a página selecionada.

---

## Arquivo

```text
src/components/iconBottonNav.tsx
```

---

## Objetivos

* Exibir ícones da navegação inferior.
* Destacar a aba atualmente selecionada.
* Melhorar a experiência visual da navegação.
* Centralizar a lógica visual dos ícones das tabs.

---

## Props

### Interface

```ts
type Props = {
  stado: boolean;
  icon?: IconName;
}
```

---

### stado

Tipo:

```ts
boolean
```

Descrição:

Indica se a aba está ativa ou não.

Valores:

```ts
true
```

Aba selecionada.

```ts
false
```

Aba não selecionada.

---

### icon

Tipo:

```ts
IconName
```

Descrição:

Nome do ícone utilizado pelo Ionicons.

Valor padrão:

```ts
"help-circle"
```

Exemplo:

```tsx
<InconBottonNav
  stado={true}
  icon="home"
/>
```

---

## Dependências

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Responsável por:

* Exibir os ícones da barra de navegação.

---

### React Native

```tsx
import { View, StyleSheet } from "react-native";
```

Responsável por:

* Estrutura visual do componente.
* Aplicação dos estilos.

---

## Estados Utilizados

Este componente não utiliza estados internos.

---

## Funções

Este componente não possui funções auxiliares.

A lógica principal é realizada através de renderização condicional:

```tsx
stado ? styles.opemPege : styles.closePege
```

---

## Estrutura Visual

### Container

```tsx
<View>
```

Responsável por envolver o ícone e aplicar os estilos correspondentes ao estado da aba.

---

### Ícone

```tsx
<Ionicons />
```

Responsável por exibir o ícone da navegação.

Quando ativo:

```tsx
name={icon}
```

Quando inativo:

```tsx
name={`${icon}-outline`}
```

---

## Fluxo do Componente

```text
Componente
     │
     ▼
Recebe Props
     │
     ▼
Verifica Estado
     │
     ├── Ativo
     │      │
     │      ▼
     │  Exibe Destaque
     │
     └── Inativo
            │
            ▼
      Exibe Outline
            │
            ▼
      Renderiza Ícone
```

---

## Estilos Utilizados

### Aba Ativa

```text
#003870ff
```

Cor utilizada no fundo do botão selecionado.

---

### Destaque Superior

```text
#0e65bdff
```

Utilizado na borda superior das abas não selecionadas.

---

### Sombra

```tsx
shadowColor: "#0e65bdff"
elevation: 8
```

Responsável pelo efeito de profundidade da aba ativa.

---

### Tamanho do Botão Ativo

```tsx
width: 60
height: 60
borderRadius: 30
```

Responsável por criar o efeito circular da aba selecionada.

---

## Observações

O componente `InconBottonNav` é utilizado pela navegação principal da aplicação para exibir os ícones das abas. Sua principal função é destacar visualmente a tela ativa através de um botão elevado, com sombra e fundo diferenciado, proporcionando uma navegação mais moderna e intuitiva.
