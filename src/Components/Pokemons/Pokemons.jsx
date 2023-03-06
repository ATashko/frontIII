import React from "react"

import pokemonsJson from "../../../pokemons.json"
import PokemonCard from "../PokemonCard/PokemonCard"

const Pokemons = ( { type } ) => {

    let pokemonsType = pokemonsJson[type]

    return (
       <div>
            {pokemonsType.map((element) => {
                return (
                    <PokemonCard element = {element} key={element.id}/>
                )
            }

            )
        }
        </div>  
    )
}

console.log(pokemonsJson);

export default Pokemons


