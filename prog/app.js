


const { reverse } = require("dns/promises")
const fs = require("fs")


fs.writeFileSync("tarefa.txt",JSON.stringify({tarefas:["aprender trilha do google cloud","aprender fullstack"]}),null,2)
const ler = fs.readFileSync("tarefa.txt","utf8")
const transform = JSON.parse(ler).tarefas
console.log(ler)
transform.push("aprendendo a viver")
transform.unshift('aprendendo sql')


let quantidade = 0


for(let x of transform){
    quantidade ++

}
console.log(quantidade)



const AdicionarTarefa = (n)=>{
    transform.push(n)
}

const RemoverTarefa = (x)=>{


transform.splice(x,1)



}

RemoverTarefa(0)
fs.writeFileSync("tarefa.txt",JSON.stringify({tarefasNovas:transform}))
let lendo = fs.readFileSync("tarefa.txt","utf-8")
console.log(lendo)

