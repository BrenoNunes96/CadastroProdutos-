const express = require("express")
const router = express.Router()
const conexao = require("./db")
const { route } = require("./alunos")

router.get("/:id",(req,res)=>{
const sql = "SELECT * FROM alunos WHERE id = ?"
const cliente = parseInt(req.params.id)
conexao.query(sql,[cliente],(error,resultado)=>{

res.json(resultado)




})


router.get("/cachorro",(req,res)=>{

    res.json('au au')


})

router.get("/gato",(req,res)=>{


res.json("miau")



})




})





module.exports = router