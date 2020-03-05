import React from "react";

import MovieItem from "./MovieItem"

const movie  = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: ""
}
export const App = () => {
  
    return (
    <div>
        <MovieItem data={movie}/>
    </div>
    )
  
}
