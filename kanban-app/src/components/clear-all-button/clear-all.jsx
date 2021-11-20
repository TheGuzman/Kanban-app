import './style.css'
import React from 'react';


function ClearAllButton(props) {

  function  handleClearAll(){
        let clearDoneTasks=props.tasks;
        props.onClearAll(clearDoneTasks)
    }


    return (<React.Fragment>
        <button className='clear-all__button' onClick={handleClearAll} >Clear All</button>
    </React.Fragment>
    )
}

export default ClearAllButton