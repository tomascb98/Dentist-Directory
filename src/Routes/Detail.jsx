import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state, dispatch} = useContext(ContextGlobal)

  const [dentist, setDentist] = useState({})
  const {id} = useParams()
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentist(data))
  },[])

  return (
    <>
      <h1>Detail Dentist ID: {dentist.id}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr>
            <th>{dentist.name}</th>
            <th>{dentist.email}</th>
            <th>{dentist.phone}</th>
            <th>{dentist.website}</th>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail