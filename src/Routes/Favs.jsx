import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatch} = useContext(ContextGlobal)
  const [favDentists, setFavDentists] = useState([""]);

  useEffect(() => {
    setFavDentists(JSON.parse(localStorage.getItem('favs')));
  },[])

   return (
    <div className={state.isDark ? "dark" : ""}>
      <h2>DENTIST FAVS</h2>
      <div className="card-grid">
        {favDentists.map((dentist) => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
