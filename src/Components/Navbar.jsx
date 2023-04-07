import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);

  return (
    <nav className={state.isDark ? "dark" : ""}>
      <div>
        <img src="/images/logoAI.jpg" alt="logo" />
        <h1>Salvador Muelitas</h1>
      </div>
      <ul>
        <li><Link to='/home'><h3>Home</h3></Link></li>
        <li><Link to='/contact'><h3>Contact</h3></Link></li>
        <li> <Link to='/favs'><h3>Favs</h3></Link></li>
        <li> <button className={state.isDark ? "dark" : ""} onClick={()=>dispatch({type: "CHANGE_THEME"})}>{state.isDark ? "🌞" :"🌚"}</button></li>
      </ul>
      
      
     
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
     
    </nav>
  )
}

export default Navbar