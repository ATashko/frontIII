import React, { useState } from 'react'

const Form = () => {

  const [data , setData] = useState({
    email:"",
    password:"",
  })


  return (
    <div>
      <form>
        <input type="text" onChange={(event) => console.log(event)} />
        <button>Ingresar</button>
      </form>
    </div>
  )
}

export default Form
