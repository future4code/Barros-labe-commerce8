
import React, { useState } from 'react'
import CardHome from './Components/Home/CardHome'
import { satList } from './mocDados'
import { Header, Header2, Container } from '../src/Components/Home/styledHome'



function App() {
  return (
    <>
    
    <Header>
      
      <span>Quantidade de Produtos: </span>
      <div>
        <label>Ordenação</label>
        <select>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </div>
    </Header>
    
    <Container>{dadosRenderizados}</Container>
  
  </>
  );
}

export default App;
