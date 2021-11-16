import React from "react"
import './style.css'
import Column from "../column/column"
import DoneColumn from "../done-column/column"


function TaskBoard() {

    return (
        <React.Fragment>
            <div className='columns__container'>
            <Column title='To do' state ="Todo"></Column>
            <Column title='In progress' state ="Inprogress"></Column>
            <DoneColumn title='Done'></DoneColumn>
            </div>
        </React.Fragment>
    )
}

export default TaskBoard