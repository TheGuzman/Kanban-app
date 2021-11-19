import './style.css'
import AddTaskButton from '../add-task-button/add-task'
import React from 'react'
import ClearAllButton from '../clear-all-button/clear-all'


function DoneHeader(props) {

    return (<React.Fragment>
        <AddTaskButton></AddTaskButton>
        <ClearAllButton></ClearAllButton>
    </React.Fragment>
    )
}

export default DoneHeader

