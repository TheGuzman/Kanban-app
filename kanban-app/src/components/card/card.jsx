import React from "react";
import "./style.css";


function Card(props) {

    function handleDelete() {
        let num = props.id
        num = num.split('#')[1]
        localStorage.removeItem(`task_${num}`)
        props.onTaskRemove(true)
    }

    function changeState() {
        
        let num = props.id; //obtenemos el número de task para traer ese objeto del local
        num = num.split('#')[1];
        let selectedTask = JSON.parse(localStorage.getItem(`task_${num}`));
        let newState='';

        switch(props.state){ //Switch para cambiar los estados en función del estado actual
            case 'Todo': newState='Inprogress';
                break;
            case 'Inprogress': newState='Done';
                break;
             default : newState=props.state; break;
        }

        // selectedTask.state = newState;
        selectedTask={ //Dejamos todas las propiedades igual excepto el estado
            date: props.timestamp,
            id: props.id,
            state: newState,
            task: props.title,
        }
        localStorage.setItem(`task_${num}`,JSON.stringify(selectedTask));
        // window.location.reload() //he tenido que usar el reload
        props.onStateChange(selectedTask); //Este state no funciona
        console.log(selectedTask)
    }

    return (
        
        <div className="card__container">
            <div className='icons'>
                <div className={`icon__left ` + `${props.doneClass}`}><p className={`p__icon--left ` + `${props.doneClass}`}>•</p></div>
                <h1 onClick={changeState}>{props.title}</h1>

                <div className='icon__right'><button onClick={handleDelete} className='delete__button'>🗑️</button></div>

            </div>

            <p className="p__card"> {props.id} created on {props.timestamp} </p>
        </div>

    )
}
export default Card;


