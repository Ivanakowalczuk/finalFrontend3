import React, { useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, themeState} = useGlobalStates()



  return (

  <div className={themeState.className}>
      <h1>Dentists Favs</h1>
      <div className='card-grid light'>
      {favState.favList.map(dentist => (<Link key={dentist.id} to={'/detail/' + dentist.id}> <Card dentist={dentist} fav={true} /></Link>))}  
   
        </div>
     
    </div>
  );
};

export default Favs;
