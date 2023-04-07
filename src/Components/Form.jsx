import React from "react";
import { useState, useEffect } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [showErrorName, setShowErrorName] = useState(false)
  const [showErrorMail, setShowErrorMail] = useState(false)
  const [showSuccesful, setShowSuccesful] =useState(false)


  useEffect(() => {
    userName.length <= 5 ? setShowErrorName(true) : setShowErrorName(false)
  },[userName])

  useEffect(() => {
    showErrorMail ? setShowErrorMail(false) : setShowErrorMail(true)
  },[userEmail])


  const nameHandler = (event) =>{
    setUserName(event.target.value)
  }

  const emailHandler = (event) =>{
    setUserEmail(event.target.value)
    setShowErrorMail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail))
  }

  const formHandler = (event) =>{
      event.preventDefault();
      (showErrorMail && showErrorName) ? setShowSuccesful(false) : setShowSuccesful(true)      
    }
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>Full Name:</label>
        <input type="text" 
                placeholder="Insert your full name"
                value= {userName}
                onChange={nameHandler}/>
        <p className="errorContact">{showErrorName && "The name has to be 5 characters at least"}</p>

        <label>Email:</label>
        <input type="email"
                placeholder="Insert your email"
                value = {userEmail}
                onChange = {emailHandler}/>
        <p className="errorContact">{showErrorMail && "The email must be in format mail@domain.com"}</p>
        <button>Send</button>
      </form>
      
      <h4>{showSuccesful && "THANKS "+userName.toUpperCase()+", WE WILL CONTACT YOU VIA EMAIL AS SOON AS POSSIBLE."}</h4>
    </div>
  );
};

export default Form;
