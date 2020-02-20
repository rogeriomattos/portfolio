import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio Rogerio Almeida
        </p>
        <a
          className="App-link"
          href="https://github.com/rogeriomattos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça os meus projetos aqui
        </a>
      </header>
    </div>
  );
}

export default App;
