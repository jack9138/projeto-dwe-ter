import React, { useEffect } from 'react';
import '../components/styles/Personalidade.css';
import '../images/botao-curtir.png';
const  Personalidade = (props) => {
  
  return (
    <div class="cardImg">
      <img src={`data:image/png;base64,${props.persons.PersonalidadeImg}`} alt={props.persons.PersonalidadeNome} />
      <div class="cardText">
        <p> <strong>{props.persons.PersonalidadeNome}</strong> - {props.persons.PersonalidadeDesc}</p>
      </div>
      <button id="botaoCurtir"  onclick="curtirPesonalidade(document.getElementById('${personalidade.PersonalidadeNome}').value)">Curtir</button>
    </div>
    
  );
};
export default Personalidade;
