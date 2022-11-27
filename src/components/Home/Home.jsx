import React,{ useState ,useEffect, useContext} from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaStore'
import Loading from '../Loading/Loading'
import Typed from "typed.js";


export default function Home() {
  let {trendingMovies,trendingTvs,trendingPeople} = useContext(MediaContext)
 


  return (
    
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                
            </Helmet>

     {trendingMovies.length>0&&trendingTvs.length>0&&trendingPeople.length>0?
      <>
     <div className="row py-4 gy-3">
     
      <div className="col-md-4 d-flex align-items-center">
    <div>
      <hr className='w-25'/>
        <h3>Trending</h3>
        <h3>Movies</h3>
        <h3>To watch now</h3>
        <p className='text-muted'>Most watched movies by days</p>
        <hr/>
   </div>
      </div>
      {trendingMovies.slice(0,10).map((item,index)=> <div className="col-md-2" key={index}>
    <Link className='nav-link' to={`/details/${item.media_type}/${item.id}`}>
    <div className='item position-relative' >
        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className='w-100 mb-2'/>
          <h2 className='h6'>{item.title}</h2>
          <div className='bg-info px-1 py-2 position-absolute end-0 top-0'>{item.vote_average?.toFixed(1)}</div>
        </div>
    </Link>
      </div>)}
    </div>

    <div className="row py-4 gy-3">
      <div className="col-md-4 d-flex align-items-center">
    <div>
      <hr className='w-25'/>
        <h3>Trending</h3>
        <h3>Tv</h3>
        <h3>To watch now</h3>
        <p className='text-muted'>Most watched movies by days</p>
        <hr/>
   </div>
      </div>
      {trendingTvs.slice(0,10).map((item,index)=> <div className="col-md-2" key={index}>
      <Link className='nav-link' to={`/details/${item.media_type}/${item.id}`}>
        <div className='item position-relative' >
        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className='w-100 mb-2'/>
          <h2 className='h6'>{item.name}</h2>
          <div className='bg-info px-1 py-2 position-absolute end-0 top-0'>{item.vote_average?.toFixed(1)}</div>
        </div>
        </Link>
      </div>)}
    </div>

    <div className="row py-4 gy-3">
      <div className="col-md-4 d-flex align-items-center">
    <div>
      <hr className='w-25'/>
        <h3>Trending</h3>
        <h3>People</h3>
        <h3>To watch now</h3>
        <p className='text-muted'>Most watched movies by days</p>
        <hr/>
   </div>
      </div>
      {trendingPeople.slice(2,13).map((item,index)=>item.profile_path? <div className="col-md-2" key={index}>
      <Link className='nav-link' to={`/details/${item.media_type}/${item.id}`}>
        <div className='item' >
        
        
          <img src={`https://image.tmdb.org/t/p/original`+item.profile_path} className='w-100 mb-2'/>
          <h2 className='h6'>{item.name}</h2>
          
        </div>
        </Link>
      </div>:"")}
    </div></>:<Loading/>}       
    
 
    </>
  )
}
