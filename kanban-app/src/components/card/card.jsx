import React from "react";
import "./style.css";

function Card(){
    return(
        <div className="card__container">
        <div className='icons'>
            <div className="icon__left"><p className="p__icon--left"></p></div>
            <h1>Titulo</h1>
            
            <div className="icon__right"><p>🗑️</p></div>
            
        </div>    
            
            <p className="p__card"> #1Created on 10/11/2021 </p>
        </div>
    )
}
export default Card;