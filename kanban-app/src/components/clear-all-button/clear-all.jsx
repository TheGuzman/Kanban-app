import './style.css'
import React, { useState } from 'react';


function ClearAllButton() {

    // let [isClicked, setClick] = useState(false);
    // const onClickChange = state => setClick(state)
    // handleClearAll(){

    // }

    return (<React.Fragment>
        <button className='clear-all__button' /*onClick={handleClearAll}*/ >Clear All</button>
    </React.Fragment>
    )
}

export default ClearAllButton