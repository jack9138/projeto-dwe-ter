import React from 'react';
import './styles/Image.css';

const Image = (props) => {
  
  return(
    <div class='cardImg'>
      <img src={props.PersonalidadeImg} alt=''/>
    </div>
  )
}

export default Image;