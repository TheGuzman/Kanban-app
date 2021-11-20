import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import React from 'react'
import Card from '../card/card'
import { useState } from 'react'
import NewTaskGenerator from '../new-task-generator/new-task-generator'


function Column(props) {

    let [isClicked, setClick] = useState(false);
    const onShowTaskGenerator = state => setClick(state)

    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <div className='info__header'>
                    <Counter taskNum={props.taskNum}></Counter>
                    <h3 className='column__title'>{props.title}</h3>
                </div>
                <AddTaskButton onTaskAdd={props.onTaskAdd} onShowTaskGenerator={onShowTaskGenerator} onClearAll={props.onClearAll} tasks={props.tasks} status={props.status} title={props.title} counter={props.counter} doneClass={props.doneClass}></AddTaskButton>
                {isClicked !== false ?
                <NewTaskGenerator onTaskAdd={props.onTaskAdd} status={props.status} counter={props.counter} title={props.title} onShowTaskGenerator={onShowTaskGenerator}></NewTaskGenerator>
            : null}
            </div>
            {props.tasks.map((t, i) => <Card onTaskRemove={props.onTaskRemove} onTaskChangeForward={props.onTaskChangeForward} onTaskChangeBackwards={props.onTaskChangeBackwards} title={t.task} status={t.status} timestamp={t.date} id={t.id} key={i} doneClass={props.doneClass} onTaskChange={props.onTaskChange}></Card>)}
        </div>
    )
}

export default Column
