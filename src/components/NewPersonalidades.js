import React, { useContext, useState } from 'react';
import { PersonalidadesContext } from '../context/PersonalidadesProvider';
import './styles/NewPersonalidade.css';

const NewPersonalidade = () => {
  const { onPersonSubmit } = useContext(PersonalidadesContext);
  const [PersonalidadeNome, setNome] = useState('');
  const [PersonalidadeDesc, setDescricao] = useState('');
  const [PersonalidadeImg, setImage] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    let newPersonalidades =
    {
      PersonalidadeCurtida: false,
      PersonalidadeNome: PersonalidadeNome,
      PersonalidadeDesc: PersonalidadeDesc,
      PersonalidadeId: PersonalidadeNome,
      PersonalidadeImg: PersonalidadeImg,
      PersonalidadeUserCurtida: ""
    };


    console.log(newPersonalidades);

    onPersonSubmit(newPersonalidades);

    // Realizar a limpeza dos campos do formulário
    setNome('');
    setDescricao('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Image = e.target.result;
      const imageData = base64Image.substring(base64Image.indexOf(',') + 1);
      setImage(imageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={PersonalidadeNome} onChange={(e) => setNome(e.target.value)} />

      <label htmlFor="descricao">Descrição:</label>
      <textarea id="descricao" value={PersonalidadeDesc} onChange={(e) => setDescricao(e.target.value)} />

      <label for="imagem">Imagem:</label>
      <input type="file" id="imagem" accept="image/*" onChange={handleImageChange} ></input>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NewPersonalidade;
