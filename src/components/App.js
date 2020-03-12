import React from "react";
import MoviesData from '../MoviesData'
import MovieItem from "./MovieItem"



//  {
//   title: "Avengers: Infinity Stallone",
//   vote_average: 8.5,
//   image: "https://i.ibb.co/s5kf06c/Mlgy.gif",
//   overview: 'This is John Rembo Spartanian '
// }
 class App extends React.Component {
  constructor(){
    super();

    this.state = {
      movies: MoviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter((it) => it.id !== movie.id)
    this.setState({
      movies: updateMovies
      
    });
  }
  
  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch =[...this.state.moviesWillWatch, movie]
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
    
  };
  removeMovieFromWillWatch = movie => {
    const updateMoviesRemove = this.state.moviesWillWatch.filter((it) => it.id !== movie.id)
    this.setState({
      moviesWillWatch: updateMoviesRemove
      
    });
  }

  render(){
    console.log('render', this.state, this);
    
    return (
          <div >
            
            <div className=" w-3/4 mx-auto grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className='w-3/4 flex flex-row-reverse   fixed '>
              <p className='ml-12 opacity-75 hover:opacity-100 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Will watch: {this.state.moviesWillWatch.length}</p>
            </div>
            
              {this.state.movies.map(movie => {
                return (
                  <MovieItem 
                    key = {movie.id}
                    movie = {movie}
                    removeMovie = {this.removeMovie}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />  
                )
              })}
            </div>
            
          </div>
      );
    }
}

export default App;