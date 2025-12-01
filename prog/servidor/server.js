const express = require("express");
const app = express();
let usuarios = require("./usuarios");

app.use(express.json()); // permite ler JSON
app.use("/usuarios", usuarios); // rota principal

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
