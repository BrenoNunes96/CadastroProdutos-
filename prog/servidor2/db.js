// db.js
const mysql = require("mysql2");         // pega mysql


const conexao = mysql.createConnection({          //conexao faz a conexao com o banco mysql
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack",                             
});

conexao.connect((err) => {  
  if (err) throw err;          
  console.log("✅ Conectado ao MySQL!");   // conectado ao mysql "conexao.connect"
});

module.exports = conexao;
