import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import AddButtons from '../add_corner_buttons';

import { updateStep } from 'actions/addActions';
import { getStepData } from 'selectors/add/addSelector';

class FinalStep extends Component {
    
    constructor(props) {
        super(props);
    
        this.onInputChange = this.onInputChange.bind(this);
    }
       
    onInputChange(e) {
        let value = e.target.type === 'radio' ? e.target.checked : e.target.value;
        this.props.updateStep({ value, name: e.target.dataset.name });
    }
    
    render() {
        const data = this.props.stepData;
        
        return(
            <Fragment>
                <div className="modal_step_confirm">
                    <div className="modal_step_confirm_description">
                        Checę dodać lokal jako:
                    </div>
                    {_.map(data, (value, key) => (
                        key !== 'email' 
                        ?   <div className="modal_step_confirm_item" 
                                key={key} 
                            >
                                <input className=" modal_checkbox details-input__checkbox"
                                    type='radio' 
                                    checked={value.value}
                                    name="user"
                                    data-name={key}
                                    onChange={e => this.onInputChange(e)} 
                                />
                                <label className="modal_label">
                                    {value.label}
                                </label>
                            </div> 
                        :   <div className="modal_step_confirm_contact" key={key}>
                                <div className="modal_step_confirm_description">
                                    Jak możemy się z Tobą skontaktowac?
                                </div>
                                <div className="modal_step_confirm_item" >
                                    <input className="modal_input"
                                        placeholder={value.placeholder}
                                        type='text' 
                                        value={value.value}
                                        data-name={key}
                                        onChange={e => this.onInputChange(e)} 
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <AddButtons back save/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stepData: getStepData(state)
})

export default connect(mapStateToProps, { updateStep })(FinalStep);