import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";



const Card = ({dentist}) => {
  // const [dent, setDent] = useState({})
  const {favDispatch} = useGlobalStates()
 
  const addFav = () => {
    favDispatch({type: 'ADD_FAV', payload: dentist})
  }
  
  const deleteFav=()=>{

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="imgdoctor" src="/images/doctor.jpg" alt="picture doctor" />
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>
        <p>{dentist.id}</p>
      
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}  className="favButton">Add Fav</button>
    </div>
  );
};

export default Card;
