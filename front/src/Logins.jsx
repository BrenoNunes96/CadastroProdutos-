import { useNavigate} from "react-router-dom";
import { useState } from "react"

function Logins (){
const navigate = useNavigate()
const[email,setEmail]= useState('')
const[senha,setSenha]= useState("")
const [tokezin,setTokezin]=useState([])


const deletar = async (x)=> {                                   // botao para deletar alunos

try{
const res4 = await fetch('http://localhost:3000/alunos/deletar',{  // faz requisipçao para rota alunos/deletar
  method:'DELETE',                                                 
  headers:{
    "Content-Type":"application/json"

  },
  
  body:JSON.stringify({id:x})                          // enviar no endpoint id p parametro 'x', x é o id que esta dentro de tokezin que tem dentro dele o banco de dados, foi enviado para ele com o botao enviar
 
})
  const data3= await res4.json()
  console.log(data3)

  if(data3){
try{
const res5 = await fetch("http://localhost:3000/alunos",{ // ter uma resposta do banco de dados e usar para aparecer na tela EM TOKezin
  method:"GET",
  headers:{
"Content-Type":"application/json"


  }

  
})
const dataAlunos = await res5.json()
console.log(dataAlunos)
setTokezin(dataAlunos)

}
catch(error){
  console.log(error)
} 
}

}catch(error){
  console.log(error)
}

}

const atualizar = async(y)=>{
  const enviado = {id:y,nome:'breninhos2',email:"brenocp32123@gmail.com",senha:"12313141323423"}
 try{
const res = await fetch("http://localhost:3000/alunos/atualizar",{
method:'PUT',
headers:{
  'Content-Type':'application/json'

},
body:JSON.stringify(enviado)



})
const data =await res.json()
console.log(data)


  }catch(error){
    console.log(error)
  }

}

const enviar  = async ()=>{

try{
const enviar = {email,senha}                                        // envia senha  e email para o login no router do back 
 
                                      
const res = await fetch("http://localhost:3000/alunos/login",{          
method:'POST',
headers:{
  "Content-Type":"application/json",
  "X-API-KEY":""


},
body:JSON.stringify(enviar)               // enviando pelo body pra o back

})
const data = await res.json()  // TOKENREAL
console.log(data)

  navigate("/tarefas")
} catch(error){
console.log(error)

}





}

  return (
    <>
   <input   onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
   <input     onChange={(e)=>setSenha(e.target.value)} placeholder='senha' />
   <button type="button"  onClick={enviar} >login</button>
    
    
    </>
  )}
  export default Logins


  // usuario manda EMAIL SENHA PARA fetch /Logins, se for verdadeira retorna um token, pegamos o token em DATA
  // se tiver token fazemos um fetch para /protegido, protegido verifica o token enviado no body e exibe os alunos
  // senao retorna token nao valido,caso o retorno nao seja token nao valido, colocamos localstorage o token DATA
  // e vai para dash, antes do login nao se pode ir ate dash pela url pq é apagada toda vez no registrar o token
  