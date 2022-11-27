import{ useState ,useEffect} from 'react'
import axios from 'axios'
import { createContext } from "react";

export let MediaContext=createContext(0);
export default function MediaContextProvider(props){

    let [trendingMovies,setTrendingMovies] = useState([])
    let [trendingTvs,setTrendingTvs] = useState([])
    let [trendingPeople,setTrendingPeople] = useState([])

    useEffect(() => {
        getTrendingItems('movie',setTrendingMovies);
        getTrendingItems('tv',setTrendingTvs);
        getTrendingItems('person',setTrendingPeople);
        console.log(trendingMovies);
       
      }, [])
    
    let getTrendingItems= async(mediaType,callback)=>{
        let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f9b964d36108444f157560fa49b43c22`);
        
        callback(data.results)
    
       
    
      }

      return<MediaContext.Provider value={{trendingMovies,trendingTvs,trendingPeople}}>
        {props.children}
      </MediaContext.Provider>



}