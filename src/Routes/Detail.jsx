import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
   const [dent, setDent] = useState({})
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' +id
  const navigate = useNavigate()


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => setDent(data))
  
}, [])


  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div className='card'>
      <img className="imgdoctor" src="/images/doctor.jpg" alt="" />
      <h3>{dent.name}</h3>
        <h4>{dent.email}</h4>
        <p>{dent.phone}</p>
        <p>{dent.website}</p>

        </div>
        <button onClick={() => navigate(-1)}>Go back</button>

     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  
 </>

  )
}

export default Detail