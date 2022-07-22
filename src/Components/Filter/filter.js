import React from "react"
import { FilterContainer } from "./stylefilter"

function Filters(props){
    return <FilterContainer>
        <input className="Pesquisar"
            placeholder="Pesquisar"
            value={props.buscar}
            onChange={(ev) => props.setBuscar(ev.target.value)}
        />
        <input className="PriceMin"
            type="number"
            placeholder="Preço mínimo"
            value={props.minPrice}
            onChange={(ev) => props.setMinPrice(ev.target.value)}
        />
        <input className="PriceMax"
             type="number"
             placeholder="Preço máximo"
             value={props.maxPrice}
             onChange={(ev) => props.setMaxPrice(ev.target.value)}
        />

        
        
        
    </FilterContainer>
    
    
}
export default Filters