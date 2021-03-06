import React from "react";
import Image from "./Image"

class MovieItem extends React.Component {
  state = {
    willWatch: false,
    like: false,
    show: false,
    start_link: 'https://image.tmdb.org/t/p/w500',
    default_link: '../css/sparta.gif'

  };
   toggleOverview = () => {
    const neShow = !this.state.show
     this.setState({show:neShow});
 }
  handleLike = () => {
    const neLike = !this.state.like
     this.setState({like:neLike});
 }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;
    // props.data = {};
    return (
        <div className="flex flex-wrap h-auto bg-indigo-700  content-between hover:bg-indigo-800 m-2 sm:mx-auto md:m-2 lg:m-2 xl:m-2 rounded overflow-hidden shadow-2xl transition ease-in-out duration-700 transform hover:-translate-y-2 hover:scale-110 py-auto ">
            
            
        
        <div className="  py-auto "> 
             <Image className='w-full' src={ `${this.state.start_link}${movie.backdrop_path || movie.poster_path }` ? `${this.state.start_link}${movie.backdrop_path || movie.poster_path }` : this.state.start_link } alt={movie.title}/>   
                
              <div className="font-bold text-xl mb-2 p-2">{movie.title}</div>
              
                {this.state.show === true ? <p className='z-40 p-2 text-white text-base'>{movie.overview}</p> : null}
            </div>
            <div className='px-2 py-2 mb-0'>
                <button type="button" className={this.state.like ? "m-1 mr-2 h-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-auto px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded outline-none" : "mr-2 h-auto bg-gray-500 hover:bg-gray-400 text-white font-bold py-auto px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded focus:outline-none"} onClick={this.handleLike}>Like</button>
                
                <button type="button" className='m-1 mr-2 h-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-auto px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={this.toggleOverview}>{this.state.show ? 'hide' : 'show'}</button>
                

                <button type="button" className='m-1 h-auto bg-red-500 hover:bg-red-400 text-white font-bold py-auto px-4 border-b-4 border-red-700 hover:border-red-500 rounded' onClick={removeMovie.bind(null, movie)}>Delete movie</button>

                

            {this.state.willWatch ? (
              <button
                type="button"
                className="m-1 h-auto bg-green-500 hover:bg-green-400 text-white font-bold py-auto px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  });
                  removeMovieFromWillWatch(movie);
                }}
              >
                Will Watch
              </button>
            ) 
            : (
                <button
                  type="button"
                  className="m-auto h-auto bg-gray-500 hover:bg-gray-400 text-white font-bold py-auto px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded focus:outline-none"
                  onClick={() => {
                    this.setState({
                      willWatch: true
                    });
                    addMovieToWillWatch(movie);
                  }}
                >
                  Will Watch
              </button>
              )}
              <p className='p-2'>Vote average: <strong>{movie.vote_average}</strong></p>
          </div>
          


          


        </div>
      
    );
  }
}

export default MovieItem;