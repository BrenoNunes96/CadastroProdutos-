const express = require("express") 
const router = express.Router()
const conexao = require("./db.js")


router.get("/categorias",(req,res)=>{
const sql = "SELECT p.id,p.preco,p.nome, c.nome AS categorias FROM produtoss p JOIN categorias c ON p.categoriaId = c.id" 
conexao.query(sql,(erro,resultado)=>{

    if(erro){
    res.json("ERRO")
}
else{
    res.json(resultado)
}


})


})
router.delete("/deletarTarefa",(req,res)=>{
const sql = "DELETE p FROM produtoss p LEFT JOIN categorias c ON p.categoriaId = c.id WHERE p.id = ? "
const cliente = req.body
conexao.query(sql,[cliente.id],(error,resultado)=>{
if (error){
    res.json(error)
}else{
    res.json(resultado)
}




})

})

router.delete("/deletar",(req,res)=>{

const sql = "DELETE c FROM categorias c LEFT JOIN produtoss p ON p.categoriaId = c.id WHERE p.id IS NULL "
conexao.query(sql,(error,resultado)=>{  

if(error){
    res.json(error)
}
else{
    res.json(resultado)
}

})







})




// ALTER TABLE produtoss ADD CONSTRAINT fk_categoria FOREIGN KEY (C)

router.post("/registrar",(req,res)=>{
const sql = "INSERT INTO produtoss(nome,preco,categoriaId) VALUES(?,?,?)"
const cliente= req.body
conexao.query(sql,[cliente.nome,cliente.preco,cliente.categoriaID],(error,resultado)=>{
    if(error){
        res.json('CATEGORIA PODE SER APENAS ROUPA/ELETRONICO')
    }
    res.json(resultado)

})

}

)


router.get("/tarefaespecifica",(req,res)=>{
const cliente = req.query 
const slq = "SELECT p.id,p.nome,p.preco,c.nome AS categorias FROM produtoss p JOIN categorias c ON p.categoriaId = c.id WHERE c.id = ?"
conexao.query(slq,[cliente.id],(erro,resultado)=>{
if(erro){
    res.json(erro)
}else{
    res.json(resultado)
}

})


})







router.get("/search",(req,res)=>{ // se for params é aqui nessa url ("/SEARCH")
const sql = 'SELECT * FROM tarefas  WHERE cidade = ? AND idade =? AND data_cadastro=? AND nome=?' //AND  E QUERY
const cliente =req.query

conexao.query(sql,[cliente.cidade,cliente.idade,cliente.data_cadastro,cliente.nome],(error,resultado)=>{

res.json(resultado)



})





})

module.exports = router;


