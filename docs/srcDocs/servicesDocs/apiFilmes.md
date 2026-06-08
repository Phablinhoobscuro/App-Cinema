# Serviço API Backend

## Descrição

O serviço `apiFilmes` é responsável por centralizar todas as requisições HTTP realizadas para o backend da aplicação.

Ele utiliza a biblioteca Axios para criar uma instância personalizada que permite comunicação com a API responsável pelo gerenciamento de usuários, autenticação e favoritos.

Este serviço é utilizado para operações que não são fornecidas pelo TMDB, como cadastro de usuários e gerenciamento de dados próprios da aplicação.

---

## Arquivo

```text
src/services/apiFilmes.ts
```

---

## Objetivos

* Centralizar as requisições para o backend.
* Evitar repetição da URL do servidor.
* Facilitar manutenção da aplicação.
* Padronizar chamadas HTTP.
* Isolar a comunicação com a API própria do sistema.
* Melhorar organização do código.

---

## Dependências

### Axios

```tsx
import axios from "axios";
```

Responsável por:

* Realizar requisições HTTP.
* Consumir endpoints REST.
* Gerenciar respostas da API.
* Facilitar integração com o backend.

---

## Instância da API

### Criação

```tsx
const apiFilmes = axios.create({
  baseURL: "http://localhost:8080",
});
```

Responsável por:

* Criar uma instância personalizada do Axios.
* Definir a URL base do backend.

---

## URL Base

```tsx
baseURL:
"http://localhost:8080"
```

Responsável por:

* Definir o endereço principal da API.
* Evitar repetição da URL em todas as requisições.

---

## Exportação

```tsx
export default apiFilmes;
```

Responsável por:

* Disponibilizar a instância para toda a aplicação.

---

## Utilização

### Cadastro de Usuário

```tsx
await apiFilmes.post(
  "/user",
  {
    nome,
    email,
    senha,
  }
);
```

Responsável por:

* Criar um novo usuário.

---

### Login

```tsx
await apiFilmes.post(
  "/auth/login",
  {
    email,
    senha,
  }
);
```

Responsável por:

* Autenticar um usuário.

---

### Buscar Favoritos

```tsx
await apiFilmes.get(
  `/favoritos/listFavoritosUsuario/${usuario.id}`
);
```

Responsável por:

* Buscar a lista de favoritos do usuário.

---

### Adicionar Favorito

```tsx
await apiFilmes.post(
  "/favoritos",
  dados
);
```

Responsável por:

* Salvar um filme nos favoritos.

---

### Remover Favorito

```tsx
await apiFilmes.delete(
  `/favoritos/${id}`
);
```

Responsável por:

* Excluir um favorito.

---

## Fluxo do Serviço

```text
Componente
      │
      ▼
apiFilmes
      │
      ▼
Axios
      │
      ▼
Backend Spring Boot
      │
      ▼
Banco de Dados
      │
      ▼
Resposta JSON
      │
      ▼
Componente
```

---

## Estrutura Geral

```text
Aplicação React Native
           │
           ▼
      apiFilmes
           │
           ▼
      Axios
           │
           ▼
 Backend (Spring Boot)
           │
           ▼
    Banco de Dados
```

---

## Métodos HTTP Utilizados

### GET

```tsx
apiFilmes.get(...)
```

Responsável por:

* Consultar informações.

---

### POST

```tsx
apiFilmes.post(...)
```

Responsável por:

* Criar novos registros.

---

### PUT

```tsx
apiFilmes.put(...)
```

Responsável por:

* Atualizar informações.

---

### DELETE

```tsx
apiFilmes.delete(...)
```

Responsável por:

* Excluir registros.

---

## Configurações Atuais

### URL Base

```text
http://localhost:8080
```

---

### Framework Backend

```text
Spring Boot
```

---

### Comunicação

```text
REST API
```

---

### Formato de Dados

```text
JSON
```

---

## Observação para Dispositivos Físicos

A URL:

```text
http://localhost:8080
```

funciona apenas quando a aplicação está sendo executada na mesma máquina que hospeda o backend.

Para testes em dispositivos físicos é necessário utilizar:

```text
http://IP_DA_MAQUINA:8080
```

Exemplo:

```text
http://192.168.1.100:8080
```

---

## Melhorias Futuras

* Configuração por ambiente (Desenvolvimento, Homologação e Produção).
* Interceptors para tratamento global de erros.
* Controle automático de autenticação JWT.
* Renovação automática de token.
* Logs centralizados de requisições.
* Timeout personalizado.
* Sistema de cache.
* Monitoramento de falhas de conexão.

---

## Observações

O serviço `apiFilmes` é responsável pela comunicação com o backend próprio da aplicação. Enquanto a API do TMDB fornece informações sobre filmes e categorias, este serviço é utilizado para funcionalidades internas, como autenticação, cadastro de usuários e gerenciamento de favoritos, servindo como ponte entre o aplicativo e o banco de dados do sistema.