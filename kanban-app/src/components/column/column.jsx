import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React from 'react'

function Column(props) {

    let counter = '';
    let cardsToprint='';


    // switch(props.title){
    //     case 'To do':
    //     counter = props.counter;    
    //     cardsToprint= props.tasks.map((t, i)=><Card onTaskRemove={props.onTaskRemove} title={t.task} status={t.status} timestamp={t.date} id={t.id} key={i}></Card>); 
    //                 break;

    //     case 'In progress':
    //     counter = props.counter;  
    //     cardsToprint= props.task.map((t, i)=> <Card onTaskRemove={props.onTaskRemove} title={t.task} status={t.status}  timestamp={t.date} id={t.id} key={i}></Card>); 
    //                 break;

    //     case 'Done': 
    //     counter = props.counter; 
    //     cardsToprint= props.task.map((t, i)=> <Card onTaskRemove={props.onTaskRemove} title={t.task} status={t.status}  timestamp={t.date} id={t.id} key={i} doneClass='done'></Card>); 
    //                 break;
    //     default : 
    //     counter=0;
    //     cardsToprint=''; break;

    // }


    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter counter={counter}></Counter>
                <h3>{props.title}</h3>
                <AddTaskButton onTaskAdd={props.onTaskAdd} status={props.status} title={props.title}></AddTaskButton>
            </div>
            {cardsToprint}
        </div>
    )
}

export default Column
