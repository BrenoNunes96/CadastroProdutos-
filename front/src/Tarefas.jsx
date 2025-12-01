import { useState } from "react"
import "./TarefasStyle.css";
import Lixeira from './lixeira-de-reciclagem.png';

function Tarefa (){
const[nome,setNome]=useState("")
const[preco,setPreco]=useState(0)
const[categoriaid,setCategoria]=useState('')
// para editar colcoar nomes de categoria na tabela use este abaixo
const[nomeCategoria,setNomeCategoria]=useState(0)
const[mostrar,setMostrar]=useState([])



let mudar = 0
const registrarProduto = async()=>{



try{
    if(categoriaid ==='eletronico'){
        mudar = 3
}
if(categoriaid ==="roupa"){
    mudar = 4
}


    let usuario = {nome:nome,preco:preco,categoriaID:mudar}

const res = await fetch("http://localhost:3000/tarefas/registrar",{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(usuario)

})
const data = await res.json()
if(data ==='CATEGORIA PODE SER APENAS ROUPA/ELETRONICO'){
alert(data)

}else{
alert('registrado com sucesso')
}


}catch(error){
    console.log(error)
}

}
// PROXIMA ETAPA É VER O PROBLEMA QUE NAO APARECE AS CATEGORIAS COM OS NOMES





const enviar =async()=>{
try{
const res = await fetch("http://localhost:3000/tarefas/categorias",{
method:"GET",
headers:{
    "Content-Type":"application/json"
}



})
const data = await res.json()
console.log(data)
setMostrar(data)

}catch(error){
    console.log(error)
}



}

const TarefaEspecifica =async(x)=>{
   
    try{
        const res = await fetch(`http://localhost:3000/tarefas/tarefaespecifica?id=${x}`,{
method:"GET",
headers:{
    'Content-Type':"application/json"
}


})
const data = await res.json()
console.log(data)


}catch(error){
console.log(error)
}
}

const deletar = async(x)=>{
let deletar = mostrar.filter((y)=> y.id!==x)
setMostrar(deletar)
    try{
const res = await fetch("http://localhost:3000/tarefas/deletarTarefa",{
method:"DELETE",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({id:x})

})
const data = await res.json()
console.log(data)
    }catch(error){
        console.log(error)
    }
}


return (
<div >
    <div id="fundo">
    <div id="fundonav">
        <div id="inputs"> <p>NOME</p>
         <p>PREÇO</p>
          <p>CATEGORIA</p></div>
       <div id="fundoinputs"   >
     <input type="text" placeholder="" onChange={(e)=>{setNome(e.target.value)}}/>
        <input  placeholder="" onChange={(e)=>{setPreco(e.target.value)}} />
<input type="text" placeholder=""  onChange={(e)=>{setCategoria(e.target.value)}} /> 

       </div>
<div id="fundobotao"> <button onClick={enviar}>Produtos</button>
<button onClick={registrarProduto}> registre seu produto</button></div>

</div>
<div id='fundo2'>{mostrar.map(x=> <div id="fundo4" key={x.id}> <button className="fundobotao" onClick={()=>deletar(x.id)}><img className="botao"src={Lixeira}/></button> <p>NOME</p> <p className="P">{x.nome}</p> <p>PREÇO</p> <p className="P">{x.preco}</p> 
<p  >CATEGORIA</p> <p className="P">{x.categorias}</p> </div>)}
</div>

</div>
</div>
)


}export default Tarefa