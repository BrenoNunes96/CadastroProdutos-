const express = require("express");
const router = express.Router();

// Banco de dados em memória
let usuarios = [
  { id: 1, nome: "Breno", email: "breno@email.com" },
  { id: 2, nome: "Regina", email: "regina@email.com" }
];

// [GET] Listar todos
router.get("/", (req, res) => {
  res.json(usuarios);
});

// [GET] Buscar por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  usuario ? res.json(usuario) : res.status(404).json({ erro: "Usuário não encontrado" });
});

// [POST] Criar novo
router.post("/", (req, res) => {
  const novo = req.body;
  novo.id = usuarios.length + 1;
  usuarios.push(novo);
  res.status(201).json(novo);
});

// [PUT] Atualizar
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

    usuarios[index] = { id, ...req.body };
    res.json(usuarios[index]);
 
});

// [DELETE] Remover
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ mensagem: "Usuário removido com sucesso!" });
});

module.exports = router;
