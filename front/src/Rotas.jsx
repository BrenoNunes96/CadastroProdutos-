  // Rotas.jsx
  import { Routes, Route } from "react-router-dom";
  import Logins from "./Logins";
  import Registrar from "./Registrar";
  import App from "./App";
  import RotasProtegida from "./RotasProtegias";
  import Dash from "./Dash"
  import Perfil from "./Perfil";
  import Animais from "./animais";
   import Produto from "./Produto";
import Tarefa from "./Tarefas";
  

  function Rotas() {
    return (
      <Routes>
        <Route path="tarefas" element={<Tarefa/>}/>
        <Route path="produto" element={<Produto/>} />
        <Route path="/animais" element={<Animais/>} />
        <Route path="/perfil" element={<RotasProtegida><Perfil/></RotasProtegida>} />
        <Route path="/dash" element={<RotasProtegida> <Dash/></RotasProtegida>}/>
        <Route path="/" element={<App/>} />
        <Route path="/registrar" element={<Registrar/>} />
        <Route path="/logins" element={<Logins/>} />
        
      </Routes>
    );
  }

  export default Rotas;
