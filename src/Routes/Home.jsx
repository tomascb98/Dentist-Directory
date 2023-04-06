import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state, dispatch} = useContext(ContextGlobal);

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch({type: "GET_USERS", payload: data}))
    .catch((e) => console.log(e))
  },[])
  console.log(state.favs)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map((dentist)=>{
          return <Card dentist={dentist}/>
        })}
      </div>
    </main>
  )
}

export default Home

// name={dentist.name} username={dentist.username} id={dentist.id}