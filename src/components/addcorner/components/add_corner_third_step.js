import _ from 'underscore';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AddButtons from './add_corner_buttons';
import { updateStep } from '../actions';
import { getStepData } from '../selectors';

class ThirdStep extends Component {
    
    constructor(props) {
        super(props);
        
        this.open = {};
        this.delivery = {};
        this.onInputChange = this.onInputChange.bind(this);
    }
       
    onInputChange(e) {
        let name = e.target.name;
        this.props.updateStep({ value: [this.open[name].value, this.delivery[name].value ], name });
    }
    
    render() {
        
        const data = this.props.stepData;
    
        return(
            <Fragment>
                <div className="modal_step_hours">
                        <div className="modal_step_hours_item">
                            <span></span>
                            <i className="ion-clock"/>
                            <i className="ion-android-car"/>
                        </div>
                        {_.map(data, (value, key) => (
                        key !== 'coords' &&
                        <div className="modal_step_hours_item" key={key} >
                            <label className="modal_label">{value.label}</label>
                            <input className="modal_input"
                                placeholder={value.placeholder}
                                type='text' 
                                value={value.value[0]}
                                name={key}
                                ref={input => this.open[key] = input}
                                onChange={e => this.onInputChange(e)} />
                            <input className="modal_input"
                                placeholder={value.placeholder}
                                type='text' 
                                value={value.value[1]}
                                name={key}
                                ref={input => this.delivery[key] = input}
                                onChange={e => this.onInputChange(e)} />
                        </div> 
                        ))}
                </div>
                <AddButtons back forward/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stepData: getStepData(state)
})

export default connect(mapStateToProps, { updateStep })(ThirdStep);