import React from "react";
import "./style.css";


function Card(props) {

    function handleDelete(e) {
        let selectedCard= e;
        console.log(selectedCard)
        // props.onTaskRemove(selectedCard)
    }

    return (
        <div className="card__container">
            <div className='icons'>
                <div className={props.doneClass===true?'icon__left__done':'icon__left'}><p className={props.doneClass===true?'p__icon--left__done':'p__icon--left'}>•</p></div>
                <h1>{props.title}</h1>

                <div className='icon__right'><button onClick={handleDelete} className='delete__button'>🗑️</button></div>

            </div>

            <p className="p__card"> {props.id} created on {props.timestamp} </p>
        </div>

    )
}
export default Card;


