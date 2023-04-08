import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {themeState, themeDispatch} = useGlobalStates()
  
  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
   
  }

  return (
    <div className={themeState.className}>
    <nav >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
     <Link to={"https://www.digitalhouse.com/ar"}><h1><span>D</span>H ODONTO</h1></Link>
 
     <button className='themeButton' onClick={switchTheme}>{themeState.theme ? '☀️' : '🌜'}</button>
     <div>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/favs"><h3>Favoritos</h3></Link>
      <Link to="/contact"><h3>Contacto</h3></Link>
      </div>


    </nav>
    </div>
  )
}

export default Navbar