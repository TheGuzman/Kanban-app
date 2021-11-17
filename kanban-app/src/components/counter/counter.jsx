import './style.css'
function Counter(props){

    return(
        <div className='counter__container'>{props.counter}</div>
    )
}

export default Counter