const AlunosService = require("./alunos.service");
const jwt = require("jsonwebtoken")
const secretkey = '7c1cadb6887373dacb595c47166bfbd9'

const control = {
    

    async registrado(req,res){
try{
    const cliente= req.body;
const alunos =await servicoAluno.registradoaluno(cliente);

res.json(alunos)
}catch(erro){
    console.log(erro)
}






    },

async login(req,res){
try{ const cliente = req.body
const aluno = await AlunosService.login(cliente)

console.log(req.body)
res.json(aluno)
}catch(erro){
    console.log(erro)
}
}


}
module.exports=control