import axios from 'axios'
import Joi from 'joi'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import bg from '../../images/bg.jpg'

export default function Login() {
 let {saveUserData}=useContext(AuthContext)

  const [user, setUser] = useState({
    email: "",
    password: ""
    
  })

  const [errorMsg, setErrorMsg] = useState("")

  const [errorlist, setErrorList] = useState([])

  let navigate=useNavigate();

  let getInputValue=(e)=>{
    let myUser = { ...user }
    myUser[e.target.name]=e.target.value
    setUser(myUser)
    
   
  }

  let validateRegisteration=()=>{
    let schema= Joi.object({
     email:Joi.string().required().email({tlds:{allow:['com','net']}}),
     password:Joi.string().required().pattern(/^[a-z]\w{7,14}$/)
     })
   return  schema.validate(user,{abortEarly:false})
   }


   let submitFormData= async(e)=>{
    e.preventDefault();

    let validationResponse=validateRegisteration();
    if(validationResponse.error)
    { 
      setErrorList(validationResponse.error.details)
    }
    else
    {
      let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
      console.log(data); 

      if(data.message=='success') 
      {
        localStorage.setItem("token",data.token)
        saveUserData();
        navigate('/')
      }
      else{
      setErrorMsg(data.message)

      }
    }

   
  }


  return (
    <>

 

  <div className='w-75 m-auto py-5 '>
      <h2>Login Form</h2>
      {errorlist.map((error,index)=>error.context.label=="password"?<div key={index} className='alert alert-danger p-2'>wrong password</div>:<div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
    {errorMsg? <div className='alert alert-danger p-2'>{errorMsg}</div>:""}

      <form onSubmit={submitFormData} className='my-3'>

        <div className='my-2'>
          <label htmlFor='email'>email</label>
          <input onChange={getInputValue} type="email"  className='form-control my-2' name='email' />
        </div>
        <div className='my-2'>
          <label htmlFor='password'>Password</label>
          <input onChange={getInputValue} type="password" className='form-control my-2'name='password' />
        </div>
       <div className="d-flex justify-content-end">
       <button className='btn btn-info my-3 '>Login</button>
       </div>
      </form>
    </div>

    </>
  )
}
