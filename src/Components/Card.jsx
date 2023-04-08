import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";



const Card = ({dentist, deleteFav}) => {

  const {favDispatch} = useGlobalStates()
 
  const addFav = () => {
    favDispatch({type: 'ADD_FAV', payload: dentist})
  }
  
 

  return (
    <div className="card">
        <img className="imgdoctor" src="/images/doctor.jpg" alt="picture doctor" />
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>
        <p>{dentist.id}</p>
         { deleteFav ? <button onClick={deleteFav}  className="favButton">Delete Fav ⭐</button>
          : 
          <button onClick={addFav}  className="favButton">Add Fav ⭐</button>
          }
         
        
    </div>
  );
};

export default Card;
