import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import SysRoutes from './SysRoutes';
import PersonalidadesProvider from './context/PersonalidadesProvider';
import './App.css';
import Footer from './components/Footer.js';
import './components/styles/body.css';
import UserProvider from './context/UserProvider';

function App() {
  
  return (
    <div className='App'>
      <div className="body">
        <BrowserRouter>
          <Header/>
          <PersonalidadesProvider>
            <UserProvider>
              <SysRoutes />
            </UserProvider>
          </PersonalidadesProvider>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
