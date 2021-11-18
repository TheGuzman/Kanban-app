import './style.css'
function Counter(props){

    return(
        <div className='counter__container'>{props.taskNum}</div>
    )
}

export default Counter