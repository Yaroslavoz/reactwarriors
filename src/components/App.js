import React, {useState} from "react";
 import MoviesData from '../MoviesData'
import MovieItem from "./MovieItem"



//  {
//   title: "Avengers: Infinity Stallone",
//   vote_average: 8.5,
//   image: "https://i.ibb.co/s5kf06c/Mlgy.gif",
//   overview: 'This is John Rembo Spartanian '
// }
export const App = () => {
     
    
  const [movies, setMovies]  = useState(MoviesData);
  
  const removeMovie = (e) => {
    const updateMovies = movies.filter((it) => it.id !== e.target.id );
    
    
    setMovies({
      movies: updateMovies
    });
    console.log(updateMovies);
  }

  console.log(movies)
    return (
      <div>
      {movies.map(movie => {
        return (
       <div>   
        <p>{movie.title}</p>
          <button className='mr-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={removeMovie}>Delete</button>
        </div> )
      })}
    </div>
    // <div>
    //     <MovieItem data={movies[0]}/>
    // </div>
    )
  
}
