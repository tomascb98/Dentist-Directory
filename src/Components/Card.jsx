import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = (props) => {
  const {state, dispatch} = useContext(ContextGlobal)
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
      dispatch({type: "ADD_FAV", payload: props.dentist})
  }

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
    console.log("EL JSON")
    console.log(JSON.parse(localStorage.getItem('favs')))
   },[state.favs])
   
  const url = "/users/" + props.dentist.id;
  return (
   
      <div className="card">
         <Link to = {url}>
          <img src="/images/doctor.jpg" alt="Imagen profesional" />
          <h3>{props.dentist.name}</h3>
          <h3>{props.dentist.username}</h3>
        </Link>
          <button onClick={addFav} className="favButton">⭐️</button>
    </div>
  
  );
};

export default Card;
