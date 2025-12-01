const express = require("express")
const router = express.Router()
const conexao = require("./db")
const jwt = require('jsonwebtoken')
const SECRETKEY = "7c1cadb6887373dacb595c47166bfbd9"


router.get("/quantidade",(req,res)=>{

const sq = "SELECT COUNT (*) as TOTAL FROM alunos"
conexao.query(sq,(error,resultsx)=>{

if(error){
    res.json('error')
}else{
    res.json(resultsx)
}






})





})



router.put("/atualizar",(req,res)=>{

const sql434 ='UPDATE alunos SET nome = ?,email = ?, senha = ? WHERE id=? '

const cliente = req.body
const id = cliente.id
conexao.query(sql434,[cliente.nome,cliente.email,cliente.senha,id],(error,results222)=>{
if(error){
    res.json(error)
}else{
res.json(results222)
}


})






})


router.get("/",(req,res)=>{
const sql = "SELECT * FROM alunos"
conexao.query(sql,(error,resultado)=>{


res.json(resultado)




})




})
const AUTENTICAÇAO = (req,res,next)=>{
    const token = req.headers['authorization']
if(token){
 jwt.verify(token,SECRETKEY,(error,resultado)=>{
if(error){
    res.json('token nao validado')
    

}
else{

   
    req.resultado = resultado

    next()
  
}})
}
}


router.get("/protegido",AUTENTICAÇAO,(req,res)=>{
const sql23 = "SELECT * FROM alunos"
conexao.query(sql23,(error,resultado)=>{

res.json(resultado)




})


    })

    
    router.delete("/deletar",(req,res)=>{
    const sql = "DELETE FROM alunos WHERE id = ?"
    const id  = parseInt(req.body.id)


    conexao.query(sql,[id],(error,resulta6)=>{

    res.json('deletado')



    })





    })

const autenticar =(req,res,next)=>{
    const tokez = req.headers['authorization']
    if(tokez){
       jwt.verify(tokez,SECRETKEY,(error,resultado)=>{
  if(!error){
    next()
   
  }
  


       })
 
}}


router.get("/me",autenticar,(req,res)=>{

const sql = "SELECT * FROM alunos"
conexao.query(sql,(error,results)=>{


res.json(results)





    })





})

//POST, COMPARAR EMAIL E SENHA GERA TOKEN, AUTENTICAÇAO TOKEN, SE O TOKEN TIVER CORRETO PODE VER USUARIOS
router.post("/banco",(req,res)=>{
const sql1 = "INSERT INTO alunos(nome,email,senha)   VALUES(?,?,?)"
const cliente= req.body
conexao.query(sql1,[cliente.nome,cliente.email,cliente.senha],(error,resultados)=>{
if(cliente.nome === " " || cliente.email === " "|| cliente.nome ===" "){
    res.json('error')
}
if(error){
    res.json(error)
}
else{

    res.json(resultados)
}


})
})

router.post("/login",(req,res)=>{              //comparaçao email e senha
const sql = "SELECT email,senha FROM alunos"
const cliente = req.body
conexao.query(sql,(error,resultados2)=>{


const verificar = resultados2.find( y => (y.email === cliente.email, y.senha === cliente.senha))
if(verificar){
    const token = jwt.sign({email:verificar.email,senha:verificar.senha},SECRETKEY,{expiresIn:'1h'})
    res.json(token)





}
else{

    res.json('email e senha nao sao as mesmas')
}






})






})
router.get("/pesquisar",(req,res)=>{

const sql = "SELECT * FROM alunos WHERE nome = ? "
const cliente= req.query
console.log(cliente)

conexao.query(sql,[cliente.nome],(error,results)=>{

if(error){
    res.json(error)
}else{
res.json(results)
}








})





})


module.exports = router



// post , POST JWT.SIGN,JWT.VERIFY({EMAIL:CLIENTE.EMAIL},SECRETKEY:{Expire:'1h'}), MOSTRA A TELA DE ALUNOS








