import React,{ useState ,useEffect,useContext} from 'react'
import { Helmet } from 'react-helmet';


import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaStore'
import Loading from '../Loading/Loading'

export default function Movies() {
  let {trendingMovies} = useContext(MediaContext)

  return (

    <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
                
            </Helmet>
    {trendingMovies.length>0?<><div className="row py-4 gy-3">
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
      {trendingMovies.map((item,index)=> <div className="col-md-2" key={index}>
    <Link className='nav-link' to={`/details/${item.media_type}/${item.id}`}>
    <div className='item position-relative' >
        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className='w-100 mb-2'/>
          <h2 className='h6'>{item.title}</h2>
          <div className='bg-info px-1 py-2 position-absolute end-0 top-0'>{item.vote_average?.toFixed(1)}</div>
        </div>
    </Link>
      </div>)}
    </div></>:<Loading/>}
    </>
  )
}
