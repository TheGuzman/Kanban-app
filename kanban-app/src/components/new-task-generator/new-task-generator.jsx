

function NewTaskGenerator(props) {

    let info = '';

    function handleCancel() {
        props.cancelButton(false)
    }

    function handleInput(e){
        info = e.target.value;
    }

    function handleAdd(){
        console.log(info)
    }

    return (
        <div className='new__task__container'>
            <input onChange={handleInput} type='text' name='addTask' placeholder='enter a task'></input>
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default NewTaskGenerator