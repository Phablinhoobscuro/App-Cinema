# Tela de Catálogo

## Descrição

A tela de Catálogo é responsável por exibir todas as categorias de filmes disponíveis na API, permitindo que o usuário navegue pelos gêneros e visualize os filmes relacionados a cada categoria.

Através desta tela o usuário pode:

* Visualizar todas as categorias disponíveis.
* Navegar para a listagem de filmes de uma categoria.
* Explorar novos gêneros de filmes.

---

## Arquivo

```text
app/(tabs)/catalogo.tsx
```

---

## Objetivos

* Exibir todas as categorias retornadas pela API.
* Permitir navegação por gênero.
* Facilitar a descoberta de novos conteúdos.
* Organizar os filmes por categoria.

---

## Dependências

### API TMDB

```tsx
import api from "@/src/services/api";
```

Responsável por:

* Buscar a lista de categorias disponíveis.

---

### Expo Linear Gradient

```tsx
import { LinearGradient } from "expo-linear-gradient";
```

Responsável pelo fundo gradiente da tela.

---

### Expo Router

```tsx
import { router } from "expo-router";
```

Responsável pela navegação entre telas.

---

### Header

```tsx
import Header from "@/src/components/header";
```

Responsável pela exibição do cabeçalho da aplicação.

---

### React Native Safe Area

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
```

Responsável por respeitar áreas seguras dos dispositivos.

---

## Estados Utilizados

### Lista de Categorias

```tsx
const [categorias, setCategorias] = useState<Categorias[]>([]);
```

Armazena todas as categorias retornadas pela API.

---

## Busca das Categorias

Função:

```tsx
async function categoriasFilmes()
```

Endpoint utilizado:

```http
GET /genre/movie/list
```

Parâmetros:

```tsx
language: "pt-BR"
```

Objetivo:

* Buscar todos os gêneros de filmes disponíveis.
* Atualizar o estado da tela com os resultados.

---

## Tratamento de Erros

Caso ocorra algum erro durante a consulta:

```tsx
Alert.alert(
  "Erro",
  `Ocorreu um erro na Buscas dos dados.${error.message}`,
);
```

Objetivo:

* Informar ao usuário que houve falha na comunicação com a API.

---

## Carregamento Inicial

```tsx
useEffect(() => {
  categoriasFilmes();
}, []);
```

Executado apenas uma vez ao abrir a tela.

Responsável por:

* Buscar as categorias disponíveis.
* Popular a interface com os dados recebidos.

---

## Navegação

Ao selecionar uma categoria:

```tsx
router.push(`/peges/categorias/${categoria.id}`);
```

A aplicação navega para a tela de filmes da categoria escolhida.

Exemplo:

```text
/peges/categorias/28
```

Categoria:

```text
Ação
```

---

## Estrutura Visual

### Cabeçalho

Componente:

```tsx
<Header />
```

Responsável por exibir:

* Logo da aplicação.
* Navegação principal.

---

### Título da Tela

Exibição:

```tsx
<Text style={styles.categoria}>
  Categorias
</Text>
```

Objetivo:

* Informar ao usuário o conteúdo da página.

---

### Lista de Categorias

Renderização:

```tsx
categorias.map(...)
```

Cada categoria é exibida em formato de botão.

Exemplo:

```text
Ação
Comédia
Drama
Terror
Romance
```

---

### Botão de Categoria

Estrutura:

```tsx
<TouchableOpacity>
```

Função:

```tsx
onPress={() =>
  router.push(`/peges/categorias/${categoria.id}`)
}
```

Objetivo:

* Abrir a listagem de filmes da categoria selecionada.

---

## Fluxo da Tela

```text
Usuário
    │
    ▼
Tela Catálogo
    │
    ▼
Busca Categorias
    │
    ▼
Exibe Lista
    │
    ▼
Seleciona Categoria
    │
    ▼
Tela de Filmes da Categoria
```

---

## Endpoint Utilizado

### Categorias

```http
GET /genre/movie/list
```

Parâmetros:

```text
language=pt-BR
```

---

## Estilos Utilizados

### Cor Principal

```text
#030d16
```

---

### Gradiente

```text
#173046
#08131d
#030d16
```

---

### Cor dos Botões

```text
rgba(255,255,255,0.08)
```

---

### Cor dos Textos

```text
#FFFFFF
```

---

### Borda dos Botões

```text
borderRadius: 20
```

---


## Observações

A tela de Catálogo funciona como um índice de gêneros da aplicação, permitindo que o usuário navegue facilmente entre categorias e encontre filmes organizados de forma simples e intuitiva.
