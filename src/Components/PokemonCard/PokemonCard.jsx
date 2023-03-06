import React from 'react'

const PokemonCard = ({element}) => {
  return (
  <div key = {element.id}>
    <h1>{element.name}</h1>
    <img src= {element.avatar}  alt="" />
    <h2>{element.agressive ? "Es agresivo" : "No es agresivo"}</h2>
  </div>
  )
}

export default PokemonCard

