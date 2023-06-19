import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Footer.css';
const Footer = () => {
  return (
    <div id="Footer" class="footer">
      <footer>
        <h3 id="Contato">
          Entre em contato com a gente <NavLink to="/Contato" class="contato-link" > Contato </NavLink>
        </h3>
        <br/>
        Desenvolvido por Jaqueline dos Santos - Projeto Desenvolvimento WEB
      </footer>
    </div>
  );
};

export default Footer;







