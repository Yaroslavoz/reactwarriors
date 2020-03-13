import React from "react";
// import MoviesData from '../MoviesData'
import MovieItem from "./MovieItem"
import {API_URL, API_KEY_3} from '../utils/api'
import MovieTabs from "./MovieTabs";



 class App extends React.Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
  }

  componentDidMount (){
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    })
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
            <div class="container w-3/4 grid grid-cols-1  h-25 mx-auto">
              <div class="w-full    p-2 rounded-b bg-gray-300 h-12">
                <MovieTabs />
              </div>
            </div>


            <div className=" container w-3/4 mx-auto grid grid-rows-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            
            <div className='container w-3/4 flex flex-row-reverse   fixed '>
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