import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'





export default function Details() {
  let params= useParams();
  let [itemDetails, setItemDetails] = useState({})
  let getItemDetails=async()=>{
    let{data}=await axios.get(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=f9b964d36108444f157560fa49b43c22&language=en-US`)
    setItemDetails(data)
    console.log(data);
  }

  useEffect(() => {
  getItemDetails();
  
  
  
  }, [])
  


  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                {itemDetails.title?<title>{itemDetails.title}</title>:<title>{itemDetails.name}</title>}
                
                
            </Helmet>
            {itemDetails!={}?
            <>
            <div className="row py-5">
  
  <div className="col-md-3">
    {params.type=='person'?
    <img className='w-100 h-75' src={`https://image.tmdb.org/t/p/original/${itemDetails.profile_path}`}/>:
    <img className='w-100 h-75' src={`https://image.tmdb.org/t/p/original/${itemDetails.poster_path}`}/>
    }
    </div>
    <div className="col-md-9">
      <h2 className='mb-2'>{itemDetails.name}{itemDetails.title}</h2>
      <ul className='row g-2  list-unstyled'>{itemDetails.genres?.map((item,index)=><li className='bg-info  me-2 rounded p-1 shadow w-auto ' key={index}>{item.name}</li>)}</ul>
      <p className=' py-2 text-muted'>{itemDetails.overview}{itemDetails.biography}</p>
      {itemDetails.birthday?<h6>Birthday: {itemDetails.birthday}</h6>:""}
      {itemDetails.place_of_birth?<h6>Place of birth: {itemDetails.place_of_birth}</h6>:""}
      {itemDetails.vote_average?<h6>Vote: {itemDetails.vote_average?.toFixed(1)}</h6>:""}
      {itemDetails.vote_count?<h6>Vote count: {itemDetails.vote_count}</h6>:""}
      
      
      <h6>Popularity: {itemDetails.popularity?.toFixed(2)}</h6>
      {itemDetails.release_date?<h6>Release Date: {itemDetails.release_date}</h6>:''}
      {itemDetails.homepage?<a className='mt-2 btn btn-danger' href={itemDetails.homepage} target="_">Wathch now</a>:""}
      
    </div></div></>:<Loading/>}

        
      
    </>


  )
}

