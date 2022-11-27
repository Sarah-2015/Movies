import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export default function Profile() {
    let {userData}=useContext(AuthContext)
    let {first_name,last_name,age,email}=userData;
  return (
    <div className='py-5 my-5'>
        <h4>Name: {first_name} {last_name}</h4>
        <h4>Age: {age}</h4>
        <h4>Email: {email}</h4>
        
        
    </div>
  )
}
