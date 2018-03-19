import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from './add_corner_progressbar';
import FirstStep from './steps/first_step';
import SecondStep from './steps/second_step';
import ThirdStep from './steps/third_step';
import FinalStep from './steps/final_step';
import Modal from 'reuse/modal';

import { setStep } from 'actions/addActions';
import { getData, getStep } from 'selectors/add/addSelector';

import 'styles/modal_add_corner.css';

class AddCorner extends Component {
    
    constructor(props) {
        super(props);
        
        this.onCloseClick = this.onCloseClick.bind(this);
    }
    
    onCloseClick() {
        this.props.history.push('/');
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
            <Modal onClick={this.onCloseClick} 
                className='modal-add-corner'>
                <ProgressBar 
                    step={step} 
                    data={data} 
                />
                <div className='modal_step'>
                    {this.renderStep()}
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    step: getStep(state),
    data: getData(state)
});

export default connect(mapStateToProps, { setStep })(AddCorner);