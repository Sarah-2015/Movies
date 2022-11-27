import React,{ useState ,useEffect, useContext} from 'react'
import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaStore'
import Loading from '../Loading/Loading'




export default function People() {

 let {trendingPeople} = useContext(MediaContext)



  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
                
            </Helmet>
            {trendingPeople.length>0?<><div className="row py-4 gy-3 ">
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
      {trendingPeople.map((item,index)=>item.profile_path? <div className="col-md-2" key={index}>
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
