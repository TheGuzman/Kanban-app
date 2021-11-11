import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import NewTaskGenerator from '../new-task-generator/new-task-generator'
import Card from '../card/card'
import React from 'react'
import ClearAllButton from '../clear-all-button/clear-all'


function Column() {

    const taskColumns = [
        {
            id: 1,
            title: 'Todo',
            cards: []
        },
        {
            id: 2,
            title: 'In progress',
            cards: []
        }
    ]

    const doneColumn = [
        {
            id: 3,
            title: 'Done',
            cards: []
        }
    ]

    return (
        <React.Fragment>
            <div className='columns__container'>
                {taskColumns.map(c => <div key={c.id} className={'column ' + c.title}>
                    <div className='column__header'>
                        <Counter></Counter>
                        <h3>{c.title}</h3>
                        <AddTaskButton></AddTaskButton>
                    </div>
                    <Card></Card>
                </div>)}
                {doneColumn.map(c => <div key={c.id} className={'column ' + c.title}>
                    <div className='column__header'>
                        <Counter></Counter>
                        <h3>{c.title}</h3>
                        <div className='clear-all__container'>
                            <AddTaskButton></AddTaskButton>
                            <ClearAllButton></ClearAllButton>
                        </div>
                    </div>
                    <Card></Card>
                </div>)}
            </div>
        </React.Fragment>
    )
}

export default Column