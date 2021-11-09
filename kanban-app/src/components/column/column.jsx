import './style.css'
import Counter from '../counter/counter'
import AddTaskButton from '../add-task-button/add-task'
import NewTaskGenerator from '../new-task-generator/new-task-generator'


function Column() {

    const columns = [
        {
            id: 1,
            title: 'Todo',
            cards: []
        },
        {
            id: 2,
            title: 'In progress',
            cards: []
        },
        {
            id: 3,
            title: 'Done',
            cards: []
        }
    ]


    return (
        <div className='columns__container'>
        {columns.map(c=><div key={c.id} className={'column ' + c.title}>
            <div className='column__header'>
            <Counter></Counter>
           <h3>{c.title}</h3>
           <AddTaskButton></AddTaskButton>
           </div>
            </div>)}
        </div>
    )
}

export default Column