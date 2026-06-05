# Tela de Login

## Descrição

A tela de Login é responsável por autenticar o usuário no sistema CineFlix. Após a validação das credenciais junto ao backend, o usuário é redirecionado para a área principal da aplicação.

---

## Arquivo

```text
app/index.tsx
```

---

## Objetivos

* Permitir autenticação do usuário.
* Validar campos obrigatórios.
* Armazenar os dados do usuário no contexto global da aplicação.
* Redirecionar para a tela principal após login bem-sucedido.
* Disponibilizar acesso à tela de cadastro.
* Disponibilizar recuperação de senha.

---

## Dependências

### React

```tsx
useState
useContext
```

### Expo

```tsx
expo-router
expo-linear-gradient
```

### React Native

```tsx
Alert
Image
TextInput
TouchableOpacity
```

### Contexto

```tsx
AuthContext
```

### Serviço

```tsx
apiFilmes
```

---

## Estados Utilizados

| Estado | Tipo   | Descrição                     |
| ------ | ------ | ----------------------------- |
| email  | string | E-mail informado pelo usuário |
| senha  | string | Senha informada pelo usuário  |

---

## Contexto Utilizado

### AuthContext

Responsável por armazenar os dados do usuário autenticado.

```tsx
const { usuario, setUsuario } = useContext(AuthContext);
```

### Estrutura do Usuário

```tsx
type User = {
  id: string;
  nome: string;
  email: string;
}
```

---

## Fluxo de Login

### 1. Usuário informa

* E-mail
* Senha

### 2. Validação

Verifica se os campos foram preenchidos.

```tsx
if (!email || !senha)
```

Caso contrário:

```text
Preencha todos os campos.
```

---

### 3. Requisição

Endpoint:

```http
POST /user/login
```

Body:

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

---

### 4. Resposta Esperada

```json
{
  "id": "684e7f5c1a",
  "nome": "Junior",
  "email": "usuario@email.com"
}
```

---

### 5. Armazenamento no Context

```tsx
setUsuario({
  id: reposta.data.id,
  nome: reposta.data.nome,
  email: reposta.data.email,
});
```

---

### 6. Navegação

Após autenticação:

```tsx
router.push("/(tabs)");
```

---

## Ações Disponíveis

### Entrar

Executa:

```tsx
fazerLogin()
```

Responsável por autenticar o usuário.

---

### Esqueci Minha Senha

Executa:

```tsx
recuperarSenha()
```

Atualmente exibe:

```text
Recuperação de Senha
```

---

### Criar Conta

Executa:

```tsx
cadastrar()
```

Navega para:

```tsx
/cadastroUser
```

---

## Componentes Visuais

### Logo

```tsx
<Image
  source={require("../assets/images/icone-filme.png")}
/>
```

---

### Campos

* E-mail
* Senha

---

### Botões

* Entrar
* Criar Conta

---

### Links

* Esqueci minha senha

---

## Layout

### Cor de Fundo

Gradiente:

```tsx
#173046
#08131d
#030d16
```

---

## Tratamento de Erros

### Campos Vazios

Mensagem:

```text
Preencha todos os campos.
```

### Login Inválido

Mensagem:

```text
E-mail ou senha inválidos.
```

---

## Fluxograma

```text
Usuário
   │
   ▼
Tela Login
   │
   ├── Entrar
   │      │
   │      ▼
   │   POST /user/login
   │      │
   │      ▼
   │   Sucesso
   │      │
   │      ▼
   │   Home (Tabs)
   │
   ├── Criar Conta
   │      │
   │      ▼
   │   Cadastro
   │
   └── Esqueci Senha
          │
          ▼
     Recuperação
```

---
