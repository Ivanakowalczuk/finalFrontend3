import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
 const {dentist} = useGlobalStates()
  const navigate = useNavigate()
  const params = useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const dentistFav = dentist.find((den)=> den.id == params.id)

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      <div className='card'>
      
      <h3>{dentistFav.name}</h3>
        <h4>{dentistFav.email}</h4>
        <p>{dentistFav.phone}</p>
        <p>{dentistFav.website}</p>
     
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  
 </>

  )
}

export default Detail