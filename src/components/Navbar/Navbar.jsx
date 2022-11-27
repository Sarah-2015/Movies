import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from './Navbar.module.scss';


export default function Navbar() {
  let {userData,logout} = useContext(AuthContext)
  return (
    <nav className={`navbar navbar-expand-lg   ${styles.bgNav} ` }>
    <div className="container-fluid">
      <a className="navbar-brand fw-bold fs-3" >Noxe</a>
      <button className="navbar-toggler bg-white text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link "  aria-current="page" to={''}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={"movies"}>Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={'tvshows'}>Tv Shows</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={'people'}>People</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={'about'}>About</Link>
          </li>
         
          </ul>:''}
        

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="d-flex align-items-center  me-4">
            <i className="fab fa-facebook "></i>
            <i className="fab fa-spotify ms-3"></i>
            <i className="fab fa-instagram ms-3"></i>
            <i className="fab fa-youtube ms-3"></i>
          </li>
      
          {userData?<><li className="nav-item d-flex align-items-center justify-content-center">
            <Link className="nav-link" to={'profile'} title="profile"><i className="fa-solid fa-user text-info fs-4  "></i></Link>
          </li>
          <li><Link className="nav-link btn btn-outline-info "  onClick={logout}>Logout</Link></li></>
          :
          <><li className="nav-item">
            <Link className="nav-link " aria-current="page" to={'login'}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to={'register'}>Register</Link>
          </li>
          </>}
       
  
          </ul>


     
     
      </div>
    </div>
  </nav>
  )
}
