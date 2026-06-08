# Serviço API TMDB

## Descrição

O serviço `api` é responsável por centralizar todas as requisições HTTP realizadas para a API do TMDB (The Movie Database).

Ele utiliza a biblioteca Axios para criar uma instância configurada com URL base, timeout, cabeçalhos padrão e autenticação via Bearer Token.

Através deste serviço, toda a aplicação realiza consultas de filmes, categorias, detalhes, pesquisas e demais informações disponibilizadas pelo TMDB.

---

## Arquivo

```text
src/services/api.ts
```

---

## Objetivos

* Centralizar as requisições para o TMDB.
* Evitar repetição de configurações.
* Padronizar autenticação.
* Facilitar manutenção do projeto.
* Melhorar organização do código.
* Fornecer uma única instância HTTP para toda a aplicação.

---

## Dependências

### Axios

```tsx
import axios from "axios";
```

Responsável por:

* Realizar requisições HTTP.
* Gerenciar respostas da API.
* Configurar cabeçalhos globais.
* Controlar timeout das requisições.

---

## Instância da API

### Criação

```tsx
const api = axios.create({
  ...
});
```

Responsável por:

* Criar uma instância personalizada do Axios.
* Aplicar configurações globais.

---

## URL Base

```tsx
baseURL:
"https://api.themoviedb.org/3"
```

Responsável por:

* Definir o endereço principal da API TMDB.
* Evitar repetição da URL em todas as chamadas.

---

## Timeout

```tsx
timeout: 5000
```

Responsável por:

* Limitar o tempo máximo de espera da requisição.

Valor:

```text
5000 ms
```

Equivalente a:

```text
5 segundos
```

---

## Cabeçalhos

### Content-Type

```tsx
"Content-Type":
"application/json"
```

Responsável por:

* Informar que os dados trafegam em formato JSON.

---

### Authorization

```tsx
Authorization:
"Bearer TOKEN"
```

Responsável por:

* Autenticar a aplicação junto ao TMDB.
* Permitir acesso aos endpoints protegidos.

---

## Exportação

```tsx
export default api;
```

Responsável por:

* Disponibilizar a instância para toda a aplicação.

---

## Utilização

### Buscar Categorias

```tsx
const resposta =
  await api.get(
    "/genre/movie/list"
  );
```

---

### Buscar Filmes

```tsx
const resposta =
  await api.get(
    "/discover/movie"
  );
```

---

### Buscar Detalhes

```tsx
const resposta =
  await api.get(
    `/movie/${id}`
  );
```

---

### Pesquisar Filmes

```tsx
const resposta =
  await api.get(
    "/search/movie"
  );
```

---

### Buscar Lançamentos

```tsx
const resposta =
  await api.get(
    "/movie/now_playing"
  );
```

---

## Principais Endpoints Utilizados

### Categorias

```text
/genre/movie/list
```

Retorna:

* Lista de gêneros.

---

### Filmes por Categoria

```text
/discover/movie
```

Retorna:

* Filmes filtrados por categoria.

---

### Detalhes do Filme

```text
/movie/{id}
```

Retorna:

* Informações completas do filme.

---

### Pesquisa

```text
/search/movie
```

Retorna:

* Filmes encontrados pelo texto pesquisado.

---

### Lançamentos

```text
/movie/now_playing
```

Retorna:

* Filmes atualmente em cartaz.

---

## Fluxo do Serviço

```text
Componente
      │
      ▼
Chama api.get()
      │
      ▼
Axios
      │
      ▼
TMDB API
      │
      ▼
Resposta JSON
      │
      ▼
Componente Atualiza Estado
      │
      ▼
Renderização da Interface
```

---

## Estrutura Geral

```text
Aplicação
      │
      ▼
api.ts
      │
      ▼
Axios
      │
      ▼
TMDB API
      │
      ▼
Dados dos Filmes
```

---

## Configurações Atuais

### Base URL

```text
https://api.themoviedb.org/3
```

---

### Timeout

```text
5000 ms
```

---

### Formato

```text
application/json
```

---

### Autenticação

```text
Bearer Token
```

---


## Observações

O serviço `api` é a principal camada de comunicação da aplicação com o TMDB. Todas as funcionalidades relacionadas a filmes, categorias, pesquisas, lançamentos e detalhes dependem desta instância. Centralizar essa configuração garante maior organização, segurança e facilidade de manutenção do projeto.