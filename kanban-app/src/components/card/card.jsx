import React from "react";
import "./style.css";
import { MdCheckCircleOutline } from "react-icons/md";
// import { ImRadioChecked } from "react-icons/im";
import { CgRecord } from "react-icons/cg";



function Card(props) {

    function handleDelete() {
        let selectedCard = {
            id: props.id,
            status: props.status
        }

        props.onTaskRemove(selectedCard)
    }

    function handleStateChange(){
        let updateCard = {
            id: props.id,
            task: props.title,
            status: props.status,
            date:props.timestamp,
        }
        console.log(updateCard)

        props.onTaskChange(updateCard)
    }
    return (
        <div className="card__container">
            <div className='icons'>
                <div className='task__state__title__container'>
                <div className='task__state'>{props.doneClass === true ? <MdCheckCircleOutline /*className='done__icon'*/ margin="7px" color="#cb2431" fontSize="1.2em"/> : <CgRecord /*className='notDone__icon'*/ margin="7px" color= "#22863a" fontSize="1.2em"/>}</div>
                <h3 className='task__title' onClick={handleStateChange}>{props.title}</h3>
                </div>
                <div className='icon__right'><button onClick={handleDelete} className='delete__button'>🗑️</button></div>

            </div>

            <p className="p__card"> {props.id} created on {props.timestamp} </p>
        </div>

    )
}
export default Card;


