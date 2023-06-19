import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import './styles/body.css';
const HomePage = () => {
  return (
    <div class='cardTextHome'>
      <h1>Prêmio “Zumbi dos Palmares”</h1>
      <br></br>
      <p>
      Criado em 2013, o Prêmio “Zumbi dos Palmares” reconhece, anualmente, cidadãos ou instituições que se dedicam à luta contra o racismo e outras intolerâncias.
      </p>
      <br></br>
      <p>
        Para conhecer mais sobre essas pessoas, acesse o link de  <Link to="/Personalidades">Personalidades</Link>.
      </p>
      <br></br>
      <p>
        Entre em contato conosco através da <Link to="/Contato">Fale Conosco</Link>.
      </p>
    </div>
  );
}

export default HomePage;
