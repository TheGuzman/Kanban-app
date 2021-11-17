import React from "react"
import './style.css'
import Column from "../column/column"


function TaskBoard() {

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


    let arrTaskTodo = [];
    let arrTaskPending = [];
    let arrTaskDone = [];






    let [newTask, newTaskisAdded] = useState(false)
    let [removedTask, setremovedTask] = useState(false)
    let [stateChange, setStateChange] = useState([])



    const onTaskAdd = () => {
        newTask === true ? newTaskisAdded(false) : newTaskisAdded(true);
    }

    const onTaskRemove = () => {
        removedTask === true ? setremovedTask(false) : setremovedTask(true);
    }

    const onStateChange = selectedTask => {
        stateChange.push(selectedTask);
        cloneAllTasks = [...stateChange]
        console.log(cloneAllTasks);
    }

    return (
        <div className='columns__container'>
            {arrColumns.forEach(e => <Column title={e.title} status={e.status} counter={e.counter} clearAll={e.clearAll} AddButton={e.AddButton} tasks={e.tasks}></Column>)}
        </div>
    )
}

export default TaskBoard