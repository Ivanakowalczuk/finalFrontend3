import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState([])

  const params = useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
   fetch(url)
       .then(res => res.json())
       .then(data => setDentist(data))
  },[])
  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      <div className='card'>
      
      <h3>{dentist.name}</h3>
        <h4>{dentist.email}</h4>
        <p>{dentist.phone}</p>
        <p>{dentist.website}</p>
        </div>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  
 </>

  )
}

export default Detail