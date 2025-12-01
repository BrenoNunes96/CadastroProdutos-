import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Perfil (){















    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    const [mostrar,setMostrar]=useState([])
    const [quantidades,setQuantidades]=useState([])
     const navigator = useNavigate()

const quantidade = async () =>{

try{
const res = await fetch("http://localhost:3000/alunos/quantidade",{
method:"GET",
headers:{
  "Content-Type":"application/json"
}


})
const data = await res.json()
console.log(data[0])
if(data !=='error'){
  setQuantidades(data)
}

}catch(error){
  console.error(error)
}


}

const Perfilz = async ()=>{

try{
   const enviar = {email,senha}
const res1 = await fetch("http://localhost:3000/alunos/login",{      // requisiçao para login
method:"POST",
headers:{
    "Content-Type":'application/json'

},
body:JSON.stringify(enviar)     // enviamos email e senha


})

const data = await res1.json()     //retorno de login o token

console.log(data)
if(data){
   // tokenRR é o  token que foi guardado quando se faz login

    const res2= await fetch("http://localhost:3000/alunos/me",{
        method:"GET",
       headers:{
  "Authorization":data
}





    })
 const data1 = await res2.json()  //RESPOSTA DA ROTA NO BACK 'me'
 console.log(data1)
if(data1 !== "nao valido"){
 localStorage.setItem("tokenRR",data)
  const tokezin = localStorage.getItem("tokenRR")
 console.log(tokezin)
 setMostrar(data1)
}}
  }catch(error){
    console.error(error)
  }
  
  


    }
    const log = ()=>{
    localStorage.removeItem("tokenRR")
    console.log('TOKEN REMOVIDO SESSAO EXPIRADA')
    navigator("/logins")

    }



return(
    <div>
        <input onChange={(e)=>setEmail(e.target.value)}placeholder="email"/>
        <input onChange={(e)=>setSenha(e.target.value)} placeholder="senha"  />
        <h1>Bem vindo ao Perfil!</h1>
      <h1>veja por id</h1>
   
        <button onClick={Perfilz} >clique aqui</button>
        <button onClick={log}> LOG-OUT</button>
        <button onClick={quantidade}>veja a quantidade de usuarios</button>
        {mostrar.map(x=> <li key={x.id}>NOME {x.nome} EMAIL {x.email}</li>)}
        {quantidades.map(x=> <li key={x}>{x.TOTAL}</li> )}
    </div>
)


}
export default Perfil;