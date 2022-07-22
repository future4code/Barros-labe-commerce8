import React from "react"
import { FilterContainer } from "./StyleFilter"

export function Filters(){
    return <FilterContainer>
        <input className="Pesquisar"
            placeholder="Pesquisa"
        />
        <input className="Price"
            type="number"
            placeholder="Preço mínimo"
        />
        <input className="Price"
             type="number"
             placeholder="Preço máximo"
        />

        
        
        
    </FilterContainer>
    
    
}