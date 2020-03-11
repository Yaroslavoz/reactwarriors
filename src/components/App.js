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
          <div>
            <div className=" w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2       lg:grid-cols-3 xl:grid-cols-4">
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
            <div>
              <p>Will watch: {this.state.moviesWillWatch.length}</p>
            </div>
          </div>
      );
    }
}

export default App;