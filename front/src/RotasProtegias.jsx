
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

function RotasProtegias ({children}){
    const navigate = useNavigate()
    const token2 = localStorage.getItem("tokenReal")


useEffect(()=>{
if(!token2){

    console.log("nao tem TOKEN")
    navigate("/logins")
}
},[navigate,children,token2])

return children



}export default RotasProtegias;