# Contexto de Autenticação

## Descrição

O contexto `AuthContext` é responsável por armazenar e disponibilizar globalmente os dados do usuário autenticado dentro da aplicação.

Ele permite que qualquer componente tenha acesso às informações do usuário logado e também possa atualizar ou remover os dados da sessão.

---

## Arquivo

```text
src/contexts/userContexts.tsx
```

---

## Objetivos

* Centralizar os dados do usuário autenticado.
* Compartilhar informações de autenticação entre telas.
* Permitir atualização global dos dados do usuário.
* Evitar passagem de propriedades entre múltiplos componentes.
* Gerenciar o estado de login da aplicação.

---

## Tipagem do Usuário

### User

```ts
export type User = {
  id: string;
  nome: string;
  email: string;
};
```

Representa os dados básicos do usuário autenticado.

---

### id

Tipo:

```ts
string
```

Descrição:

Identificador único do usuário.

---

### nome

Tipo:

```ts
string
```

Descrição:

Nome do usuário autenticado.

---

### email

Tipo:

```ts
string
```

Descrição:

E-mail utilizado pelo usuário.

---

## Estrutura do Contexto

### AuthContextData

```ts
type AuthContextData = {
  usuario: User | null;
  setUsuario: React.Dispatch<
    React.SetStateAction<User | null>
  >;
};
```

Define os dados compartilhados pelo contexto.

---

### usuario

Tipo:

```ts
User | null
```

Descrição:

Armazena o usuário autenticado.

Valores possíveis:

```ts
User
```

Usuário autenticado.

```ts
null
```

Nenhum usuário autenticado.

---

### setUsuario

Tipo:

```ts
React.Dispatch<
  React.SetStateAction<User | null>
>
```

Descrição:

Função utilizada para atualizar o usuário armazenado no contexto.

---

## Dependências

### React

```tsx
import { createContext, useState } from "react";
```

Responsável por:

* Criar o contexto global.
* Gerenciar estados.
* Compartilhar informações entre componentes.

---

## Contexto Criado

### AuthContext

```tsx
export const AuthContext =
  createContext<AuthContextData>(
    {} as AuthContextData
  );
```

Responsável por:

* Disponibilizar os dados do usuário para toda a aplicação.
* Permitir acesso através do hook:

```tsx
useContext(AuthContext)
```

---

## Provider

### AuthProvider

```tsx
export function AuthProvider({
  children,
}: AuthProviderProps)
```

Responsável por:

* Envolver toda a aplicação.
* Disponibilizar o contexto global.
* Compartilhar os dados de autenticação.

---

## Props do Provider

### AuthProviderProps

```ts
type AuthProviderProps = {
  children: React.ReactNode;
};
```

---

### children

Tipo:

```ts
React.ReactNode
```

Descrição:

Componentes que terão acesso ao contexto de autenticação.

---

## Estado Utilizado

### usuario

```tsx
const [usuario, setUsuario] =
  useState<User | null>(null);
```

Responsável por:

* Armazenar o usuário autenticado.
* Atualizar os dados da sessão.

Estado inicial:

```ts
null
```

---

## Provider Retornado

```tsx
<AuthContext.Provider
  value={{
    usuario,
    setUsuario,
  }}
>
  {children}
</AuthContext.Provider>
```

Responsável por:

* Compartilhar os dados da autenticação.
* Disponibilizar funções de atualização.

---

## Utilização

### Acessar Usuário

```tsx
const { usuario } =
  useContext(AuthContext);
```

---

### Atualizar Usuário

```tsx
const { setUsuario } =
  useContext(AuthContext);

setUsuario({
  id: "1",
  nome: "João",
  email: "joao@email.com",
});
```

---

### Logout

```tsx
setUsuario(null);
```

Responsável por:

* Encerrar a sessão.
* Remover os dados do usuário.

---

## Fluxo do Contexto

```text
Aplicação Inicia
        │
        ▼
AuthProvider
        │
        ▼
Usuário Realiza Login
        │
        ▼
setUsuario()
        │
        ▼
Dados Salvos
        │
        ▼
Contexto Atualizado
        │
        ▼
Telas Consomem Dados
        │
        ▼
Logout
        │
        ▼
setUsuario(null)
```

---

## Exemplo de Login

```tsx
setUsuario({
  id: "10",
  nome: "Maria",
  email: "maria@email.com",
});
```

Resultado:

```ts
usuario = {
  id: "10",
  nome: "Maria",
  email: "maria@email.com",
}
```

---

## Exemplo de Logout

```tsx
setUsuario(null);
```

Resultado:

```ts
usuario = null
```

---

## Estrutura Geral

```text
AuthProvider
      │
      ▼
AuthContext
      │
      ▼
Usuário
      │
      ├── id
      ├── nome
      └── email
      │
      ▼
Componentes da Aplicação
```

---

## Observações

O `AuthContext` é a base do sistema de autenticação da aplicação. Ele centraliza os dados do usuário logado e permite que qualquer tela ou componente tenha acesso imediato às informações da sessão, facilitando o controle de autenticação, login, logout e proteção de rotas.