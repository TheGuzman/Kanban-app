import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React from 'react'
import ClearAllButton from '../clear-all-button/clear-all'


function Column() {

    const taskColumns = [
        {
            id: 1,
            title: 'To do',
        },
        {
            id: 2,
            title: 'In progress',
        }
    ]

    const doneColumn = [
        {
            id: 3,
            title: 'Done',
        }
    ]



    return (
        <React.Fragment>
            <div className='columns__container'>

                {taskColumns.map(c => 
                <div key={c.id} className={'column ' + c.title}>
                    <div className='column__header'>
                        <Counter></Counter>
                        <h3>{c.title}</h3>
                        <AddTaskButton title={c.title}></AddTaskButton>
                    </div>
                    <Card></Card>
                </div>)}

                {doneColumn.map(c => 
                <div key={c.id} className={'column ' + c.title}>
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

