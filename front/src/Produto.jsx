
import { useState } from "react"

function Produto (){
const [nome,setNome]=useState("")
const[preco,setPreco]=useState('')
const[estoque,setEstoque]=useState('')
const[categoria,setCategoria]=useState("")
const [enviou,setEnviou]=useState([])
const[token,setToken]=useState("")

const enviar ={nome:nome,
    preco:preco,
    estoque:estoque,
    categoria:categoria}





    

const enviado = async ()=>{
 


try{


const res= await fetch("http://localhost:3000/produtos/produtos",{
method:'POST',
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(enviar)



})
console.log(enviar)
const data = await res.json()

console.log(data)   
localStorage.setItem("produto1",data)








const res4 = await fetch("http://localhost:3000/produtos",{
method:"GET",
headers:{
    "Content-Type":"application/json"
}


})
const data2 =await res4.json()
setEnviou(data2)


}catch(error){
    console.log(error)
}



let convertpreco= parseInt(preco)
let estoqueconvert = parseInt(estoque)
setEstoque(estoqueconvert)
setPreco(convertpreco)

alert(nome)
alert(preco)
alert(estoque)
alert(categoria)
 if(nome ===' ' || preco <= 0 || estoque < 0 || categoria ===" "){
    alert("preencha os campos")
    } if ( categoria==='bebida'|| categoria==='eletronico'||categoria === "ferramenta" || categoria ==="comida"){
        alert('categoria correta')
    }else{
        alert('categoria incorreta')
    }  

}


const deletar =async(y)=>{
const deletardos = enviou.filter(x=>x.id !== y)
setEnviou(deletardos)
try{
    const res = await fetch(`http://localhost:3000/produtos/deletar/${y}`,{
method:'DELETE',
headers:{
    "Content-Type":"application/json"
},


    })
const data = await res.json()
console.log(data)

}catch(error){
    console.log(error)
}

}




const atualizar=async(x)=>{

let enviados = {nome:nome,preco:preco,estoque:estoque,categoria:categoria,id:x}

try{


  const res2 = await fetch("http://localhost:3000/produtos/atualizar",{

method:"PUT",
headers:{
"Content-Type":"application/json"


},
body:JSON.stringify(enviados)



  })
  const data2 = await res2.json()
  console.log(data2)
}catch(error){
    console.error(error)
}



}

const autenticar = async()=>{
    let enviadosss = {nome:nome,categoria:categoria}
try{
    const res = await fetch("http://localhost:3000/produtos/autenticacao",{
method:'POST',
headers:{
    'Content-Type':"application/json"

},
body:JSON.stringify(enviadosss)




    })
    const data =await res.json()
    console.log(data)
    setToken(data)
    localStorage.setItem("tokenz",data)

const resEnviarauthetic = await fetch("http://localhost:3000/produtos",{
method:"GET",
headers:{
  "Content-Type":"application/json",
  'Authorization': data
}



})
const datas = await resEnviarauthetic.json()
console.log(datas)

}catch(error){
    console.log(error)
}

}











return(
<div>
    <p>
        nome
    </p>
<input type="text"  placeholder="nome"  onChange={(e)=>setNome(e.target.value)} />
<p>preco</p>
<input type="text"placeholder="preco" onChange={(e)=>setPreco(e.target.value)} />
<p>estoque</p>
<input type="text" placeholder="estoque" onChange={(e)=>setEstoque(e.target.value)} />
<input type="text" placeholder="categoria"onChange={(e)=>setCategoria(e.target.value)} />
<button onClick={autenticar}>autenticar</button>
<button onClick={enviado}>enviar</button>
<div>{enviou.map(x=><li key={x.id}> <button onClick={()=>atualizar(x.id)}>atualizar</button><button onClick={()=>deletar(x.id)}>deletar</button> nome {x.nome} preco {x.preco} 
    estoque   {x.estoque} categoria {x.categoria} </li>) }</div>
</div>

)



}
export default Produto