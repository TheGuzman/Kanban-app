import './style.css'

function TaskFilter(props){

    return(
            <input className="input__container" type="text" placeholder="&#128269; Filter cards" 
            onChange={e => { let coincidences = e.target.value.toLowerCase();
                console.log(coincidences)
        
                props.onFilter(coincidences)}}/>
     

    )
}
export default TaskFilter