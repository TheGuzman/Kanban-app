import React from "react";
import "./style.css";


function Card(props) {

    function handleDelete() {
        props.onTaskRemove(true)
    }

    return (
        
        <div className="card__container">
            <div className='icons'>
                <div className={`icon__left ` + `${props.doneClass}`}><p className={`p__icon--left ` + `${props.doneClass}`}>•</p></div>
                <h1>{props.title}</h1>

                <div className='icon__right'><button onClick={handleDelete} className='delete__button'>🗑️</button></div>

            </div>

            <p className="p__card"> {props.id} created on {props.timestamp} </p>
        </div>

    )
}
export default Card;


