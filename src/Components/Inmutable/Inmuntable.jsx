import React, { useState} from 'react'
import estilo from './Inmutable.module.css'

const Inmuntable = ({tipo}) => {

  const[ contador , setContador] = useState(0)

  /*[variable , funcionModificaContador] = useState(valor en que incia la variable)*/


  const sumar = () => {

    setContador (contador +1)

  }

  return (
    <div className = {estilo[tipo]}>
        <h1 className={estilo.titleHome}>Este es el componente inmutable</h1>
        <h3 style={{backgroundColor : "yellow"}}>{contador}</h3>
        <button onClick={sumar}>Sumar</button>
      
    </div>
  )
}

export default Inmuntable
