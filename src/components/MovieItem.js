import React from "react";

 const MovieItem = (props) => {
     console.log("props = ", props);
     const {data: {title, vote_average}} = props;
    return(
        <div>
            <p>{title}</p>
            <p>{vote_average}</p>
        </div>
    )
}
export default MovieItem