import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React, { useState } from 'react'




function Column(props) {

    let[newTask, newTaskisAdded] = useState(false)
    let[removedTask, setremovedTask] = useState(false)
    let[stateChange, setStateChange] = useState([])


    let allTasks = []; //el array con todas las tareas traida del local storage
    let cloneAllTasks = [];
    let toDoColumn = [];
    let inProgressColumn = [];
    let doneColumn=[];
    let cardsToprint='';
    let taskNum=0;


    function getTasks() { //la funcion que usa el counter para recorrer el local storage y traer todas las tareas al array allTasks
        let counter = JSON.parse(localStorage.getItem('counter')); 
        for (let i = 1; i <=counter; i++) {
            let task = JSON.parse(localStorage.getItem(`task_${i}`))
            if(task!==null){ //queremos pintar las tareas que coincidan con el contador (porque puede ser que haya tareas que se hayan borrado, pero el contador se matiene)
            allTasks.push(task)
            }
            else{
                continue // al haber borrado una tarea el contador se mantiene y al intentar traer una tarea con dicho número nos da null, entonces queremos que el loop continue
            }
            }
            cloneAllTasks=[...allTasks]
        }
    getTasks()


    cloneAllTasks.forEach(c => { //Filtra todas las tareas y las pushea al array de tareas correspondiente
        if (c.state === 'Todo') {
          return  toDoColumn.push(c)
        }
        if (c.state === 'Inprogress') {
              return  inProgressColumn.push(c)
        }
        if (c.state === 'Done') {
            return  doneColumn.push(c)
      }
    })

    const onTaskAdd = ()=>{
        newTask=== true ? newTaskisAdded(false) : newTaskisAdded(true);}

    const onTaskRemove = ()=>{
        removedTask=== true ? setremovedTask(false) : setremovedTask(true);}

    const onStateChange = selectedTask=>{
        stateChange.push(selectedTask);
        cloneAllTasks=[...stateChange]
        console.log(cloneAllTasks);
    }
   

    switch(props.title){
        case 'To do':
        taskNum = toDoColumn.length;    
        cardsToprint= toDoColumn.map((t, i)=><Card onStateChange={onStateChange} onTaskRemove={onTaskRemove} title={t.task} state={t.state} timestamp={t.date} id={t.id} key={i}></Card>); 
                    break;

        case 'In progress':
        taskNum = inProgressColumn.length; 
        cardsToprint= inProgressColumn.map((t, i)=> <Card onStateChange={onStateChange} onTaskRemove={onTaskRemove} title={t.task} state={t.state} timestamp={t.date} id={t.id} key={i}></Card>); 
                    break;

        case 'Done': 
        taskNum = doneColumn.length; 
        cardsToprint= doneColumn.map((t, i)=> <Card onTaskRemove={onTaskRemove} title={t.task} state={t.state} timestamp={t.date} id={t.id} key={i} doneClass='done'></Card>); 
                    break;
        default : 
        taskNum=0;
        cardsToprint=''; break;

    }


    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter tasknum={taskNum}></Counter>
                <h3>{props.title}</h3>
                <AddTaskButton onTaskAdd={onTaskAdd} state={props.state} title={props.title}></AddTaskButton>
            </div>
            {cardsToprint}

        </div>
    )
}

export default Column
