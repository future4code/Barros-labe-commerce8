
import React, { useState } from 'react'
import CardHome from './Components/Home/CardHome'
import { satList } from './mocDados'
import { Header, Container } from '../src/Components/Home/styledHome'
import Filters from './Components/Filter/filter'
import Carrinho from './Components/Carrinho/Carrinho'




function App() {
  const [itens] = useState(satList)
  const [buscar, setBuscar] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)

 
    
  
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
      <Filters
        buscar={buscar}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setBuscar={setBuscar}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
  
      <Container>
      {itens
        .filter(item => {
          return item.name.toLowerCase().includes(buscar.toLowerCase())
        })
        .filter(item=> {
          return item.price >= minPrice || minPrice === ""
        })
        .filter(item => {
          return item.price <= maxPrice || maxPrice === ""
        })
        .map(item => {
        return <CardHome img={item.img} nome={item.name} valor={item.price} />
    
  })
}
        </Container>
      


      

    <Carrinho/>
    
    
    
  
  </>
  );
}

export default App; 
