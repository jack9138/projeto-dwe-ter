import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Personalidades from './components/Personalidades';
import NewPersonalidades from './components/NewPersonalidades';
import Contato from "./components/Contato"; 
import HomePage from "./components/HomePage";
import TelaUsuario from "./components/TelaUsuario";
import CadastrarPersonalidade from "./components/NewPersonalidades";
import SairLogin from "./components/SairLogin";

const SysRoutes = (props) => {
  const [status, setStatus] = useState(true);
  return (
    <Routes>
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/Personalidades" element={<Personalidades persons={props.persons}/>}/>
      <Route path="/novaPersonalidade" element={<NewPersonalidades/>} />
      <Route path="/TelaUsuario" element={<TelaUsuario/>} />
      <Route path="/Contato" element={<Contato/>} />
      <Route path="/CadastrarPersonalidade" element={<CadastrarPersonalidade/>} />
      <Route path="/SairLogin" element={<SairLogin/>} />
    </Routes>
  )
}

export default SysRoutes;