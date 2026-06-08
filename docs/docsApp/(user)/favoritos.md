# Tela de Favoritos

## Descrição

A tela de Favoritos é responsável por exibir todos os filmes que foram adicionados aos favoritos pelo usuário autenticado.

Através desta tela o usuário pode:

* Visualizar seus filmes favoritos.
* Navegar para os detalhes de cada filme.
* Retornar para a tela anterior.
* Ver apenas os filmes vinculados à sua conta.

---

## Arquivo

```text
app/(user)/favoritos.tsx
```

---

## Objetivos

* Exibir a lista de filmes favoritados pelo usuário.
* Buscar os favoritos armazenados no backend.
* Consultar os detalhes dos filmes na API TMDB.
* Impedir acesso sem autenticação.
* Permitir navegação para detalhes dos filmes.

---

## Dependências

### Expo Router

```tsx
import { router, Stack } from "expo-router";
```

Responsável por:

* Navegação entre telas.
* Configuração do cabeçalho.
* Retorno para tela anterior.

---

### Context API

```tsx
import { AuthContext } from "@/src/contexts/userContexts";
```

Responsável por:

* Disponibilizar os dados do usuário autenticado.
* Identificar quais favoritos pertencem ao usuário.

---

### API de Filmes (Back-end)

```tsx
import apiFilmes from "@/src/services/apiFilmes";
```

Responsável por:

* Buscar a lista de favoritos cadastrados.

Endpoint utilizado:

```http
GET /favoritos/listFavoritosUsuario/{usuarioId}
```

---

### API TMDB

```tsx
import api from "@/src/services/api";
```

Responsável por:

* Buscar os dados completos de cada filme.

Endpoint utilizado:

```http
GET /movie/{id}
```

---

### Cartaz Component

```tsx
import Cartaz from "@/src/components/cartaz";
```

Responsável por:

* Exibir o pôster do filme.
* Navegar para a tela de detalhes.

---

### Safe Area

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
```

Responsável por respeitar áreas seguras do dispositivo.

---

### Ionicons

```tsx
import { Ionicons } from "@expo/vector-icons";
```

Responsável pelos ícones da interface.

---

## Controle de Autenticação

Ao carregar a tela é realizada uma validação:

```tsx
useEffect(() => {
  if (!usuario) {
    router.replace("/");
  }
}, [usuario]);
```

Objetivo:

* Impedir acesso sem login.
* Retornar automaticamente para a tela de autenticação.

---

## Tipagens Utilizadas

### Categoria

```ts
type Categoria = {
  id: number;
  name: string;
};
```

---

### Favoritos

```ts
type Favoritos = {
  id: string;
  filmeId: string;
  usuarioId: string;
  dataCriacao: string;
  dataAtualizacao: string;
};
```

---

## Busca dos Favoritos

Função responsável por buscar os favoritos do usuário:

```tsx
async function BuscarListaFavoritos()
```

Fluxo:

1. Consulta os favoritos no backend.
2. Recebe a lista contendo os IDs dos filmes.
3. Busca os detalhes de cada filme na TMDB.
4. Armazena os filmes no estado da tela.

---

### Endpoint

```http
GET /favoritos/listFavoritosUsuario/{usuarioId}
```

Resposta esperada:

```json
[
  {
    "id": "1",
    "filmeId": "550",
    "usuarioId": "123"
  }
]
```

---

## Busca dos Dados do Filme

Função:

```tsx
async function BuscarFilme(id: string)
```

Responsável por:

* Consultar o TMDB.
* Retornar os dados completos do filme.

Exemplo:

```http
GET /movie/550
```

---

## Carregamento Inicial

Ao abrir a tela:

```tsx
useEffect(() => {
  BuscarListaFavoritos().then(() => setLoading(false));
}, []);
```

Fluxo:

```text
Tela Carrega
      │
      ▼
Busca Favoritos
      │
      ▼
Busca Filmes na TMDB
      │
      ▼
Atualiza Estado
      │
      ▼
Renderiza Lista
```

---

## Indicador de Carregamento

Enquanto os dados estão sendo carregados:

```tsx
<ActivityIndicator
  size="large"
  color="#fff"
/>
```

Objetivo:

* Melhorar experiência do usuário.
* Indicar carregamento da tela.

---

## Navegação

### Voltar

Botão:

```tsx
router.back()
```

Responsável por:

* Retornar para a tela anterior.

---

## Exibição dos Filmes

A renderização ocorre através do componente:

```tsx
<Cartaz
  key={filme.id}
  filme={filme}
/>
```

Responsabilidades:

* Exibir imagem do filme.
* Exibir título.
* Navegar para detalhes.

---

## Estrutura da Tela

```text
Favoritos
    │
    ▼
Busca Favoritos
    │
    ▼
Busca Filmes
    │
    ▼
Lista de Cartazes
    │
    ├── Filme 1
    ├── Filme 2
    ├── Filme 3
    └── Filme N
```

---

## Cabeçalho

Configuração:

```tsx
<Stack.Screen />
```

Características:

* Transparente.
* Título "Favoritos".
* Botão de voltar personalizado.
* Ícones brancos.

---

## Estilos Utilizados

### Cor Principal

```text
#030d16
```

---

### Cor dos Títulos

```text
#FFFFFF
```

---

### Cor dos Ícones

```text
#FFFFFF
```

---

### Cor do Loading

```text
#FFFFFF
```

---

## Melhorias Futuras

* Remover favoritos diretamente da tela.
* Ordenação por nome.
* Ordenação por avaliação.
* Filtro por gênero.
* Busca por título.
* Paginação dos resultados.
* Atualização automática ao remover favorito.
* Sincronização offline.

---

## Fluxo Geral

```text
Usuário Logado
       │
       ▼
Tela Favoritos
       │
       ▼
Consulta Backend
       │
       ▼
Obtém IDs Favoritos
       │
       ▼
Consulta TMDB
       │
       ▼
Obtém Dados dos Filmes
       │
       ▼
Exibe Cartazes
       │
       ▼
Abre Detalhes do Filme
```

---

## Observações

A tela de Favoritos atua como uma biblioteca pessoal do usuário, exibindo todos os filmes previamente marcados como favoritos. Ela integra dados do backend da aplicação com informações detalhadas obtidas diretamente da API do TMDB.
