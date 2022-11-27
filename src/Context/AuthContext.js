import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";



export let AuthContext=createContext(0);

export default function AuthContextProvider(props){
    let [userData, setUserData] = useState(null)

    useEffect(() => {
      if(localStorage.getItem('token'))
    {
      saveUserData();
    }
    }, [])

    let saveUserData=()=>{
      let encodedToken= localStorage.getItem('token');
      let decodedToken=jwtDecode(encodedToken);
      setUserData(decodedToken);
      
    }
    
    let logout=()=>{
      localStorage.removeItem('token')
      setUserData(null)
      return <Navigate to="/login"/>
    }


    return <AuthContext.Provider value={{userData,logout,saveUserData}}>
        {props.children}
    </AuthContext.Provider>
  
}

