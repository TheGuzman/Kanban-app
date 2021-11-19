import './style.css'
import React, { useState } from 'react';


function ClearAllButton(props) {

    // let [isClicked, setClick] = useState(false);
    // const onClickChange = state => setClick(state)
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