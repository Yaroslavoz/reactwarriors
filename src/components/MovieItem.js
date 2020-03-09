import React, {useState} from "react";
import Image from "./Image"
//import MoviesData from './MoviesData'

 const MovieItem = (props) => {
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false);
    //const [movies, setMovies] = useState(MoviesData);

     console.log("MovieItem state = ", show, like);
    //  console.log(props);
     const toggleOverview = () => {
        setShow(!show);
     }
     const handleLike = () => {
         setLike(!like);
     }

     
    //  const [{ vote_average, title,  poster_path, overview}] = props
     //const {data: {title, vote_average, overview, poster_path}} = props;
    return(
        
        <div className="mt-5 m-auto max-w-sm rounded overflow-hidden shadow-lg">
            
            
            <Image className='w-full' src={props.poster_path} alt={props.title}/>
            <div className="px-6 py-4">    
                <div className="font-bold text-xl mb-2">{props.title}</div>
                {show === true ? <p className='text-gray-700 text-base'>{props.overview}</p> : null}
            </div>
            <div className='px-6 py-4'>
                <button type="button" className={like ? "mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded outline-none" : "mr-2 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded focus:outline-none"} onClick={handleLike}>Like</button>
                
                <button type="button" className='mr-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={toggleOverview}>{show ? 'hide' : 'show'}</button>
                <p>{props.vote_average}</p>

                <button type="button" className='mr-auto bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded' onClick={props.removeMovie.bind(null, props.movie)}>Delete movie</button>
                <p>{props.vote_average}</p>
                
            </div>
            
            
            
             
        </div>
        
    )
}
export default MovieItem