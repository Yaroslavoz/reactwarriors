import React from "react";
// import MoviesData from '../MoviesData'
import MovieItem from "./MovieItem"
import {API_URL, API_KEY_3} from '../utils/api'
import MovieTabs from "./MovieTabs";
import Pagination from './Pagination'



 class App extends React.Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      currentPage: 1,
      total_pages: 0
    };
  }

 

  componentDidUpdate(prevProps, prevState) {
   
   return (prevState.sort_by !== this.state.sort_by)  || (prevState.currentPage !== this.state.currentPage ) ? this.getMovies() : ''   
  }

  componentDidMount (){
     this.getMovies()
    //  this.getPages()

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

  updateSorting = value => {
    this.setState({
      sort_by: value
    });
    
  };

  pageUpdate = value => {
    this.setState({
      currentPage: value
    });
    
  };

  // getPages = () => {
  //   fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`).then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     this.setState({
  //       total_pages: data.total_pages
  //     })
  //   })
  // }
  
  
  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({
        movies: data.results,
        total_pages: data.total_pages
      })
    })
  }

prev = () => {
  this.state.currentPage > 1 ? this.setState({currentPage: this.state.currentPage - 1}) : this.setState({currentPage: this.state.currentPage})
}
  
next = () => {
  this.setState({
    currentPage: this.state.currentPage + 1
  })
}

  render(){
    console.log('render', this.state, this);
    
    return (
          <div className='root-bg bg-fixed bg-indigo-200'>
            
            <div className="container w-3/4 grid grid-cols-1   h-25 mx-auto">
            
              <div className="w-full flex flex-nowrap  justify-between items-center  p-2 rounded-b bg-blue-900 h-12">
                <MovieTabs 
                  sort_by={this.state.sort_by}
                  updateSorting={this.updateSorting}
                  />
                  
                 {/* <div className='mr-8 w-3/4 flex flex-row-reverse fixed items-baseline z-10'> */}
                <p className='fixed right-0 opacity-75 hover:opacity-100 bg-gray-300 text-gray-800 font-bold p-2 rounded inline-flex items-center z-10'>Will watch: {this.state.moviesWillWatch.length}</p>
                {/* </div> */}
              </div>
                
            </div>


            <div className=" container w-3/4 mx-auto grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            
            
            
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
            <div className="container w-3/4 grid grid-cols-1 rounded-t h-25 mx-auto">
              <Pagination 
                    prev={this.prev}
                    next={this.next}
                    handlePage={this.pageUpdate}
                    total_pages={this.state.total_pages}
                    currentPage={this.state.currentPage}
              />
            </div>
        </div>
      );
    }
}

export default App;