import { useNavigate } from "react-router-dom"
import Perfil from "./Perfil"
import { useState } from "react"

function AlunosTdos(){
    const[tokezinho,setTokezinho]=useState([])
        const navigate = useNavigate()
     

        const deletar = async (y)=>{
const novo = tokezinho.filter(x=> x.id !== y)
setTokezinho(novo)

     try{
        const res2 = await fetch("http://localhost:3000/alunos/deletar",{
method:"DELETE",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify({id:y})


     })
    const data2 = await res2.json()
    console.log(data2)

     }catch(error){
      console.error(error)

     }



        }
const Alunos = async () =>{


try{
const res = await fetch("http://localhost:3000/alunos",{
method:'GET',
headers:{
"Content-Type":"application/json"


}

})
const data = await res.json()
console.log(data)
setTokezinho(data)
}catch(error){
    console.log(error)




}

}
const registrar = ()=>{
    navigate("/registrar")
}



return(
    <div>


    <button onClick={registrar}>logout</button>
    {tokezinho.map(x=><li key={x.id}><button onClick={()=>deletar(x.id)}>Deletar</button>nome:{x.nome} email:{x.email} senha:{x.senha} </li>)}
</div>

)


}
export default AlunosTdos