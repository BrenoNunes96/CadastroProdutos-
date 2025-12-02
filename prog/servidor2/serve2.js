const express = require("express");
const app = express();
const cors = require("cors")

const usuario = require("./usuario"); // arquivos usados no node
const tarefas  = require("./tarefas");
const alunos = require("./alunos")
const produto = require("./produto")


app.use(express.json()); // para ler JSON

// a rota precisa bater com o curl
app.use(cors({
  methods: ['GET','POST','PUT','DELETE']}))     // para qualquer rota poder usar
app.use("/produtos",produto)
app.use("/alunos",alunos);
app.use("/tarefas",tarefas);
app.use("/usuarios", require("./usuariotarefas"));
app.use("/usuario",usuario)           //APP.USE /alunos é o nome que o front no fetch ira usar 



const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

