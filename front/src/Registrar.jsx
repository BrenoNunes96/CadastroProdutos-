import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import cachorro from "./pata-de-cachorro.png"
function Registrar (){
const [nome,setNome]=useState("")
const [email,setEmail]=useState("")
const [senha,setSenha]= useState("")

const navigate = useNavigate()

useEffect(()=>{
localStorage.removeItem("tokenReal")
console.log("TOKEN REMOVIDO")
},[])

const enviou = async ()=>{

const enviar2 ={nome,email,senha}

    try{
const res = await fetch("http://localhost:3000/alunos/login",{
method:"POST",
headers:{
"Content-Type":"application/json"

},
body:JSON.stringify(enviar2)

    
})
const data = await res.json()       // resposta dio servidor que vc fez requisiçao
console.log(data)
if(data !== 'error'){
navigate("/logins")
}

    }catch(error){
        console.error({message:error})
    }

}
const animaisx =()=>{
    navigate("/animais")
}

return(
    <div>

<input placeholder="nome" onChange={(e)=> setNome(e.target.value)} />
<input placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
<input placeholder="senha" onChange={(e)=>setSenha(e.target.value)}/>
<button onClick={animaisx}> <img className='lixeira' src={cachorro} /></button>

<button onClick={enviou}>registre</button>




    </div>
)



}

export default Registrar