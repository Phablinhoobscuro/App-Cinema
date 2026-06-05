# Tela de Categoria de Filmes

## Descrição

A tela de Categoria é responsável por exibir todos os filmes pertencentes a uma categoria específica selecionada pelo usuário.

A categoria é recebida através da rota dinâmica e os filmes são carregados utilizando a API do TMDB.

---

## Arquivo

```text
app/peges/categorias/[categoriasId].tsx
```

---

## Objetivos

* Receber o ID da categoria pela rota.
* Buscar o nome da categoria.
* Buscar os filmes pertencentes à categoria.
* Exibir os filmes em formato de grade.
* Permitir navegação para os detalhes do filme.
* Exibir indicador de carregamento durante as consultas.

---

## Dependências

### Expo Router

```tsx
import { router, Stack, useLocalSearchParams } from "expo-router";
```

Responsável por:

* Receber parâmetros da URL.
* Navegar entre páginas.
* Configurar o cabeçalho da tela.

---

### React

```tsx
useState
useEffect
```

Utilizados para gerenciamento de estados e ciclo de vida.

---

### API TMDB

```tsx
import api from "@/src/services/api";
```

Responsável por buscar:

* Categorias
* Filmes da categoria

---

### Componentes

```tsx
Cartaz
```

Responsável pela renderização individual dos filmes.

---

## Parâmetros da Rota

A página recebe:

```text
/peges/categorias/:categoriasId
```

Exemplo:

```text
/peges/categorias/28
```

Onde:

| ID  | Categoria         |
| --- | ----------------- |
| 28  | Ação              |
| 35  | Comédia           |
| 27  | Terror            |
| 878 | Ficção Científica |

---

## Estados Utilizados

### Filmes

```tsx
const [filmes, setFilmes] = useState<Filme[]>([]);
```

Armazena todos os filmes retornados pela API.

---

### Categoria

```tsx
const [categoria, setCategoria] = useState<Categoria | null>(null);
```

Armazena os dados da categoria atual.

---

### Loading

```tsx
const [loading, setLoading] = useState(true);
```

Controla a exibição do indicador de carregamento.

---

## Estrutura da Categoria

```tsx
type Categoria = {
  id: number;
  name: string;
};
```

---

## Fluxo de Funcionamento

### 1. Recebe o ID da Categoria

```tsx
const { categoriasId } = useLocalSearchParams();
```

Exemplo:

```text
28
```

---

### 2. Busca Lista de Categorias

Endpoint:

```http
GET /genre/movie/list
```

Parâmetros:

```json
{
  "language": "pt-BR"
}
```

Objetivo:

* Obter o nome da categoria.
* Exibir o título da página.

---

### 3. Localiza a Categoria Atual

```tsx
const categoriaEncontrada =
  respostaCategorias.data.genres.find(
    item => item.id === Number(categoriasId)
  );
```

Resultado:

```json
{
  "id": 28,
  "name": "Ação"
}
```

---

### 4. Busca Filmes da Categoria

Endpoint:

```http
GET /discover/movie
```

Parâmetros:

```json
{
  "with_genres": 28,
  "language": "pt-BR"
}
```

Resultado:

Lista de filmes pertencentes à categoria.

---

### 5. Atualiza os Estados

```tsx
setCategoria(categoriaEncontrada);
setFilmes(respostaFilmes.data.results);
```

---

### 6. Finaliza o Loading

```tsx
setLoading(false);
```

---

## Cabeçalho da Tela

Configuração:

```tsx
<Stack.Screen />
```

Características:

* Transparente.
* Ícone de voltar personalizado.
* Cor branca.

---

### Botão Voltar

```tsx
<TouchableOpacity
  onPress={() => router.push("/catalogo")}
>
```

Responsável por retornar para a tela de catálogo.

---

## Loading

Enquanto os dados são carregados:

```tsx
<ActivityIndicator
  size="large"
  color="#fff"
/>
```

Tela exibida:

```text
Carregando...
```

---

## Exibição da Categoria

```tsx
<Text>
  {categoria?.name}
</Text>
```

Exemplo:

```text
Ação
```

---

## Exibição dos Filmes

Cada filme é renderizado através do componente:

```tsx
<Cartaz filme={filme} />
```

Responsável por:

* Exibir poster.
* Exibir título.
* Navegar para detalhes.

---

## Layout da Lista

Estrutura:

```tsx
flexDirection: "row"
flexWrap: "wrap"
justifyContent: "space-between"
```

Resultado:

```text
┌──────┐ ┌──────┐ ┌──────┐
│Filme │ │Filme │ │Filme │
└──────┘ └──────┘ └──────┘

┌──────┐ ┌──────┐ ┌──────┐
│Filme │ │Filme │ │Filme │
└──────┘ └──────┘ └──────┘
```

---

## Tratamento de Erros

Em caso de falha:

```tsx
Alert.alert(
  "Erro",
  error?.message || "Erro ao carregar dados."
);
```

Possíveis causas:

* Falha de internet.
* API indisponível.
* Categoria inexistente.
* Limite da API atingido.

---

## Fluxograma

```text
Usuário
   │
   ▼
Seleciona Categoria
   │
   ▼
Recebe categoriasId
   │
   ├── Busca Categorias
   │
   ├── Busca Filmes
   │
   ▼
Atualiza Estados
   │
   ▼
Renderiza Grade de Filmes
```

---