import React, { Fragment } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, themeState, favDispatch} = useGlobalStates()
  
  const deleteFav=(id)=>{
  
  }


  return (

  <div className={themeState.className}>
      <h1>Dentists Favs</h1>
      <div className='card-grid light'>
      {favState.map(fav => (<Link key={fav.id} to={'/detail/' + fav.id}> <Card dentist={fav} deleteFav={deleteFav}/></Link>))}  
   
        </div>
     
    </div>
  );
};

export default Favs;
