import React, { Component } from 'react';
import _ from 'underscore';

class ProgressBar extends Component {
    
    render() {
        const { step, data } = this.props;
        
        return(
            <div className="modal_progress-bar">
                { _.map(data, (value, key) => (
                    <div className='progress-bar' key={key}>
                        {step > key ? 
                        <div className='progress-bar_step progress-bar_step--done'>
                            <i className='ion-checkmark'/>
                        </div> 
                         : step == key ? 
                        <div className='progress-bar_step progress-bar_step--active'>
                            <i className='ion-chevron-down'/>
                        </div> 
                         : 
                        <div className='progress-bar_step progress-bar_step'>
                            <i className='ion-chevron-right'/>
                        </div>}
                        <div className={step == key ? 'progress-bar_name--active' : ''}>
                            {value.name}
                        </div>
                    </div>
                ))}
            </div>
            
        );
    }
}

export default ProgressBar;