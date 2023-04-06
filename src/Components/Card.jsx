import React, { useEffect, useState } from "react";
import { useGlobalStates } from "./utils/global.context";
import { useParams } from "react-router-dom";



const Card = ({data}) => {
  const [dent, setDent] = useState({})
  const { favDispatch} = useGlobalStates()
  const {id} = useParams()
  
  const url = 'https://jsonplaceholder.typicode.com/users'+id

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDent(data))
}, [])



  const addFav = () => {
    favDispatch({type: 'ADD_FAV', payload: data})
  }
  
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="imgdoctor" src="/images/doctor.jpg" alt="picture doctor" />
        <h3>{data.name}</h3>
        <h4>{data.username}</h4>
        <p>{data.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}  className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
