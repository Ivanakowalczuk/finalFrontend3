import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const {id} = useParams()
  const {dentistState, getDentist} = useGlobalStates()
  const navigate = useNavigate()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
useEffect(() => {
  getDentist(id)
}, [id])

  return (
    <div className='light detail'>
      <h1>Detail Dentist {id} </h1>
      <div className='card'>
      <img className="imgdoctor" src="/images/doctor.jpg" alt="" />
      <h3>{dentistState.dentistDetail.name}</h3>
        <h4>{dentistState.dentistDetail.email}</h4>
        <p>{dentistState.dentistDetail.phone}</p>
        <p>{dentistState.dentistDetail.website}</p>
      </div>
        <button className='backButton' onClick={() => navigate(-1)}>🔙</button>

     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>


  )
}

export default Detail