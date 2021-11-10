import './style.css'
import React, { useState } from 'react';
import NewTaskGenerator from '../new-task-generator/new-task-generator'


function AddTaskButton() {

    let [isClicked, setClick] = useState(false);
    const onClickChange = state => setClick(state)


    function handleClick() {
            setClick(true)
    }

    return (<React.Fragment>
        <button className='add-task__button' onClick={handleClick}>+</button>
        {isClicked !== false ?
                <NewTaskGenerator cancelButton={onClickChange}></NewTaskGenerator>
            : null}
    </React.Fragment>
    )
}

export default AddTaskButton