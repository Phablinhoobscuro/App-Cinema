# Componente ButtonCategoria

## Descrição

O componente `ButtonCategoria` é responsável por exibir um botão estilizado utilizado para representar categorias de filmes dentro da aplicação.

Seu objetivo é padronizar a aparência visual dos botões de categorias, permitindo a personalização da cor de fundo através de propriedades.

O componente é reutilizado em diversas partes da interface para exibição de gêneros, filtros e categorias disponíveis.

---

## Arquivo

```text
src/components/Buton.tsx
```

---

## Objetivos

* Exibir categorias de filmes.
* Padronizar os botões da aplicação.
* Permitir personalização da cor de fundo.
* Facilitar a reutilização do componente.
* Melhorar a consistência visual da interface.

---

## Props

### Interface

```ts
{
  text: string;
  color?: string;
}
```

---

### text

Tipo:

```ts
string
```

Descrição:

Texto exibido dentro do botão.

Exemplo:

```tsx
<ButtonCategoria
  text="Ação"
/>
```

---

### color

Tipo:

```ts
string
```

Descrição:

Cor de fundo utilizada pelo botão.

Valor padrão:

```ts
"#ff0000"
```

Exemplo:

```tsx
<ButtonCategoria
  text="Comédia"
  color="#173046"
/>
```

---

## Dependências

### React Native

```tsx
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
```

Responsável por:

* Estrutura visual do componente.
* Exibição do texto.
* Captura de eventos de toque.
* Aplicação dos estilos.

---

## Estados Utilizados

Este componente não utiliza estados internos.

Toda sua renderização é baseada nas propriedades recebidas.

---

## Funções

Este componente não possui funções auxiliares.

Sua responsabilidade é apenas renderizar um botão com os dados recebidos através das props.

---

## Estrutura Visual

### Botão

```tsx
<TouchableOpacity />
```

Responsável por:

* Exibir o botão.
* Permitir interação do usuário.

---

### Texto

```tsx
<Text>
  {text}
</Text>
```

Responsável por:

* Exibir o nome da categoria.
* Informar ao usuário qual gênero ou filtro está sendo representado.

---

## Fluxo do Componente

```text
Componente
      │
      ▼
Recebe Props
      │
      ├── text
      │
      └── color
              │
              ▼
      Aplica Estilos
              │
              ▼
      Renderiza Botão
              │
              ▼
      Exibe Categoria
```

---

## Personalização de Cor

A cor do botão é aplicada dinamicamente:

```tsx
style={[
  styles.button,
  {
    backgroundColor: color
  }
]}
```

Caso nenhuma cor seja informada:

```tsx
color = "#ff0000"
```

O componente utilizará automaticamente a cor padrão.

---

## Exemplo de Utilização

### Cor padrão

```tsx
<ButtonCategoria
  text="Aventura"
/>
```

---

### Cor personalizada

```tsx
<ButtonCategoria
  text="Terror"
  color="rgba(255,255,255,0.08)"
/>
```

---

## Estilos Utilizados

### Cor Padrão

```text
#ff0000
```

Utilizada quando nenhuma cor é enviada através da prop `color`.

---

### Cor do Texto

```text
#FFFFFF
```

Utilizada para manter boa legibilidade sobre diferentes fundos.

---

### Bordas Arredondadas

```tsx
borderRadius: 10
```

Responsável por deixar o botão mais moderno visualmente.

---

### Espaçamento Interno

```tsx
padding: 15
```

Responsável por aumentar a área de toque e melhorar a aparência.

---

### Margem

```tsx
margin: 3
```

Responsável pelo espaçamento entre os botões.

---

### Alinhamento

```tsx
alignItems: "center"
```

Responsável por centralizar o texto horizontalmente.
---

## Observações

O componente `ButtonCategoria` é um componente visual simples utilizado para exibir categorias e filtros dentro da aplicação.

Sua implementação foi pensada para ser reutilizável e altamente personalizável, permitindo a alteração da cor de fundo sem necessidade de criar novos estilos.

Por ser um componente genérico, ele pode ser reutilizado em outras áreas da aplicação além do catálogo de filmes, mantendo a consistência visual da interface.
