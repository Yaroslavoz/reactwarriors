import React from "react";

const Image = (props) => {
    console.log("Image props ", props);
    
    return (
       <img src={props.src} alt={props.alt} /> 
    )
}

export default Image