import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link} from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const {dentist} = useGlobalStates()
console.log(dentist)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentist.length && dentist.map(dentist => (<Link key={dentist.id} to={'/detail/' + dentist.id}> <Card data={dentist}/></Link>))}  

      </div>
    </main>
  )
}

export default Home