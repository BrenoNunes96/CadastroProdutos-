const express = require("express")
const router = express.Router()
const conexao = require("./db")
const jwt = require("jsonwebtoken")
const SECRETKEY = "7c1cadb6887373dacb595c47166bfbd9"


router.delete("/:id",(req,res)=>{
const sql = "DELETE FROM Produtos WHERE id = ?"
const id = req.params
conexao.query(sql,[id],(error,results)=>{

res.json(results)

})




})


    const AUTHENTIC =(req,res,next)=>{
   const token = req.headers['authorization']
   if(token){
jwt.verify(token,SECRETKEY,(error,resultado)=>{

if(error){
    res.json('error')
}
if(resultado){
    next()

}


})

   }}




router.post("/autenticacao",(req,res)=>{

const sql122 = "SELECT nome,categoria FROM Produtos"
const cliente = req.body
conexao.query(sql122,[cliente.nome,cliente.categoria],(error,resultaxo)=>{
    const resultasx = resultaxo.find(x =>(x.categoria === cliente.categoria))
    if(resultasx){
        const token = jwt.sign({nome:resultasx.cliente},SECRETKEY,{expiresIn:"1h"})
        res.json(token)
    }





    })

})






router.get("/",AUTHENTIC,(req,res)=>{

const sql = "SELECT * FROM Produtos"
conexao.query(sql,(error,results)=>{

res.json(results)


})


})





const AUTENTICAR = (req,res,next)=>{
const token = req.body
router.get("/",(req,res)=>{
const sql = "SELECT * FROM Produtos"
if(token.nome === sql.nome && token.preco === sql.preco,token.estoque === sql.estoque,token.categoria === sql.categoria){
res.json("ATUALIZADO")


}else{
    res.json('ERROR')
}


})



}


router.post("/produtos",(req,res)=>{
const sql = "INSERT INTO Produtos(nome,preco,estoque,categoria) VALUES(?,?,?,?)"
const cliente =req.body

conexao.query(sql,[cliente.nome,cliente.preco,cliente.estoque,cliente.categoria],(error,resultado)=>{

if(error){
    res.status(400).json('400 Bad Request')
    console.log("Recebido:", req.body)

}else{

    res.status(201).json(resultado)
}






})
})

router.put("/atualizar",(req,res)=>{

const sql2 ="UPDATE Produtos SET nome=?,preco=?,estoque=?,categoria=? WHERE id =?"
const cliente = req.body
conexao.query(sql2,[cliente.nome,cliente.preco,cliente.estoque,cliente.categoria,cliente.id],(error,result2)=>{

if(error){
    res.status(404).json("error")

}else{
    res.json('atualizou!!')
}




})





})



module.exports = router