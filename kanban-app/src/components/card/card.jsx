import React from "react";
import "./style.css";
import { MdCheckCircleOutline } from "react-icons/md";
import { CgRecord } from "react-icons/cg";
import Draggable from 'react-draggable'




function Card(props) {
    
    const nodeRef = React.useRef(null);

    let updateCard = {
        id: props.id,
        task: props.title,
        status: props.status,
        date:props.timestamp,
    }
    let draggedCard = {}

    function handleDelete() {
        let selectedCard = {
            id: props.id,
            status: props.status
        }
        props.onTaskRemove(selectedCard)
    }

    function handleStateChange(){
        props.onTaskChangeForward(updateCard)
    }


    function handleStart(e){
        updateCard={...updateCard, x:e.pageX, y:e.pageY}
    }
    function handleStop(e){
        draggedCard = {...updateCard}
        draggedCard.x = e.pageX;
        draggedCard.y = e.pageY;
        if(draggedCard.x> updateCard.x /*&&draggedCard.x<window.innerWidth/2*/){
            updateCard=draggedCard;
            props.onTaskChangeForward(updateCard);
            }

        // else if(draggedCard.x> updateCard.x && draggedCard.x>(window.innerWidth/2)){
        //         updateCard=draggedCard;
        //         updateCard.status='Last'
        //         props.onTaskChangeForward(updateCard)
        // }
       
        else if(draggedCard.x< updateCard.x){
            updateCard=draggedCard;
            props.onTaskChangeBackwards(updateCard)
        }
    //     else if(draggedCard.x< updateCard.x && draggedCard.x<(window.innerWidth/2)){
    //         updateCard=draggedCard;
    //         updateCard.status='First';
    //         props.onTaskChangeBackwards(updateCard)
    // }

    }

    return (
        <Draggable
        nodeRef={nodeRef}
        onStop={handleStop}
        onMouseDown={handleStart}>
        <div className="card__container" ref={nodeRef}>
            <div className='icons'>
                <div className='task__state__title__container'>
                <div className='task__state'>{props.doneClass === true ? <MdCheckCircleOutline /*className='done__icon'*/ margin="7px" color="#cb2431" fontSize="1.2em"/> : <CgRecord /*className='notDone__icon'*/ margin="7px" color= "#22863a" fontSize="1.2em"/>}</div>
                <h3 className='task__title' onClick={handleStateChange}>{props.title}</h3>
                </div>
                <div className='icon__right'><button onClick={handleDelete} className='delete__button'>🗑️</button></div>
            </div>
            <p className="p__card"> {props.id} created on {props.timestamp} </p>
        </div>
        </Draggable>
    )
}
export default Card;


