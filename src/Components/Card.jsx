import React from "react";

const Card = ({data}) => {
 
  const addFav= () => {
    localStorage.setItem('dentist', JSON.stringify(data) )
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="imgdoctor" src="./images/doctor.jpg" alt="" />
        <h3>{data.name}</h3>
        <h4>{data.username}</h4>
        <p>{data.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
