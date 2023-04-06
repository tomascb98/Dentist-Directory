import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);

  return (
    <nav>
      <Link to='/home'><h3>Home</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>{state.isDark ? "🌞" :"🌚"}</button>
    </nav>
  )
}

export default Navbar