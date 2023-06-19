import React, { useState } from 'react';
import firebase from '../firebaseConfig';
import "firebase/auth";
import './styles/TelaUsuario.css';

const TelaUsuario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Login Efetuado com Sucesso!');
      window.location.href = '/Personalidades';
      // obterDadosPersonalidades(user.id);
    } catch (error) {
      setError('Login ou Senha Inválidos!' + error.message);
      console.log('Login ou Senha Inválidos!' + error.message);
    }
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    setError(null);
    try {

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('Cadastro Efetuado com Sucesso!');
      ExibirLogin();
    } catch (error) {
      setError('Erro ao cadastrar o usuário!' + error.message);
      if(error.message ="Password should be at least 6 characters (auth/weak-password)."){
        alert("Senha deve conter no mínimo 6 caracteres!");
      }else{
        console.log('Erro ao cadastrar o usuário!' + error.message);
      }
      
    }
  };

  const ExibirLogin = () => {
    const displayCad = document.getElementById('formCadastro').style.display;
    document.getElementById('formCadastro').style.display = 'none';
    const displayLog = document.getElementById('formLogin').style.display;
    document.getElementById('formLogin').style.display = 'block';
  };

  const ExibirCadastro = () => {
    const displayCad = document.getElementById('formCadastro').style.display;
    document.getElementById('formCadastro').style.display = 'block';
    const displayLog = document.getElementById('formLogin').style.display;
    document.getElementById('formLogin').style.display = 'none';
  };

  return (
    <div id="areaform">
      <div id="formLogin">
        <legend>Login</legend>

        <label htmlFor="usuario">Email</label>
        <input
          className="input-field"
          type="text"
          id="userId"
          name="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label htmlFor="text">Senha</label>
        <input
          className="input-field"
          type="password"
          id="senhaId"
          name="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button class="submit-button" type="button" onClick={handleLogin}>Logar</button>

        <button class="submit-button" type="button" onClick={ExibirCadastro}>Cadastrar Usuario</button>
      </div>

      <div id="formCadastro" style={{ display: 'none' }}>
        <legend>Cadastro</legend>

        <label htmlFor="usuario">Email</label>
        <input
          className="input-field"
          type="text"
          id="userCadId"
          name="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label htmlFor="text">Senha</label>
        <input
          className="input-field"
          type="password"
          id="senhaCadId"
          name="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button class="submit-button" type="button" onClick={handleCadastro}>Cadastrar</button>
        
        <button class="submit-button" type="button" onClick={ExibirLogin}>Login</button>
      </div>
    </div>


  );
};

export default TelaUsuario;