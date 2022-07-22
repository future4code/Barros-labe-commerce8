import React, { useState } from 'react'
import CardHome from './Components/Home/CardHome'
import { satList } from './mocDados'
import { Header, Header2, Container } from '../src/Components/Home/styledHome'
import Filters from './Components/Filter/Filter'

function App() {
  const [itens, setItens] = useState(satList)
  
  const dadosRenderizados = itens.map(item => {
    return <CardHome img={item.img} nome={item.name} valor={item.price} />
    
  })

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
      <Filters/>
  
      <Container>{dadosRenderizados}</Container>
      

    
    </>
  )

}

export default App






