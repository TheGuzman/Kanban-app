import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React, { useState } from 'react'



function Column(props) {

    let[newTask, newTaskisAdded] = useState(false)
    let[removedTask, setremovedTask] = useState(false)


    let allTasks = []; //el array con todas las tareas traida del local storage
    let toDoColumn = [];
    let inProgressColumn = [];

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
        }

    getTasks();

    allTasks.map(c => { //Filtra todas las tareas y las pushea al array de tareas correspondiente
        if (c.state === 'To do') {
          return  toDoColumn.push(c)
        }
        if (c.state === 'In progress') {
              return  inProgressColumn.push(c)
        }
    })

    const onTaskAdd = ()=>{
         newTask=== true ? newTaskisAdded(false) : newTaskisAdded(true);}

    const onTaskRemove = ()=>{
            removedTask=== true ? setremovedTask(false) : setremovedTask(true);}
   

    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter></Counter>
                <h3>{props.title}</h3>
                <AddTaskButton onTaskAdd={onTaskAdd} title={props.title}></AddTaskButton>
            </div>

            {/* TERNARIO QUE SEPARA LAS TAREAS EN LAS DOS COLUMNAS (Todo e inProgress) PARA MAPEAR */}
            {props.title==='To do'?
                toDoColumn.map((t, i)=> <Card onTaskRemove={onTaskRemove} title={t.task} timestamp={t.date} id={t.id} key={i}></Card>) 
                :inProgressColumn.map((t, i)=> <Card onTaskRemove={onTaskRemove} title={t.task} timestamp={t.date} id={t.id} key={i}></Card>)
                }
               
        </div>
    )
}

export default Column
