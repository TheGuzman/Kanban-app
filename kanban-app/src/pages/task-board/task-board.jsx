import React from "react"
import './style.css'
import Column from '../../components/column/column'
import { useState } from "react";


function TaskBoard() {

    let Todo='';
    let Pending='';
    let Done='';

    let arrTaskTodo = [];
    let arrTaskPending = [];
    let arrTaskDone = [];


    const arrColumns = [
        Todo = {
            title: 'To do',
            status: 'Todo',
            counter: arrTaskTodo.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskTodo,
        },
        Pending = {
            title: 'Pending',
            status: 'Pending',
            counter: arrTaskPending.length,
            clearAll: false,
            AddButton: true,
            tasks: arrTaskPending,
        },
        Done = {
            title: 'Done',
            status: 'Done',
            counter: arrTaskDone.length,
            clearAll: true,
            AddButton: true,
            tasks: arrTaskDone,
        },
    ]



  




    let [newTask, newTaskisAdded] = useState(false)
    // let [removedTask, setremovedTask] = useState(false)
    // let [stateChange, setStateChange] = useState([])



    const onTaskAdd = newtask => {

        switch(newtask.status){
        case 'Todo': 
            arrTaskTodo.push(newtask)
            console.log(arrColumns[0].tasks); break;

        case 'Pending': 
            arrTaskPending.push(newtask)
            console.log(arrTaskPending); break;

        case 'Done': 
            arrTaskDone.push(newtask)
            console.log(arrTaskDone); break;
    }
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
            {arrColumns.map((e,i) => <Column key={i} title={e.title} status={e.status} counter={e.counter} clearAll={e.clearAll} AddButton={e.AddButton} tasks={e.tasks} onTaskAdd={onTaskAdd}></Column>)}
        </div>
    )
}

export default TaskBoard