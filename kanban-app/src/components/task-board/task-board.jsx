import React from "react"
import './style.css'
import Column from "../column/column"


function TaskBoard() {

    return (
        <React.Fragment>
            <div className='columns__container'>
            <Column title='To do' state ="Todo"></Column>
            <Column title='In progress' state ="Inprogress"></Column>
            <Column title='Done' state ="Done"></Column>
            </div>
        </React.Fragment>
    )
}

export default TaskBoard