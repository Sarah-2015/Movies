import React, { useState,useEffect, useContext } from 'react';
import {createBrowserRouter , createHashRouter, Navigate, RouterProvider} from 'react-router-dom';
import  { AuthContext } from '../../Context/AuthContext';
import { Offline, Online } from "react-detect-offline";
import MasterLayout from "../MasterLayout/MasterLayout";
import About from "./../About/About";
import Movies from "./../Movies/Movies";
import Tvshows from "./../Tvshows/Tvshows";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import People from "./../People/People";
import Home from "./../Home/Home";
import NotFound from "./../NotFound/NotFound";
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Details from '../Details/Details';







export default function App() {
  let {userData,logout,saveUserData} = useContext(AuthContext);
  let routes= createHashRouter([
    {path:'', element: <MasterLayout /> , 
    children:[
      {index:true ,element: <ProtectedRoute><Home /></ProtectedRoute> },
      {path:'about', element: <About />},
      {path:'movies', element: <ProtectedRoute><Movies /></ProtectedRoute>},
      {path:'people', element: <ProtectedRoute><People /></ProtectedRoute>},
      {path:'tvshows', element: <ProtectedRoute><Tvshows /></ProtectedRoute>},
      {path:'details/:type/:id', element: <ProtectedRoute><Details /></ProtectedRoute>},
      {path:'profile', element: <ProtectedRoute><Profile/></ProtectedRoute>},
      {path:'*', element: <NotFound />},
      {path:'register', element: <Register />},
      {path:'login', element: <Login  />}
  
      
    ]},
  ]);
  return (
    <>
    
    <RouterProvider router={routes} />
    <Offline><div className='offline shadow bg-danger'>You are offline</div></Offline>
    
    </>
  )
};















