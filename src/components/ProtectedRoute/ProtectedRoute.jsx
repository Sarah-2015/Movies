import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

export default function ProtectedRoute({ children}) {
let {userData}=useContext(AuthContext)
    if(userData==null&&localStorage.getItem('token')==null)
    {
       return <Navigate to="/login"/>;
    }
    else{
        return children;
    }
 
}
