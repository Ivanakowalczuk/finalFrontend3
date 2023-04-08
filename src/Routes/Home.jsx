import React from 'react'
import Card from '../Components/Card'
import { Link} from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const {dentistState, themeState} = useGlobalStates()
  

console.log(dentistState)
  return (
    <main className={themeState.className} >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentistState.dentistList.map(dentist => (<Link key={dentist.id} to={'/detail/' + dentist.id}> <Card dentist={dentist}/></Link>))}  

      </div>
    </main>
  )
}

export default Home