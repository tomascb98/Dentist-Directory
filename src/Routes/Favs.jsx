import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


   // PERRO A VER, CREO QUE ES ASI EL ORDEN, TODO BIEN JEJE
   // 1. COGER LO DEL LOCAL STORAGE Y PARSEARLO
   // 2. ESO LO GUARDA EN UN ARRAY O ALGO, AUNQUE YA LO TIENE EN FAVS JEJE PERO TOCA USAR LO DEL LOCAL
   // 3. ESO LO MAPEA Y LO RENDERIZA CON LAS CARDS RECUERDE QUE ES .MAP((DENTIST) => RETURN <CARD ACA LE PASA LAS PROPS QUE ES EL DENTIST ITSELF/>)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {/* <Card/> */}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
