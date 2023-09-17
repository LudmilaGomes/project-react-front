import React from 'react';
import Entrar from './components/Entrar-cadastrar/Entrar';
import Cadastro from './components/Entrar-cadastrar/Cadastro';
import Nav from './components/Navegar/Nav';
import CompLivroExibe from './components/Navegar/CompLivroExibe';

function App() {
  return (
    <div className="App">
      {/* <Entrar /> */}
      {/* <Cadastro /> */}
      <Nav />
      {/* <CompLivroExibe name='Morro dos Ventos Uivantes e Cornos Demais Além da Conta' author='Valdemar' /> */}
    </div>
  );
}

export default App;
