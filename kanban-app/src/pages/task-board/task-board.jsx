import React, { useEffect } from "react"
import SubHeader from "../../components/sub-header";
import './style.css'
import Column from '../../components/column/column'
import { useState } from "react";



function TaskBoard() {

    let arrTaskTodo = [];
    let arrTaskPending = [];
    let arrTaskDone = [];

    useEffect(()=>{

        const storageData = JSON.parse(localStorage.getItem('allData'));
        if(storageData !=null){
            updateArr(storageData)
            updateFilteredArr(storageData)

        }
       

    }, [])
    
    

    const arrColumns = [
        {
            title: 'To do',
            status: 'Todo',
            clearAll: false,
            AddButton: true,
            tasks: arrTaskTodo,
            doneClass: false,
        },
        {
            title: 'In progress',
            status: 'Pending',
            clearAll: false,
            AddButton: true,
            tasks: arrTaskPending,
            doneClass: false,
        },
        {
            title: 'Done',
            status: 'Done',
            clearAll: true,
            AddButton: true,
            tasks: arrTaskDone,
            doneClass: true,
        },
    ]



    let [arr, updateArr] = useState(arrColumns)
    let [filteredArr, updateFilteredArr] = useState([...arr])
    let taskNum = JSON.parse(localStorage.getItem('counter'))
    let [counter, updateCounter] = useState(taskNum!==null?JSON.parse(localStorage.getItem('counter'))+1:1)
    // let [stateChange, setStateChange] = useState([])


    function deleteTask(obj) {
        const column = arr.find(c => c.status === obj.status);
        const card = column.tasks.find(c => c.id === obj.id);
        const i = column.tasks.indexOf(card);
        column.tasks.splice(i, 1);
    }

    function deleteAllTasks(array) {
        array.forEach(e => array.splice(e))
        updateArr([...arr]);
        localStorage.setItem('allData', JSON.stringify(arr))
        
    }



    const onTaskAdd = newtask => {
        const column = arr.find(c => c.status === newtask.status);
        column.tasks.push(newtask);
        
        updateArr([...arr]); //update del board
        updateCounter(counter => counter + 1);
        console.log(arr[0].tasks)
        localStorage.setItem('allData', JSON.stringify(arr));
        localStorage.setItem('counter', JSON.stringify(counter))
       
        

    }

    const onTaskRemove = selectedCard => {
        deleteTask(selectedCard)
        updateArr([...arr])
    
        localStorage.setItem('allData', JSON.stringify(arr))
        localStorage.setItem('counter', JSON.stringify(counter))
         

    }

    const onTaskChangeForward = updateCard => {
        if (updateCard.status === 'Todo') {
            let newTask = Object.assign({}, updateCard);
            newTask.status = 'Pending';
            arr[1].tasks.push(newTask); //push al array del Pending
            deleteTask(updateCard)
            updateArr([...arr]);
            localStorage.setItem('allData', JSON.stringify(arr))
            localStorage.setItem('counter', JSON.stringify(counter))
        }
        else if (updateCard.status === 'Pending') {
            let newTask = Object.assign({}, updateCard);
            newTask.status = 'Done';
            arr[2].tasks.push(newTask); //push al array del Done
            deleteTask(updateCard)
            updateArr([...arr]);
            localStorage.setItem('allData', JSON.stringify(arr))
            localStorage.setItem('counter', JSON.stringify(counter))
        }
    }

    const onClearAll = clearDoneTasks => deleteAllTasks(clearDoneTasks)

    const onTaskChangeBackwards = updateCard => {
        if (updateCard.status === 'Pending') {
            let newTask = Object.assign({}, updateCard);
            newTask.status = 'Todo';
            arr[0].tasks.push(newTask); //push al array del Todo
            deleteTask(updateCard)
            updateArr([...arr]);
            localStorage.setItem('allData', JSON.stringify(arr))
            localStorage.setItem('counter', JSON.stringify(counter))
        }
        else if (updateCard.status === 'Done') {
            let newTask = Object.assign({}, updateCard);
            newTask.status = 'Pending';
            arr[1].tasks.push(newTask); //push al array del Pending
            deleteTask(updateCard)
            updateArr([...arr]);
            localStorage.setItem('allData', JSON.stringify(arr))
            localStorage.setItem('counter', JSON.stringify(counter))
        }
    }

  


const onFilter = coincidences => {
    const filteredArray = arr.map(c => {
        const column = {...c};
        column.tasks = column.tasks.filter(t => t.task.toLowerCase().includes(coincidences))
        return column;
    })
    updateFilteredArr(filteredArray)
}



return (
    <React.Fragment>
        <SubHeader onFilter={onFilter}></SubHeader>
        <div className='columns__container'>

            {filteredArr.map((e, i) => <Column key={i} title={e.title} status={e.status}
                clearAll={e.clearAll} tasks={e.tasks} doneClass={e.doneClass} counter={counter}
                taskNum={e.tasks.length} AddButton={e.AddButton}
                onTaskAdd={onTaskAdd} onTaskRemove={onTaskRemove} onTaskChangeForward={onTaskChangeForward}
                onTaskChangeBackwards={onTaskChangeBackwards} onClearAll={onClearAll}></Column>)}
        </div>
    </React.Fragment>
)
}

export default TaskBoard