import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';
import { auth } from '../firebaseConfig';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <header className='Header'>
      <div className="menu" onLoad="obterDadosPersonalidades(null)">
        <nav className="navMenu">
          <ul>
            <li><NavLink to="/HomePage" className="pagina-inicial-link">Página Inicial</NavLink></li>
            <li><NavLink to="/Personalidades" className="personalite-link">Personalidades</NavLink></li>
            <li><NavLink className="favoritos-link" onClick=" exibirPersonalidadesCurtidas()">Favoritos</NavLink></li>
            <li><NavLink to="/Contato" className="contato-link">Contato</NavLink></li>
            {user ? (
              <li><NavLink to="/CadastrarPersonalidade" className="contato-link">Nova Personalidade</NavLink></li>
            ) : null}
          </ul>
          {user ? (
            <NavLink to="/SairLogin" className="contato-link">Deslogar</NavLink>
          ) : null}
          {user === null && (
           <NavLink to="/TelaUsuario" className="contato-link">Login</NavLink>
          )}
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
