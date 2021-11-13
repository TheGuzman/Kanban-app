import React from "react";
import "./style.css";

function Card(props){
    return(
        <div className="card__container">
        <div className='icons'>
            <div className="icon__left"><p className="p__icon--left"></p></div>
            <h1>{props.title}</h1>
            
            <div className="icon__right"><p>🗑️</p></div>
            
        </div>    
            
            <p className="p__card"> {props.id}Created on {props.timestamp} </p>
        </div>
    )
}
export default Card;