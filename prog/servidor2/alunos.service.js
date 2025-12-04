    const AlunosDAO =require("./alunos.dao")
    const jwt = require('jsonwebtoken')
    const secretkey = '9b37776882887030ef3dc92a1c64db2ca0b8a4a0f849d0e1bf4cb3aef7552ac613bc66c9cd5485ed1315d0ae4e8de8bd6f2ab21e9390102ca7ca5be1d3a60a32'

    const AlunosService ={


async registradoaluno(cliente){
    const registroaluno = await AlunosDAO.registro(cliente);
    if(cliente.nome === " " ||cliente.email === " "|| cliente.nome ===" "){
        res.json('error')
    }
    return registroaluno;

    },

async login(cliente){
const verificar = AlunosDAO.login(cliente)
if(!verificar){
    console.log('usuario nao existente')
}
const token = jwt.sign({id:verificar.id,email:verificar.email,senha:verificar.senha},secretkey,{expiresIn:"1hour"})

return{
    token,
    secretkey,
    verificar
}

}


}

    module.exports =AlunosService;