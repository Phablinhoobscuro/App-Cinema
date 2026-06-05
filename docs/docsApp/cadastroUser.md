# Tela de Cadastro de Usuário

## Descrição

A tela de Cadastro de Usuário é responsável por permitir que novos usuários criem uma conta na aplicação CineFlix.

Após o preenchimento dos dados obrigatórios e validação pelo backend, o usuário é redirecionado para a tela de login.

---

## Arquivo

```text
app/cadastroUser.tsx
```

---

## Objetivos

* Permitir o cadastro de novos usuários.
* Validar campos obrigatórios.
* Enviar os dados para o backend.
* Exibir mensagens de sucesso ou erro.
* Redirecionar para a tela de login após o cadastro.

---

## Dependências

### React

```tsx
useState
```

### Expo

```tsx
expo-router
expo-linear-gradient
```

### React Native

```tsx
Alert
TextInput
TouchableOpacity
Text
View
```

### Serviços

```tsx
apiFilmes
```

---

## Estados Utilizados

| Estado | Tipo   | Descrição                |
| ------ | ------ | ------------------------ |
| nome   | string | Nome completo do usuário |
| email  | string | E-mail do usuário        |
| senha  | string | Senha de acesso          |

---

## Fluxo de Cadastro

### 1. Usuário preenche

* Nome Completo
* E-mail
* Senha

---

### 2. Validação

Verifica se todos os campos foram preenchidos.

```tsx
if (!nome || !email || !senha)
```

Mensagem exibida:

```text
Preencha todos os campos.
```

---

### 3. Requisição

Endpoint:

```http
POST /user
```

Body enviado:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

---

### 4. Resposta Esperada

Exemplo:

```json
{
  "id": "684f123456",
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

---

### 5. Cadastro Realizado

Mensagem exibida:

```text
Usuário cadastrado com sucesso!
```

---

### 6. Navegação

Após o cadastro:

```tsx
router.replace("/");
```

O usuário é direcionado para a tela de login.

---

## Tratamento de Erros

Caso o backend retorne um erro:

```tsx
error?.response?.data?.message
```

Será exibido:

```text
Erro ao cadastrar usuário.
```

ou a mensagem específica enviada pela API.

---

## Componentes da Tela

### Campo Nome

```tsx
<TextInput
  placeholder="Nome completo"
/>
```

---

### Campo E-mail

```tsx
<TextInput
  placeholder="E-mail"
/>
```

---

### Campo Senha

```tsx
<TextInput
  placeholder="Senha"
  secureTextEntry
/>
```

---

### Botão Criar Conta

Executa:

```tsx
cadastrar()
```

Responsável por enviar os dados ao backend.

---

### Link Já Possui Conta

Executa:

```tsx
router.back()
```

Retorna para a tela anterior (Login).

---

## Layout

### Cores do Gradiente

```text
#173046
#08131d
#030d16
```

---

### Botão Principal

```text
#1E88E5
```

---

### Links

```text
#5DADE2
```

---

## Fluxograma

```text
Usuário
   │
   ▼
Tela Cadastro
   │
   ▼
Validação Campos
   │
   ├── Inválido
   │      │
   │      ▼
   │  Exibe Erro
   │
   └── Válido
          │
          ▼
      POST /user
          │
          ▼
      Cadastro OK
          │
          ▼
      Tela Login
```

---

## Melhorias Futuras

* Confirmação de senha.
* Validação de força da senha.
* Validação de formato de e-mail.
* Verificação de e-mail já cadastrado.
* Envio de e-mail de confirmação.
* Cadastro com Google.
* Cadastro com Facebook.
* Loading durante o cadastro.
* Máscara e validação em tempo real dos campos.

---

## Observações

Atualmente o cadastro exige apenas:

* Nome
* E-mail
* Senha

Não existe confirmação de senha nem validação avançada no frontend, ficando a responsabilidade das regras adicionais para o backend.
