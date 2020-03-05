import React from "react";

import MovieItem from "./MovieItem"

const movie  = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://i.ibb.co/s5kf06c/Mlgy.gif"
}
export const App = () => {
  
    return (
    <div>
        <MovieItem data={movie}/>
    </div>
    )
  
}
