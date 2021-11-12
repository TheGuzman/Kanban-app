import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React from 'react'
import ClearAllButton from '../clear-all-button/clear-all'


function DoneColumn(props) {


    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter></Counter>
                <h3>{props.title}</h3>
                <div className='clear-all__container'>
                    <AddTaskButton></AddTaskButton>
                    <ClearAllButton></ClearAllButton>
                </div>
            </div>
            <Card></Card>
        </div>
    )
}

export default DoneColumn

