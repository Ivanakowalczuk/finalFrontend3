import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useGlobalStates()
console.log(favState)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
       
        {favState.map(fav => (
                  <div className="card" key={fav.id}>
                    <img className="imgdoctor" src="/images/doctor.jpg" alt="" />
                <h3>{fav.name}</h3>
                <h3>{fav.username}</h3>
                <h3>{fav.email}</h3>
            </div>
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
