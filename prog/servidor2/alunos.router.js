const express = require("express");
const router = express.Router()
const alunosController=require("./alunos.controller")
const protegido = require('./alunos.middlware')
 
router.post("/banco",alunosController.registrado);

router.post('/login',alunosController.login)


module.exports = router;