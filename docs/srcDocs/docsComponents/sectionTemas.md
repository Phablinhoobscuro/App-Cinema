# Componente SectionTema

## Descrição

O componente `SectionTema` é responsável por exibir uma seção de filmes baseada em uma categoria específica.

Os filmes são carregados através da API do TMDB e exibidos horizontalmente utilizando o componente `Cartaz`.

---

## Arquivo

```text
src/components/sectionTemas.tsx
```

---

## Objetivos

* Buscar filmes de uma categoria.
* Exibir filmes em formato horizontal.
* Organizar filmes por tema.
* Reutilizar a mesma estrutura para diferentes categorias.

---

## Props

### Interface

```ts
type Props = {
  categoria?: number;
  nome: string;
}
```

---

### categoria

Tipo:

```ts
number
```

Descrição:

ID da categoria utilizada para buscar os filmes.

---

### nome

Tipo:

```ts
string
```

Descrição:

Nome exibido como título da seção.

---

## Dependências

### API

```tsx
import api from "../services/api";
```

Responsável por:

* Buscar filmes da categoria.

---

### Cartaz

```tsx
import Cartaz from "./cartaz";
```

Responsável por:

* Exibir o cartaz individual de cada filme.

---

### React Hooks

```tsx
import { useEffect, useState } from "react";
```

Responsável por:

* Gerenciar estados.
* Executar carregamento inicial.

---

## Estados Utilizados

### filmes

```tsx
const [filmes, setFilmes] = useState<Filme[]>([]);
```

Responsável por armazenar a lista de filmes retornada pela API.

---

## Funções

### buscarFilmes()

```tsx
async function buscarFilmes()
```

Responsável por:

* Consultar filmes da categoria selecionada.
* Atualizar o estado da lista de filmes.

Endpoint utilizado:

```text
/discover/movie
```

Parâmetros enviados:

```ts
{
  with_genres: categoria,
  language: "pt-BR"
}
```

---

## Estrutura Visual

### Título da Categoria

```tsx
<Text>{nome}</Text>
```

Responsável por exibir o nome da categoria.

---

### Lista Horizontal

```tsx
<ScrollView horizontal />
```

Responsável por permitir a navegação lateral entre os filmes.

---

### Cartazes

```tsx
<Cartaz />
```

Responsável por exibir cada filme da categoria.

---

## Fluxo do Componente

```text
Componente
     │
     ▼
Recebe Categoria
     │
     ▼
Buscar Filmes na API
     │
     ▼
Atualiza Estado
     │
     ▼
Renderiza Cartazes
```

---

## Estilos Utilizados

### Cor Principal

```text
#FFFFFF
```

Utilizada no título da categoria.

---

### Espaçamento

```tsx
marginTop: 20
marginHorizontal: 10
```

Responsável pelo posicionamento da seção.

---

## Melhorias Futuras

* Adicionar loading durante a busca.
* Implementar paginação horizontal.
* Adicionar tratamento visual para erros.
* Implementar cache dos resultados.
* Adicionar botão "Ver Todos".

---

## Observações

O componente foi desenvolvido para ser reutilizado em diversas telas da aplicação, permitindo a exibição de filmes organizados por categorias de forma simples e padronizada.
