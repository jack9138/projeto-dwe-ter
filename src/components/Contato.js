import React, { useState } from 'react';
import './styles/Contato.css';

function Contato(props) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { nome, telefone, email, mensagem };
    //onSubmit(formData);
  };

  return (
    <div id="areaform">
      <legend>Entre em contato</legend>
      <form id="formContato" autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          <input
            class="nome"
            type="text"
            placeholder="Nome Completo"
            required
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <br />
          <input
            class="fone"
            type="tel"
            placeholder="Telefone: (xx)xx-xx-xx-xx"
            name="fone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <br />
          <br />
          <input
            class="email"
            type="email"
            placeholder="meuemail@mail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <textarea
            class="mensagem"
            cols="35"
            rows="8"
            placeholder="Deixe sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
          <br />
          <br />
          <input type="submit" className="enviar" value="Enviar" />
        </fieldset>
      </form>
    </div>
  );
}

export default Contato;
