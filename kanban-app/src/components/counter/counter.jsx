import './style.css'
function Counter(props){

    return(
        <div className='counter__container'>{props.tasknum}</div>
    )
}

export default Counter