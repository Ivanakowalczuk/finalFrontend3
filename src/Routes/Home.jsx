import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

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
{dentist.length
    ? dentist.map(dentist => (<Card key={dentist.id} data={dentist}/>))
    : null
}  
      </div>
    </main>
  )
}

export default Home