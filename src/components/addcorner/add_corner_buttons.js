import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStep } from './actions';

class AddButtons extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClickBack = this.onButtonClickBack.bind(this);
        this.onButtonClickForward = this.onButtonClickForward.bind(this);
    }
    
    onButtonClickBack() {
        this.props.setStep('back');
    }
    
    onButtonClickForward() {
        this.props.setStep('forward');
    }
    
    
    render() {
        return(
            <div>
                <button onClick={this.onButtonClickBack}> wstecz </button>
                <button onClick={this.onButtonClickForward}> dalej </button>
            </div>
        );
    }
}

export default connect(null, { setStep })(AddButtons);