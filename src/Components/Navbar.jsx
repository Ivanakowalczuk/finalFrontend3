import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
     <h1><span>D</span>H ODONTO</h1>
      <button>Change theme</button>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/favs"><h3>Favoritos</h3></Link>
      <Link to="/contact"><h3>Contacto</h3></Link>


    </nav>
  )
}

export default Navbar