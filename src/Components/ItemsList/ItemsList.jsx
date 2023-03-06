import React, { useState } from 'react'
import { characters } from '../../characterData'

const ItemsList = () => {

    const [cart , setCart] = useState([])

    const addToCart = (item) => {
        console.log("se agregó"), item;
    }


  return (
    <div>
      <h1>Personajes</h1>
      {
        characters.map((character) => {
            return <div key={character.id} style={{border: "2px solid black"}}>
                <h2>{character.name}</h2>
                <img src={character.image} alt="" />
                <h4>{character.species}</h4>
                <button onClick={() => addToCart(character)}>Agregar al carrito</button>
            </div>
        })
      }
    </div>
  )
}

export default ItemsList
