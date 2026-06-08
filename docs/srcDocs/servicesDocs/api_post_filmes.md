# Serviço post_Filme

## Descrição

O serviço `post_Filme` é responsável por gerar a URL completa das imagens dos filmes disponibilizadas pela API do TMDB.

Ele recebe o caminho da imagem retornado pela API e concatena com a URL base do servidor de imagens, retornando uma URL pronta para ser utilizada em componentes como `Image` e `ImageBackground`.

---

## Arquivo

```text
src/services/api_post_filem.ts
```

---

## Objetivos

* Padronizar a geração das URLs das imagens.
* Evitar repetição da URL base do TMDB.
* Facilitar a manutenção do projeto.
* Centralizar a lógica de construção das imagens.
* Permitir reutilização em toda a aplicação.

---

## Função

### post_Filme()

```ts
function post_Filme(link: string)
```

Responsável por:

* Receber o caminho da imagem.
* Montar a URL completa.
* Retornar a URL pronta para uso.

---

## Parâmetros

### link

Tipo:

```ts
string
```

Descrição:

Caminho da imagem retornado pela API do TMDB.

Exemplo:

```ts
"/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
```

---

## URL Base

```ts
const baseURL =
  "https://image.tmdb.org/t/p/w500";
```

Responsável por:

* Definir o servidor de imagens do TMDB.
* Utilizar imagens na resolução padrão `w500`.

---

## Retorno

Tipo:

```ts
string
```

Retorna:

```ts
`${baseURL}${link}`
```

Exemplo:

Entrada:

```ts
"/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
```

Saída:

```text
https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg
```

---

## Dependências

Este serviço não possui dependências externas.

---

## Utilização

### Em Image

```tsx
<Image
  source={{
    uri: post_Filme(filme.poster_path),
  }}
/>
```

---

### Em ImageBackground

```tsx
<ImageBackground
  source={{
    uri: post_Filme(filme.backdrop_path),
  }}
/>
```

---

## Fluxo do Serviço

```text
Recebe Caminho
        │
        ▼
link
        │
        ▼
Concatena com
URL Base TMDB
        │
        ▼
Retorna URL
Completa
        │
        ▼
Exibição da Imagem
```

---

## Exemplo de Execução

### Entrada

```ts
post_Filme(
  "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
);
```

---

### Saída

```text
https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
```

---

## Estrutura Geral

```text
TMDB API
    │
    ▼
poster_path
ou
backdrop_path
    │
    ▼
post_Filme()
    │
    ▼
URL Completa
    │
    ▼
Image
ou
ImageBackground
```

---


## Observações

O serviço `post_Filme` é utilizado por diversos componentes da aplicação para exibir pôsteres e banners dos filmes. Sua principal função é centralizar a construção das URLs das imagens do TMDB, reduzindo duplicação de código e facilitando futuras alterações na origem ou tamanho das imagens utilizadas.