const express = require("express");
const connection =require('./db.js')
const router = express.Router();













router.get("/total",(req,res)=>{
const sqxa="SELECT * FROM usuarios"
connection.query(sqxa,(error,resultado22)=>{
  let total = 0
  for(let i =0;i<resultado22.length;i++){
 
   total  += resultado22[i].id * resultado22[i].concluido;

}



res.json(total)


})





})




router.get("/ordenados",(req,res)=>{

let ordenador = "SELECT nome FROM usuarios ORDER BY id DESC" 


connection.query(ordenador,(error,resultadozinho)=>{

res.json(resultadozinho)


})


})




router.get("/",(req,res)=>{
const sql = "SELECT * FROM usuarios ";

connection.query(sql,(error,results)=>{
if(error){
    res.json(error.message)
}else{
    res.json(results)
}
} 
)

            // aqui o metodo get req é a resposta que o cliente envia para o servidor, res é o que volta no console
})

//ID
router.get("/:id",(req,res)=>{
                                             // cliente envia o id para req , depois filtra em busca e devolve
let id = parseInt(req.params.id)
let sql2 ="SELECT * FROM usuarios WHERE id = ?"
connection.query(sql2,[id],(erro,results)=>{

if(erro){
  res.json('erro')
}
else{
    res.json(results)
}
})


})




    router.put("/:id",(req,res)=>{        // atualizar dados pelo node em 'curl' para o node js    

    const id = parseInt(req.params.id)
    const cliente = req.body
    const sqlPut= "UPDATE usuarios SET nome = ?,concluido = ? WHERE id =?"
    connection.query(sqlPut,[cliente.nome,cliente.concluido,id],(error,results)=>{ // tem que botar o erro 
  if(cliente.nome){
    res.json("nao podemos atualizar o nome")
  }else{
    res.json(results)
  }
    })


    })





router.post("/registrado",(req,res)=>{
 
let sql1="INSERT INTO usuarios(nome,concluido) VALUES(?,?)"
let aleatorio  = Math.floor(Math.random())
let cliente = req.body
connection.query(sql1,[cliente.nome,cliente.concluido,],(error,registro)=>{
  if(error){


    res.json("erro ao registrar")
  }else{
  res.json(registro

  )
  }


})



})






router.post("/",(req,res)  =>{
    const sql2 = "SELECT nome FROM usuarios" // puxa nomes da tabela usuarios
 const sql3 = "INSERT INTO usuarios(nome,concluido) VALUES(?,?)" // coloque em usuario nome e concluido nos valores que vem do cliente
 const cliente = req.body // onde as informaçoes do cliente vem
 const nomezinho =[]

connection.query(sql2,(erro,results)=>{   //results é o resultado de sql2 

for(let i = 0 ; i<results.length;i++){           // results é um array de obj
if(cliente.nome == results[i].nome){                // se cliente.nome for igual ao  nome em um dos obj do array results
 nomezinho.push(results[i].nome)                      // o nome vai para nomezinho

}}
if(nomezinho.length > 0){                      // se nomezinho tiver tamanho maior que zero
res.json('nome ja existe')                      // o servidor responde o nome ja existe
}else {                                         // se nao é chamado sql3, e os valores vao para sl3  que voltam no results2 
    
connection.query(sql3,[cliente.nome,cliente.concluido],(error,result2)=>{
res.json(result2)

})

} })
})


router.delete("/:id",(req,res)=>{

let sql4 = "DELETE FROM usuarios WHERE id = ?"
let id = parseInt(req.params.id)
connection.query(sql4,[id],(erro,results)=> { 






})


})









module.exports = router;