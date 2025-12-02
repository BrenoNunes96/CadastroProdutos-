import { useState } from "react"

function Animais (){
const [imagem,setImagem]=useState([])
    const animalAleatorio = async()=>{

try{
    const res2=await fetch("https://dog.ceo/api/breeds/image/random",{

method:"GET",
headers:{
}


    })
    const data2= await res2.json()
    console.log(data2)
    setImagem(data2)
    
}catch(error){
    console.log(error)
}




    }






return (
<div>

<h1>BEM VINDO AO ANIMAL PLANET </h1>
<button onClick={animalAleatorio}>aleatorio animal</button>
<div><img src={imagem.message} /></div>


</div>



)    
}export default Animais