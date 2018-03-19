import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { setStep } from 'actions/addActions';

import 'styles/button.css'

class AddButtons extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClickBack = this.onButtonClickBack.bind(this);
        this.onButtonClickForward = this.onButtonClickForward.bind(this);
        this.onButtonClickAdd = this.onButtonClickAdd.bind(this);
    }
    
    onButtonClickBack() {
        this.props.setStep('back');
    }
    
    onButtonClickForward() {
        this.props.setStep('forward');
    }
    
    onButtonClickAdd() {
        this.props.history.push('/');
        this.props.setStep('close');
    }
    
    
    render() {
        const { back, forward, save } = this.props; 
        return(
            <div className='modal_buttons'>
                {back && 
                <button className='button--step-form modal_buttons--back' 
                    onClick={this.onButtonClickBack}
                > 
                    wstecz 
                </button>}
                {forward && 
                <button className='button--step-form modal_buttons--forward'
                    onClick={this.onButtonClickForward}
                > 
                    dalej 
                </button>}
                {save && 
                <button className='button--step-form modal_buttons--forward'
                    onClick={this.onButtonClickAdd}
                > 
                    dodaj 
                </button>}
            </div>
        );
    }
}

export default withRouter(connect(null, { setStep })(AddButtons));