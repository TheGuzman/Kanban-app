import React from "react"
import './style.css'
import Column from '../../components/column/column'
import { useState } from "react";



function TaskBoard() {

    let arrTaskTodo = [];
    let arrTaskPending = [];
    let arrTaskDone = [];

    let counter = 0;

    const arrColumns = [
        {
            title: 'To do',
            status: 'Todo',
            counter: arrTaskTodo.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskTodo,
            doneClass:false,
        },
        {
            title: 'Pending',
            status: 'Pending',
            counter: arrTaskPending.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskPending,
            doneClass:false,
        },
        {
            title: 'Done',
            status: 'Done',
            counter: arrTaskDone.length,
            clearAll: true,
            AddButton: true,
            tasks: arrTaskDone,
            doneClass:true,
        },
    ]








    let [arr, updateArr] = useState(arrColumns)
    // let [removedTask, setremovedTask] = useState(false)
    // let [stateChange, setStateChange] = useState([])



    const onTaskAdd = newtask => {
        const column = arr.find(c => c.status === newtask.status);
        column.tasks.push(newtask);
        counter++;
        updateArr([...arr]);
    }

    // const onTaskRemove = () => {
    //     removedTask === true ? setremovedTask(false) : setremovedTask(true);
    // }

    // const onStateChange = selectedTask => {
    //     stateChange.push(selectedTask);
    //     cloneAllTasks = [...stateChange]
    //     console.log(cloneAllTasks);
    // }

    return (
        <div className='columns__container'>
            {arr.map((e, i) => <Column key={i} title={e.title} status={e.status} counter={e.counter} clearAll={e.clearAll} tasks={e.tasks} doneClass={e.doneClass} AddButton={e.AddButton} onTaskAdd={onTaskAdd}></Column>)}
        </div>
    )
}

export default TaskBoard