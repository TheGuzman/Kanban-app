import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import Card from '../card/card'
import React from 'react'


function Column(props) {

    let allTasks = []; //el array con todas las tareas traida del local storage
    let toDoColumn = [];
    let inProgressColumn = [];

    function getTasks() { //la funcion que usa el counter para recorrer el local storage y traer todas las tareas al array allTasks
        let counter = JSON.parse(localStorage.getItem('counter')); 
        for (let i = 1; i <=counter; i++) {
            let task = JSON.parse(localStorage.getItem(`task_${i}`))
            allTasks.push(task)
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
    console.log(toDoColumn)
    console.log(inProgressColumn)


    return (
        <div className={'column ' + props.title}>
            <div className='column__header'>
                <Counter></Counter>
                <h3>{props.title}</h3>
                <AddTaskButton title={props.title}></AddTaskButton>
            </div>

            {/* TERNARIO QUE SEPARA LAS TAREAS EN LAS DOS COLUMNAS (Todo e inProgress) PARA MAPEAR */}
            {props.title==='To do'?
                toDoColumn.map((t, i)=> <Card title={t.task} timestamp={t.date} id={t.id} key={i}></Card>) 
                :inProgressColumn.map((t, i)=> <Card title={t.task} timestamp={t.date} id={t.id} key={i}></Card>)
                }
               
        </div>
    )
}

export default Column
