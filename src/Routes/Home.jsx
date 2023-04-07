import React, { useContext } from 'react'
import { useEffect } from 'react'
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
  
  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
   },[state.favs])

  return (
    <main className={state.isDark ? "dark" : ""} >
      <h2>HOME</h2>
      <div className='card-grid'>
        {state.dentists.map((dentist)=> <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home

