# Tela de Detalhes do Filme

## Descrição

A tela de Detalhes do Filme é responsável por exibir todas as informações de um filme selecionado pelo usuário.

A página consome dados da API do TMDB, exibe trailer, informações do filme, disponibilidade em plataformas de streaming e permite adicionar ou remover o filme da lista de favoritos.

---

## Arquivo

```text
app/peges/conteudo/[conteudoId].tsx
```

---

## Objetivos

* Exibir detalhes completos do filme.
* Exibir banner do filme.
* Exibir nota e avaliação.
* Exibir trailer oficial.
* Exibir plataformas de streaming disponíveis.
* Permitir favoritar o filme.
* Exibir informações complementares.

---

## Dependências

### Expo Router

```tsx
useLocalSearchParams
Stack
```

Responsável por:

* Receber parâmetros da rota.
* Configurar o cabeçalho da página.

---

### React

```tsx
useState
useEffect
useContext
```

Responsável pelo gerenciamento dos estados.

---

### APIs

```tsx
api
apiFilmes
```

#### api

Comunicação com TMDB.

#### apiFilmes

Comunicação com backend próprio.

---

### Contexto

```tsx
AuthContext
```

Utilizado para obter o usuário autenticado.

---

### Componentes

```tsx
NivelEstrelas
YoutubePlayer
LinearGradient
```

---

## Parâmetros da Rota

A página recebe:

```text
/peges/conteudo/:conteudoId
```

Exemplo:

```text
/peges/conteudo/12345
```

---

## Estados Utilizados

### Filme

```tsx
const [filme, setFilme] = useState<Filme | null>(null);
```

Armazena os dados completos do filme.

---

### Loading

```tsx
const [loading, setLoading] = useState(true);
```

Controla a exibição do indicador de carregamento.

---

### Trailer

```tsx
const [trailerKey, setTrailerKey] = useState("");
```

Armazena a chave do trailer do YouTube.

---

### Favorito

```tsx
const [favorito, setFavorito] = useState(false);
```

Indica se o filme está favoritado.

---

### Providers

```tsx
const [providers, setProviders] = useState<any[]>([]);
```

Armazena as plataformas de streaming.

---

## Fluxo de Carregamento

### 1. Recebe o ID

```tsx
const { conteudoId } = useLocalSearchParams();
```

---

### 2. Busca Dados do Filme

Endpoint TMDB:

```http
GET /movie/{id}
```

Retorna:

* Título
* Sinopse
* Banner
* Nota
* Data de lançamento

---

### 3. Busca Trailer

Endpoint:

```http
GET /movie/{id}/videos
```

Filtra:

```tsx
video.site === "YouTube"
video.type === "Trailer"
```

---

### 4. Busca Streaming

Endpoint:

```http
GET /movie/{id}/watch/providers
```

Retorna:

* Netflix
* Disney+
* Prime Video
* Max
* Apple TV
* Paramount+
* Outros

Disponíveis no Brasil:

```tsx
results.BR.flatrate
```

---

### 5. Busca Favorito

Backend:

```http
GET /favoritos/{usuarioId}/{filmeId}
```

Verifica se o filme já está salvo.

---

## Sistema de Favoritos

### Adicionar Favorito

Endpoint:

```http
POST /favoritos
```

Body:

```json
{
  "usuarioId": "123",
  "filmeId": "456"
}
```

---

### Alteração Visual

Quando favoritado:

```tsx
heart
```

Cor:

```text
#45617e
```

Quando não favoritado:

```tsx
heart-outline
```

Cor:

```text
#FFFFFF
```

---

## Componentes Visuais

### Banner

Exibe:

* Imagem de fundo.
* Título.
* Nota.
* Data de lançamento.

---

### Disponível em

Exibe:

* Logo da plataforma.
* Nome da plataforma.

Exemplo:

```text
Netflix
Prime Video
Disney+
Max
Apple TV+
```

---

### Sinopse

Exibe:

```tsx
filme.overview
```

---

### Trailer

Componente:

```tsx
YoutubePlayer
```

Caso não exista:

```text
Trailer não disponível
```

---

### Informações

Exibe:

* Idioma original.
* Popularidade.
* Quantidade de votos.

---

## Fluxograma

```text
Usuário
    │
    ▼
Seleciona Filme
    │
    ▼
Tela Detalhes
    │
    ├── Busca Dados TMDB
    │
    ├── Busca Trailer
    │
    ├── Busca Streaming
    │
    ├── Busca Favorito
    │
    ▼
Exibe Informações
    │
    ├── Favoritar
    │
    ├── Assistir Trailer
    │
    └── Ver Streaming
```

---

## Layout

### Cor Principal

```text
#030d16
```

### Gradiente

```text
transparent
rgba(3,13,22,0.8)
#030d16
```

---

## Tratamento de Erros

### Favoritos

Caso ocorra erro:

```tsx
Alert.alert(
  "Erro",
  e.response?.data?.message || e.message
);
```

---

### APIs Externas

Erros são registrados no console:

```tsx
console.log(erro);
```

---