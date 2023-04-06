import { useEffect, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ContextGlobal = createContext(undefined);

const initialState = {
  isDark: false, 
  dentists: [],
  favs: []
};

const globalReducer = (state, action) =>{
  switch(action.type){
    case "GET_USERS":
      return {...state, dentists: action.payload}
    case "ADD_FAV":
      return {...state, favs: [...state.favs, action.payload]}
    default: new Error;
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state,dispatch] = useReducer(globalReducer,initialState);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;