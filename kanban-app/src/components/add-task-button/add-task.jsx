import './style.css'
import React from 'react';
import NewTaskGenerator from '../new-task-generator/new-task-generator'
import ClearAllButton from '../clear-all-button/clear-all';


function AddTaskButton(props) {



    function handleClick() {
            props.onShowTaskGenerator(true)
    }


    return (
    <div className='header__buttons__container'>
        <button className={props.doneClass === true ? 'done-add__task__button':'add-task__button'} onClick={handleClick}>+</button>
        {props.doneClass === true ?
            <ClearAllButton onClearAll={props.onClearAll} title={props.title} tasks={props.tasks} className='clear-all__button'></ClearAllButton> : null}
    </div>
    )
}

export default AddTaskButton