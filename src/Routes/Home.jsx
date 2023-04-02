import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'
 
  useEffect(()=>{
   fetch(url)
       .then(res => res.json())
       .then(data => setDentist(data))
  },[])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
{dentist.length && dentist.map(dentist => (<Link key={dentist.id} to={'/detail/' + dentist.id}> <Card  data={dentist}/></Link>))
    
}  
      </div>
    </main>
  )
}

export default Home