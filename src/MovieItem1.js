import React, {useState} from "react";
import Image from "./components/Image"
//import MoviesData from './MoviesData'

 const MovieItem = (props) => {
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false);
    const [willWatch, setWatch] = useState(false);
    //const [movies, setMovies] = useState(MoviesData);
    
     const toggleOverview = () => {
        setShow(!show);
     }
     const handleLike = () => {
         setLike(!like);
     }
     const handleWatch = () => {
        setWatch((prevState) =>({
            willWatch: !prevState }));
     }

     
    //  const handleWillWatch = () => {
    //      setWatch()
    //  }

     const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = props
    //  const [{ vote_average, title,  poster_path, overview}] = props
     //const {data: {title, vote_average, overview, poster_path}} = props;
    return(
        
        <div className="m-2  max-w-sm rounded overflow-hidden shadow-lg">
            
            
            <Image className='w-full' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt={movie.title}/>
            <div className="px-6 py-4">    
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                {show === true ? <p className='z-40 text-gray-700 text-base'>{movie.overview}</p> : null}
            </div>
            <div className='px-6 py-4'>
                <button type="button" className={like ? "mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded outline-none" : "mr-2 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded focus:outline-none"} onClick={handleLike}>Like</button>
                
                <button type="button" className='mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={toggleOverview}>{show ? 'hide' : 'show'}</button>
                

                <button type="button" className='m-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded' onClick={removeMovie.bind(null, movie)}>Delete movie</button>

                <p>{movie.vote_average}</p>

                {willWatch ? 
                  (<button type="button" className='m-auto bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded' onClick={() => {handleWatch(); 
                     removeMovieFromWillWatch(movie);}}>Remove Will watch</button>) : (<button type="button" className='m-auto bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded focus:outline-none' onClick={() =>  {handleWatch();
                    addMovieToWillWatch(movie);}}>Add Will watch</button> ) 
                }
                

               
                
            </div>
            
            
            
             
        </div>
        
    )
}
export default MovieItem