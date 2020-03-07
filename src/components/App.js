import React from "react";

import MovieItem from "./MovieItem"

const movie  = {
  title: "Avengers: Infinity Stallone",
  vote_average: 8.5,
  image: "https://i.ibb.co/s5kf06c/Mlgy.gif",
  overview: 'This is John Rembo Spartanian '
}
export const App = () => {
  
    return (
    <div>
        <MovieItem data={movie}/>
    </div>
    )
  
}
