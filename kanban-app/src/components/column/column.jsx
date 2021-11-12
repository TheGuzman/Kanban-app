import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React from 'react'


function Column(props) {

    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter></Counter>
                <h3>{props.title}</h3>
                <AddTaskButton title={props.title}></AddTaskButton>
            </div>
            <Card></Card>
        </div>
    )
}

export default Column
