import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'styles/modal_add_corner.css';
import ProgressBar from './add_corner_progress_bar';
import FirstStep from './add_corner_first_step';
import SecondStep from './add_corner_second_step';
import ThirdStep from './add_corner_third_step';
import FinalStep from './add_corner_final_step';

import { setStep } from '../actions';


class AddCorner extends Component {
    
    constructor(props) {
        super(props);
        
        this.onCloseClick = this.onCloseClick.bind(this);
    }
    
    onCloseClick() {
        this.props.history.goBack();
        this.props.setStep('close');
    }
    
    renderStep() {
        switch(this.props.step) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep />;
            case 2:
                return <ThirdStep />;
            case 3:
                return <FinalStep />;
        }
    }
    
    render() {
        
        const { step, data } = this.props;
    
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <i className='ion-close-round modal_close' 
                        onClick={this.onCloseClick} /> 
                    <ProgressBar 
                        step={step} 
                        data={data} 
                    />
                    <div className='modal_step'>
                        {this.renderStep()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    step: state.addCorner.step,
    data: state.addCorner.data
});

export default connect(mapStateToProps, { setStep })(AddCorner);