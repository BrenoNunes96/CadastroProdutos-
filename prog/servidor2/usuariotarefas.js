

const express = require("express");
const router = express.Router()

const connection = require("./db.js")


router.put("/:id/tarefas",(req,res)=>{
const id = parseInt(req.params.id);
const {id_tarefa} = req.body
const query = "UPDATE usuarios_tarefas SET id_tarefa = ? WHERE id = ?"
connection.query(query,[id_tarefa,id],(error,resultados2)=>{
if(error){

res.json(error)

}

res.json(resultados2)

})





})

router.post("/:id/tarefas",(req,res)=>{

    const id_usuario= parseInt(req.params.id)
const { id_tarefa } = req.body
    const sqls  ="INSERT INTO usuarios_tarefas(id_usuario,id_tarefa) VALUES(?,?)"
connection.query(sqls,[id_usuario,id_tarefa],(error,resultado)=>{

        if (error) return res.status(500).json({ erro: error.message });
        res.json({ sucesso: true, resultado });
});



})


router.delete("/:id/tarefas",(req,res)=>{

const sqlx = "DELETE  FROM usuarios_tarefas WHERE id = ?"
const id = parseInt(req.params.id)
connection.query(sqlx,[id],(error,resultados)=>{
    if(error){

        res.json('esta com erro')
    }
res.json(resultados)




})



})

router.get("/",(req,res)=>{       // mostra o que tem dentro de decricao e titulo
const sqlvizu= "SELECT ut.id_usuario, i.id AS id_tarefa, i.titulo,i.descricao FROM  usuarios_tarefas ut JOIN tarefas i ON ut.id_tarefa =  i.id"
connection.query(sqlvizu,(error,resultado2)=>{

if(error){
    res.json("esta dando error")
}else{
res.json(resultado2)
}


})







}) 
router.get("/maiscaro",(req,res)=>{                // produto maior no id_tarefa pelo node
    let maior = 0
const sqlListar = "SELECT id_tarefa FROM usuarios_tarefas"

connection.query(sqlListar,(error,resultadoListar)=>{

for(let i = 0;i<resultadoListar.length;i++){
if(resultadoListar[i].id_tarefa  > maior ){
maior = resultadoListar[i].id_tarefa

}

}
res.json(`maior id é o ${maior}`)


}
)

})
router.get("/maiscarosql",(req,res)=>{         //ID MAIOR PELO SQL
  
    let screenX = "SELECT MAX(id_tarefa) AS MAIORID FROM usuarios_tarefas"
connection.query(screenX,(error,reulstado2)=>{
res.json(reulstado2)


})


})




module.exports = router;