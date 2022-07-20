import React from 'react';

function CardHome (props){
  return(
    <div>
    <img src= {props.foto} alt="Satelite"/>
    <span>{props.nome} </span>
    <span>{props.valor}</span>
    <button onClick={props.handlesAddSat}> Adicionar</button>
    </div>
  )
}

export default CardHome