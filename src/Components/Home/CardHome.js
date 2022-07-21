import React from 'react';
import {Header, Container, ContainerPai, Lado , BoxCard} from '../Home/styledHome'

function CardHome (props){
  return(
    <>
    
   
    <BoxCard>
        <img src= {props.img} alt="Satelite"/>
        <p>{props.nome} </p>
        <p>R$:{props.valor}</p>
        <button> Adicionar</button>
    </BoxCard>
   
    </>
  )
}

export default CardHome