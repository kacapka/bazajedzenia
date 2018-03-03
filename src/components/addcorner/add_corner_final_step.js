import React, { Component } from 'react';
import AddButtons from './add_corner_buttons';

class FinalStep extends Component {
    render() {
    
        return(
            <div className='modal_step'>
                Final Step
                <AddButtons back save/>
            </div>
        );
    }
}

export default FinalStep;