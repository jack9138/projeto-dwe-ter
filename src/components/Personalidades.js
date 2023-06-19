import React, { useContext } from 'react';
import { PersonalidadesContext } from '../context/PersonalidadesProvider';
import Personalidade from './Personalidade';
import './styles/Personalidade.css';
import FindPersonalidade from './FindPersonalidade';

const Personalidades = () => {

  const { persons } = useContext(PersonalidadesContext);

  return (
    <div>
      <FindPersonalidade></FindPersonalidade>
      {persons.map((person) => {
        return (
          <div class="cardDados">
            <Personalidade key={person.Id} persons={person}></Personalidade>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};
export default Personalidades;
