import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favDentists, setFavDentists] = useState([""]);

  useEffect(() => {
    setFavDentists(JSON.parse(localStorage.getItem('favs')));
  },[])

   return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.map((dentist) => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </>
  );
};

export default Favs;
