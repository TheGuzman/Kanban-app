import './style.css'
function NewTaskGenerator(props) {

    let info = '';
    let tasks=[]; //Array de tareas 

    function handleCancel() {
        props.cancelButton(false)
    }

    function handleInput(e){
        info = e.target.value;
        minCharacters();
    }

    function getTime () {
        return new Date().toLocaleString()};

    function minCharacters(){ //Cambia la clase del botón en función de cuantos caracteres tiene el input
        if(info.length>3){
         document.querySelector('.new-task__add__button').classList.add('new-task__add__button__enabled')
         document.querySelector('.new-task__add__button').disabled = false;
        }
        if (info.length<=3 && document.querySelector('.new-task__add__button__enabled')!== NaN){
            document.querySelector('.new-task__add__button').classList.remove('new-task__add__button__enabled')
            document.querySelector('.new-task__add__button').disabled = true;
        }
    }

    function handleAdd(){
        tasks.push({
                task: info,
                id: 123,
                state: props.title,
                date: getTime(),
        })
        localStorage.setItem('task', JSON.stringify(tasks))
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