# Tela de Pesquisa de Filmes

## Descrição

A tela de Pesquisa permite que o usuário procure filmes utilizando a API do TMDB.

Além da pesquisa manual, a tela também exibe os filmes que estão atualmente em cartaz quando nenhuma pesquisa foi realizada.

Através desta tela o usuário pode:

* Pesquisar filmes por nome.
* Visualizar filmes em cartaz.
* Navegar para os detalhes de um filme.
* Visualizar resultados atualizados em tempo real durante a digitação.

---

## Arquivo

```text
app/(tabs)/search.tsx
```

---

## Objetivos

* Permitir busca de filmes.
* Exibir filmes encontrados.
* Exibir lançamentos em cartaz quando não houver pesquisa.
* Integrar com a API do TMDB.
* Facilitar acesso aos detalhes dos filmes.

---

## Dependências

### API TMDB

```tsx
import api from "@/src/services/api";
```

Responsável por:

* Buscar filmes por nome.
* Buscar filmes em cartaz.

---

### Componente Cartaz

```tsx
import Cartaz from "@/src/components/cartaz";
```

Responsável por:

* Exibir poster do filme.
* Exibir título.
* Navegar para a tela de detalhes.

---

### Header

```tsx
import Header from "@/src/components/header";
```

Responsável por:

* Exibir cabeçalho padrão da aplicação.

---

### Expo Linear Gradient

```tsx
import { LinearGradient } from "expo-linear-gradient";
```

Responsável pelo fundo gradiente da tela.

---

### Safe Area

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
```

Responsável por respeitar as áreas seguras do dispositivo.

---

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Responsável por exibir o ícone de pesquisa.

---

## Estados Utilizados

### Resultado da Pesquisa

```tsx
const [repostaPesquisa, setRespostaPesquisa] =
  useState<Filme[]>([]);
```

Armazena os filmes encontrados na pesquisa.

---

### Filmes em Cartaz

```tsx
const [lancamentos, setLancamentos] =
  useState<Filme[]>([]);
```

Armazena os filmes atualmente em cartaz.

---

## Pesquisa de Filmes

Função:

```tsx
async function buscarFilme(p?: string)
```

Responsável por consultar a API TMDB utilizando o texto digitado pelo usuário.

Endpoint:

```http
GET /search/movie
```

Parâmetros:

```json
{
  "query": "Avatar",
  "language": "pt-BR"
}
```

Resposta:

```json
{
  "results": [
    {
      "id": 76600,
      "title": "Avatar"
    }
  ]
}
```

---

## Busca de Filmes em Cartaz

Função:

```tsx
async function lancamentosFilmes()
```

Responsável por buscar os filmes que estão atualmente nos cinemas.

Endpoint:

```http
GET /movie/now_playing
```

Parâmetros:

```json
{
  "language": "pt-BR",
  "page": 1
}
```

---

## Carregamento Inicial

Ao abrir a tela:

```tsx
useEffect(() => {
  buscarFilme();
  lancamentosFilmes();
}, []);
```

Fluxo:

```text
Tela Inicia
      │
      ▼
Busca Filmes em Cartaz
      │
      ▼
Armazena Resultado
      │
      ▼
Exibe Filmes
```

---

## Campo de Pesquisa

Componente:

```tsx
<TextInput />
```

Configuração:

```tsx
onChangeText={(e) => buscarFilme(e)}
```

Objetivo:

* Atualizar os resultados automaticamente.
* Realizar pesquisa em tempo real.

---

## Ícone de Pesquisa

Componente:

```tsx
<Ionicons
  name="search"
  size={24}
  color="#fff"
/>
```

Função:

* Identificar visualmente o campo de pesquisa.

---

## Exibição dos Resultados

Quando existem resultados:

```tsx
repostaPesquisa.map((filme) => (
  <Cartaz filme={filme} />
))
```

---

## Exibição dos Lançamentos

Quando não existe pesquisa:

```tsx
lancamentos.map((filme) => (
  <Cartaz filme={filme} />
))
```

---

## Fluxo da Pesquisa

```text
Usuário Digita
        │
        ▼
buscarFilme()
        │
        ▼
TMDB
        │
        ▼
Resultados
        │
        ▼
Atualiza Estado
        │
        ▼
Renderiza Cartazes
```

---

## Fluxo da Tela

```text
Tela Pesquisa
       │
       ├── Campo de Busca
       │
       ├── Pesquisa Filme
       │       │
       │       ▼
       │   Lista de Resultados
       │
       └── Sem Pesquisa
               │
               ▼
        Filmes em Cartaz
```

---

## Estrutura Visual

### Cabeçalho

```tsx
<Header />
```

Responsável pela exibição do topo da aplicação.

---

### Campo de Busca

```tsx
<TextInput />
```

Permite pesquisar filmes.

---

### Lista de Filmes

```tsx
<ScrollView />
```

Exibe:

* Resultados da pesquisa.
* Filmes em cartaz.

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

### Campo de Busca

```text
#1b2631
```

---

### Cor do Texto

```text
#FFFFFF
```

---

### Placeholder

```text
#AAAAAA
```

---


## Observações

Esta tela é responsável pela descoberta de novos conteúdos dentro da aplicação, permitindo que o usuário encontre rapidamente filmes específicos ou visualize os lançamentos atualmente disponíveis nos cinemas através da integração com a API do TMDB.
