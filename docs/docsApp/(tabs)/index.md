# Tela Inicial (Home)

## Descrição

A tela Home é a página principal do aplicativo, responsável por apresentar os conteúdos em destaque, categorias de filmes e seções temáticas para navegação dos usuários.

Através desta tela o usuário pode:

* Visualizar filmes em cartaz.
* Navegar por categorias.
* Visualizar filmes em destaque no carrossel.
* Acessar listas temáticas.
* Navegar para detalhes dos filmes.

---

## Arquivo

```text
app/(tabs)/index.tsx
```

---

## Objetivos

* Exibir filmes atualmente em cartaz.
* Carregar categorias do TMDB.
* Organizar conteúdos por tema.
* Destacar lançamentos em formato de carrossel.
* Melhorar a experiência de navegação.

---

## Dependências

### API TMDB

```tsx
import api from "@/src/services/api";
```

Responsável por:

* Buscar filmes em cartaz.
* Buscar categorias disponíveis.

---

### Expo Linear Gradient

```tsx
import { LinearGradient } from "expo-linear-gradient";
```

Responsável pelo fundo gradiente da tela.

---

### React Native Safe Area

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
```

Responsável por respeitar áreas seguras do dispositivo.

---

### Carousel

```tsx
import Carousel from "react-native-reanimated-carousel";
```

Responsável pela exibição dos filmes em destaque.

---

## Componentes Utilizados

### Header

```tsx
import Header from "@/src/components/header";
```

Exibe o cabeçalho da aplicação.

---

### Button

```tsx
import Buton from "@/src/components/Buton";
```

Exibe os botões das categorias.

---

### DataCarousel

```tsx
import DataCarousel from "@/src/components/dataCarousel";
```

Responsável por renderizar os filmes do carrossel principal.

---

### SectionTema

```tsx
import SectionTema from "@/src/components/sectionTemas";
```

Responsável por exibir listas horizontais de filmes por categoria.

---

### AnimarCard

```tsx
import AnimarCard from "@/src/components/animarCard";
```

Responsável por exibir o carrossel animado de lançamentos.

---

## Estados Utilizados

### Categorias Principais

```tsx
const [categorias, setCategorias] = useState<Categorias[]>([]);
```

Armazena as categorias exibidas no topo da tela.

---

### Categorias Secundárias

```tsx
const [categorias2, setCategorias2] = useState<Categorias[]>([]);
```

Armazena categorias exibidas após o carrossel animado.

---

### Lançamentos

```tsx
const [lancamentos, setLancamentos] = useState<Filme[]>([]);
```

Armazena os filmes em cartaz.

---

## Categorias Pré-Definidas

### Grupo 1

```tsx
const listaCategorias = [28, 16, 35];
```

Representa:

| Categoria | ID |
| --------- | -- |
| Ação      | 28 |
| Animação  | 16 |
| Comédia   | 35 |

---

### Grupo 2

```tsx
const listaCategorias2 = [53, 10749, 10402];
```

Representa:

| Categoria | ID    |
| --------- | ----- |
| Thriller  | 53    |
| Romance   | 10749 |
| Música    | 10402 |

---

## Busca de Filmes em Cartaz

Função:

```tsx
async function lancamentosFilmes()
```

Endpoint utilizado:

```text
/movie/now_playing
```

Parâmetros:

```tsx
language: "pt-BR"
page: 1
```

Objetivo:

* Buscar filmes atualmente em cartaz.
* Alimentar o carrossel principal.

---

## Busca de Categorias

Função:

```tsx
async function categoriasFilmes()
```

Endpoint utilizado:

```text
/genre/movie/list
```

Objetivo:

* Buscar categorias disponíveis.
* Filtrar apenas as categorias desejadas.

---

## Carregamento Inicial

```tsx
useEffect(() => {
  lancamentosFilmes();
  categoriasFilmes();
}, []);
```

Executado apenas uma vez ao abrir a tela.

Responsável por:

* Carregar lançamentos.
* Carregar categorias.

---

## Estrutura Visual

### Cabeçalho

```tsx
<Header />
```

Exibe:

* Logo.
* Informações do usuário.
* Navegação principal.

---

### Categorias

```tsx
<ScrollView horizontal>
```

Exibe:

* Ação
* Animação
* Comédia

Em formato horizontal.

---

### Carrossel Principal

```tsx
<Carousel />
```

Configurações:

```tsx
loop={true}
autoPlay={true}
autoPlayInterval={5000}
scrollAnimationDuration={1000}
```

Características:

* Reprodução automática.
* Rolagem infinita.
* Destaque visual para lançamentos.

---

### Seções Temáticas

Renderizadas dinamicamente:

```tsx
<SectionTema
  categoria={element.id}
  nome={element.name}
/>
```

Objetivo:

* Organizar filmes por gênero.

---

### Carrossel Animado

```tsx
<AnimarCard />
```

Exibe filmes com animações personalizadas.

---

## Fluxo da Tela

```text
Abrir Aplicativo
        │
        ▼
     Home
        │
        ├── Carrega Categorias
        │
        ├── Carrega Filmes em Cartaz
        │
        ├── Exibe Categorias
        │
        ├── Exibe Carrossel Principal
        │
        ├── Exibe Seções Temáticas
        │
        ├── Exibe Carrossel Animado
        │
        ▼
   Detalhes do Filme
```

---

## Endpoints Utilizados

### Filmes em Cartaz

```http
GET /movie/now_playing
```

---

### Categorias

```http
GET /genre/movie/list
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

### Espaçamento das Categorias

```tsx
gap: 5
```

---

### Espaçamento do Conteúdo

```tsx
paddingTop: 10
paddingBottom: 30
```

---


## Observações

A Home é a principal porta de entrada do aplicativo, reunindo conteúdos em destaque, categorias e listas temáticas para facilitar a descoberta de filmes pelo usuário.
