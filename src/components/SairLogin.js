import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './styles/Header.css';

const SairLogin = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/HomePage';
      alert('Usuário deslogado com sucesso.');
      
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <button class="submit-button" onClick={handleLogout}>Logout</button>
  );
};

export default SairLogin;
