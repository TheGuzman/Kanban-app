import React from "react";
import "./style.css";

function Card(props){


   function handleDelete(){
        // console.log(e)
        // console.log(e.view.parent.parent)
        let num = props.id
        num = num.split('#')[1]
        console.log(num);
        localStorage.removeItem(`task_${num}`)
        props.onTaskRemove(true)
    }


    return(
        <div className="card__container">
        <div className='icons'>
            <div className="icon__left"><p className="p__icon--left">&#729;</p></div>
            <h1>{props.title}</h1>
            
            <div className="icon__right"><button onClick={handleDelete} className='delete__button'>🗑️</button></div>
            
        </div>    
            
            <p className="p__card"> {props.id}Created on {props.timestamp} </p>
        </div>
    )
}
export default Card;