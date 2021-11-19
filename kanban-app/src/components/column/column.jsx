import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import React from 'react'
import Card from '../card/card'
import ClearAllButton from '../clear-all-button/clear-all'

function Column(props) {



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
                <div className='info__header'>
                    <Counter taskNum={props.taskNum}></Counter>
                    <h3 className='column__title'>{props.title}</h3>
                </div>
                <AddTaskButton onTaskAdd={props.onTaskAdd} status={props.status} title={props.title} counter={props.counter} doneClass={props.doneClass}></AddTaskButton>
                {props.doneClass === true ?
                    <ClearAllButton onClearAll={props.onClearAll} title={props.title} tasks={props.tasks} className='clear-all__button'></ClearAllButton> : null}
            </div>
            {props.tasks.map((t, i) => <Card onTaskRemove={props.onTaskRemove} onStateChange={props.onStateChange} title={t.task} status={t.status} timestamp={t.date} id={t.id} key={i} doneClass={props.doneClass} onTaskChange={props.onTaskChange}></Card>)}
        </div>
    )
}

export default Column
