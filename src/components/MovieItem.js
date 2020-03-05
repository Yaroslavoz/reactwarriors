import React from "react";
import Image from "./Image"

 const MovieItem = (props) => {
     console.log("MovieItem props = ", props);
     
     const {data: {title, vote_average, image}} = props;
    return(
        <div>
            <Image src={image} alt={title}/>
            <p>{title}</p>
            <p>{vote_average}</p>
        </div>
    )
}
export default MovieItem