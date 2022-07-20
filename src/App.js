import React, { useState } from 'react';
import CardHome from './Components/Home/CardHome'
// import satList from '../sats.json'

function App() {
  
  const [itens, setItens]= useState()

  return (
    <>
    
    <CardHome 
    itens={itens} 
    
    />
    </>
  );
}

export default App;
