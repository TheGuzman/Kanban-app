import React from "react"
import './style.css'
import Column from '../../components/column/column'
import { useState } from "react";



function TaskBoard() {

    let arrTaskTodo = [];
    let arrTaskPending = [];
    let arrTaskDone = [];

    const arrColumns = [
        {
            title: 'To do',
            status: 'Todo',
            taskNum: arrTaskTodo.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskTodo,
            doneClass:false,
        },
        {
            title: 'Pending',
            status: 'Pending',
            taskNum: arrTaskPending.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskPending,
            doneClass:false,
        },
        {
            title: 'Done',
            status: 'Done',
            taskNum: arrTaskDone.length,
            clearAll: true,
            AddButton: true,
            tasks: arrTaskDone,
            doneClass:true,
        },
    ]



    let [arr, updateArr] = useState(arrColumns)
    let [counter, updateCounter] = useState(0)
    // let [stateChange, setStateChange] = useState([])




    const onTaskAdd = newtask => {
        const column = arr.find(c => c.status === newtask.status);
        column.tasks.push(newtask);
        column.taskNum++;
        updateArr([...arr]); //update del board
        updateCounter(counter=>counter+1);
        console.log(newtask)
       
    }

    const onTaskRemove = selectedCard => {
        const column = arr.find(c => c.status  === selectedCard.status);
        const card = column.tasks.find(c => c.id  === selectedCard.id);
        const i = column.tasks.indexOf(card);
        column.tasks.splice(i,1);
        updateArr([...arr])
        column.taskNum--;
    }



    return (
        <div className='columns__container'>
            {arr.map((e, i) => <Column key={i} title={e.title} status={e.status} clearAll={e.clearAll} tasks={e.tasks} doneClass={e.doneClass} counter={counter} taskNum={e.taskNum} AddButton={e.AddButton} onTaskAdd={onTaskAdd} onTaskRemove={onTaskRemove}></Column>)}
        </div>
    )
}

export default TaskBoard