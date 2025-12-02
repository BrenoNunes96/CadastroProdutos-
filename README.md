🛒 Sistema de Cadastro de Produtos

Este projeto é um sistema completo de cadastro, listagem, edição e exclusão de produtos, integrando React no front-end, Node.js + Express no back-end e MySQL/MariaDB no banco de dados.

Ele foi desenvolvido com foco em estudos de Fullstack, incluindo rotas REST, fetch API, foreign keys, filtros e autenticação básica.

🚀 Funcionalidades
🔹 Front-end (React)

Cadastro de produtos

Listagem de produtos cadastrados

Botão para excluir produtos

Atualização automática da tela

Uso de fetch para consumo da API

Tarefas renderizadas sem aumentar ou diminuir a tela (scroll controlado)

🔹 Back-end (Node.js + Express)

Rotas REST:

POST /produtos/registrar

GET /produtos

DELETE /produtos/deletar/:id

POST /produtos/autenticacao

Middleware de CORS configurado

Conexão com MySQL usando mysql2

Foreign Key entre:

produtoss.categoriaId

categorias.id

🔹 Banco de Dados (MySQL/MariaDB)

Tabelas:

🟣 categorias
id	nome
🔵 produtoss

| id | nome | preco | categoriaId(FK) |

Relacionamento:

produtoss.categoriaId  →  categorias.id

🔧 Tecnologias Utilizadas
Front-end

React

Hooks (useState, useEffect)

Fetch API

Back-end

Node.js

Express

CORS

mysql2

Banco

MySQL / MariaDB

📦 Como Rodar o Projeto
🟦 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

🟧 2. Configurar o Back-end

Entre na pasta do servidor:

cd server
npm install


Crie um arquivo:

.env


E coloque:

DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=fullstack


Depois:

npm start

🟩 3. Configurar o Front-end
cd client
npm install
npm run dev

🧪 Exemplos de Rotas
POST – Registrar Produto
{
  "nome": "PS5",
  "preco": 5000,
  "categoriaId": 1
}

DELETE – Deletar Produto
DELETE /produtos/deletar/3

GET – Listar Produtos
/produtos

📂 Estrutura de Pastas (sugestão)
/server
  ├─ routes
  ├─ database
  └─ index.js

/client
  ├─ src
  │   ├─ pages
  │   ├─ components
  │   └─ Produto.jsx

🧩 Problemas Resolvidos Durante o Projeto

Erro de CORS ao acessar localhost:5173

Erro Unexpected end of JSON input ao usar .json() sem retorno

Erro Foreign key constraint fails (errno 1452)

Como organizar DELETE, POST, GET corretamente

Como fazer JOIN entre tabelas

Como evitar que a tela aumente com a renderização de tarefas

📜 Licença

Este projeto é livre para estudos e pode ser usado como base para outros sistemas.
