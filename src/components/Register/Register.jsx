import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Register() {
 
  const [user, setUser] = useState({

    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: ""
    
  })
  const [errorMsg, setErrorMsg] = useState("")
  const [errorlist, setErrorList] = useState([])
  const [loading, setLoading] = useState(false)

  let navigate=useNavigate();

  let getInputValue=(e)=>{
    let myUser = { ...user }
    myUser[e.target.name]=e.target.value
    setUser(myUser)
   
  }

  let validateRegisteration=()=>{
   let schema= Joi.object({
    first_name:Joi.string().alphanum().required().min(3).max(7),
    last_name:Joi.string().alphanum().required().min(3).max(7),
    age:Joi.number().required().min(18).max(80),
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
  let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signup',user)
  console.log(data); 
  if(data.message=='success') 
  {
    setLoading(false)
    navigate('/login')
  }
  else{
   
    setErrorMsg(data.message)
    setLoading(true)

  }
  }

   
  }
  

  return (
    <>
    <div className='w-75 m-auto py-5'>
      <h2>Registeration Form</h2>
      
{errorlist.map((error,index)=>error.context.label=="password"?<div key={index} className='alert alert-danger p-2'>invalid password</div>:<div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
    {errorMsg? <div className='alert alert-danger p-2'>{errorMsg}</div>:""}
 
      <form onSubmit={submitFormData} className='my-3'>
        <div className='my-2'>
          <label htmlFor='first-name'>first Name</label>
          <input onChange={getInputValue} type="text" className='form-control my-2 ' name="first_name" />
        </div>
        <div className='my-2'>
          <label htmlFor='last-name'>last Name</label>
          <input onChange={getInputValue}  type="text" className='form-control my-2' name="last_name" />
        </div>
        <div className='my-2'>
          <label htmlFor='age'>Age</label>
          <input onChange={getInputValue} type="number" className='form-control my-2' name='age' />
        </div>
        <div className='my-2'>
          <label htmlFor='email'>email</label>
          <input onChange={getInputValue} type="email"  className='form-control my-2' name='email' />
        </div>
        <div className='my-2'>
          <label htmlFor='password'>Password</label>
          <input onChange={getInputValue} type="password" className='form-control my-2' name='password' />
          {errorlist.map((error,index)=>error.context.label=="password"?<p key={index} className=' text-danger invalid-feedback'>Wrong password</p>:"")}
        </div>
       <div className="d-flex justify-content-end">
       <button className='btn btn-info my-3 '>{loading?<i className="fa-solid fa-spinner fa-spin"></i>:"Register"}</button>
       </div>
      </form>
    </div>
    </>
  )
}
