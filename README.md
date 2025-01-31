# API de negociações

API para gerenciamento de contatos e negociações, com funcionalidades para criação, listagem, busca e movimentação de negociações entre funis.

---

## **Funcionalidades**

- **Contatos**:
  - Criar um novo contato.
  - Listar todos os contatos.
  - Buscar um contato por ID.

- **Negociações**:
  - Criar uma nova negociação.
  - Listar todas as negociações.
  - Buscar uma negociação por ID.
  - Mover uma negociação para outro funil (etapa do processo de vendas).

---

## **Tecnologias utilizadas**

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API.
- **MySQL**: Banco de dados. * schema localizado em /src/database/schema.sql *
- **Postman**: Ferramenta para testar as requisições da API.

---

## **Configuração do ambiente**

### **Pré-requisitos**

- Node.js (v18 ou superior)
- MySQL (atualmente hospedado no phpMyAdmin da Hostinger)
- Postman (opcional, para testar as requisições)

### **Passos para configuração**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/victormdev/api-hubify.git
   cd api-sicredi

2. **Instale as dependências**:
   ```bash
   npm install

3. **Configure o banco de dados**:
- Crie um banco de dados no MySQL (atualmente usando o phpMyAdmin da Hostinger).
- Execute o script SQL fornecido em schema.sql para criar as tabelas e inserir os dados iniciais.


4. **Configure as variáveis de ambiente**:

- Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

   ```bash
    DB_HOST=localhost (193.203.175.79)
    DB_USER=seu_usuario (u244230895_apihubify)
    DB_PASSWORD=sua_senha (Hubify2025@)
    DB_NAME=u244230895_apihubify
    DB_PORT=3306
    PORT=3000

5. **Inicie o servidor**:

   ```bash
   npm start

# Testando a API

Você pode testar a API usando o Postman ou qualquer outra ferramenta de requisições HTTP. Abaixo estão exemplos de requisições para cada funcionalidade.

## Contatos

1. **Criar um contato**:

    - Método: POST

    - URL: http://localhost:3000/api/contacts

    - Body (JSON):
        ```bash
        {
        "name": "Victor Macedo",
        "email": "vmadevops@gmail.com",
        "phone": "71992068839"
        }
    
2. **Listar todos os contatos**:

    - Método: GET
    - URL: http://localhost:3000/api/contacts
    
3. **Buscar contatos pelo ID**:

    - Método: GET
    - URL: http://localhost:3000/api/contacts/1


## Negociações

1. **Criar uma negociação**:

    - Método: POST

    - URL: http://localhost:3000/api/negotiations

    - Body (JSON):
        ```bash
        {
        "title": "Victor - Compra de tráfego",
        "contact_id": 1,
        "funnel_id": 1,
        "value": 2500.00
        }
    
2. **Listar todas as negociações**:

    - Método: GET
    - URL: http://localhost:3000/api/negotiations
    
3. **Buscar negociação pelo ID**:

    - Método: GET
    - URL: http://localhost:3000/api/negotiations/1

4. **Mover negociação pra outro funil**:

    - Método: PATCH

    - URL: http://localhost:3000/api/negotiations/1/move

    - Body (JSON):
        ```bash
        {
        "funnel_id": 4
        }