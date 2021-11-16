import './style.css'

    let counter = JSON.parse(localStorage.getItem('counter'));
    localStorage.setItem('counter', JSON.stringify(counter))

function NewTaskGenerator(props) {

    if (counter !== null) {
        counter = JSON.parse(localStorage.getItem('counter'));
    }
    else{
        counter=0;
    }

    let info = '';

    function handleCancel() {
        props.cancelButton(false)
    }

    function handleInput(e) {
        info = e.target.value;
        minCharacters();

    }

    function getTime() {
        return new Date().toLocaleString()
    };

    function minCharacters() { //Cambia la clase del botón en función de cuantos caracteres tiene el input
        if (info.length > 3) {
            document.querySelector('.new-task__add__button').classList.add('new-task__add__button__enabled')
            document.querySelector('.new-task__add__button').disabled = false;
        }
        if (info.length <= 3 && document.querySelector('.new-task__add__button__enabled') !== isNaN) {
            document.querySelector('.new-task__add__button').classList.remove('new-task__add__button__enabled')
            document.querySelector('.new-task__add__button').disabled = true;
        }
    }

    // function removeSpaceFromState(){ //quita los espacios vacios del título de las columnas para asignar una clase css
    //     let state = props.state.replace(/\s/g, "");
    //     return state
    // } 

    function handleAdd() {
        counter++;
        let newtasks = {
            task: info,
            id: `#${counter}`,
            state: props.title,
            date: getTime(),
        }
        localStorage.setItem('counter', counter);
        localStorage.setItem(`task_${counter}`, JSON.stringify(newtasks))
        props.onTaskAdd(true);
    }


    return (
        <div className='new__task__container'>
            <input className='new-task__input' onChange={handleInput} type='text' name='addTask' placeholder='enter a task'></input>
            <div className='new-task__buttons__container'>
                <button className='new-task__add__button' onClick={handleAdd}>Add</button>
                <button className='new-task__cancel__button' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default NewTaskGenerator