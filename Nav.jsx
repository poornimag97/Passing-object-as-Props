import React from "react";

const Nav=(props)=>{
    return(
        <>
        <h1>{props.data.username}</h1>
        <h2>{props.data.password}</h2>
        
        </>
    )
}
export default Nav;