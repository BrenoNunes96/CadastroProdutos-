const express = require("express")
const router = express.Router()
const conexao = require("./db")
const jwt = require('jsonwebtoken')
const SECRETKEY = "7c1cadb6887373dacb595c47166bfbd9"

const AlunosDAO ={
 registro(cliente){
        const sql1 = "INSERT INTO alunos(nome,email,senha)   VALUES(?,?,?)"
        return new Promise((resolve,reject)=>{

        conexao.query(sql1,[cliente.nome,cliente.email,cliente.senha],(error,resultados)=>{

if(error){
    reject(error)
}
else{

    resolve(resultados)
}


})  })},

login(cliente){
const sql ="SELECT nome, email, senha  FROM alunos WHERE email=? AND senha =?"
return new Promise((resolve,reject)=>{
conexao.query(sql,[cliente.email,cliente.senha],(error,resultado)=>{
if(error){
    reject(error)
}
resolve(resultado)

})






})
}


} 
module.exports = AlunosDAO