import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddButtons from './add_corner_buttons';
import { updateStep } from './actions';
import { getStepData } from './selectors';

class FirstStep extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
    }
   
    onInputChange(e) {
        this.props.updateStep({ value: e.target.value, name: e.target.name });
    }
    
    render() {
        const data = this.props.stepData
        
        return(
            <div className="modal_step">
                <div className="modal_step_form">
                    {_.map(data, (value, key) => (
                    <div className="modal_input" key={key} >
                        <label className="modal_input_label">{value.label}</label>
                        <input className="modal_input_input"
                            placeholder={value.placeholder}
                            type='text' 
                            value={value.value}
                            name={key}
                            onChange={e => this.onInputChange(e)} />
                    </div>            
                    ))}
                </div>
                <AddButtons forward />
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    stepData: getStepData(state)
})

export default connect(mapStateToProps, { updateStep })(FirstStep);