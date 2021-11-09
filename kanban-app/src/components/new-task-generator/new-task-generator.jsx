

function NewTaskGenerator(){

    return(
        <div className='new__task__container'>
            <input type='text' placeholder='enter a task'></input>
            <div>
                <button>Add</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default NewTaskGenerator