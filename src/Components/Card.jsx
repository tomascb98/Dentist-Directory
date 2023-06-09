import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = (props) => {
  const {state, dispatch} = useContext(ContextGlobal)
  const addFav = ()=>{
    let validadorDentistaFavRepetido = false;

    state.favs.forEach(dentistFav => {
      if(dentistFav.id == props.dentist.id){
        validadorDentistaFavRepetido = true;
      }
      console.log(validadorDentistaFavRepetido)
    });

    if(!validadorDentistaFavRepetido){
      dispatch({type: "ADD_FAV", payload: props.dentist})
    }
  }
   
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
