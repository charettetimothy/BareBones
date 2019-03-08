import React from 'react';
import "../App.css";

const Image = (props) => {
    // console.log(props)
    return(
        <img src={props.src} onClick={props.handleClick} alt={"cassette"}></img>
    )
}

export default Image