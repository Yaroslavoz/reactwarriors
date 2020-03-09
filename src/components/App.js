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
      movies: MoviesData
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter((it) => it.id !== movie.id)
    this.setState({
      movies: updateMovies
    });
  }
  
  render(){
    console.log('render', this.state, this);
    
    return (
          <div>
            {this.state.movies.map(movie => {
              return (
                <MovieItem 
                  key = {movie.id}
                  movie = {movie}
                  removeMovie = {this.removeMovie}
                />  
              )
            })}
          </div>
      );
    }
}

export default App;