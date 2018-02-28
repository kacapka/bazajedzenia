import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'styles/modal_add_corner.css';
import FirstStep from './add_corner_first_step';
import SecondStep from './add_corner_second_step';


class AddCorner extends Component {
    
    constructor(props) {
        super(props);
        
        this.onCloseClick = this.onCloseClick.bind(this);
    }
    
    onCloseClick() {
        this.props.history.goBack();
    }
    
    renderStep() {
        switch(this.props.addCorner) {
            case (1):
                return <FirstStep />;
            case 2:
                return <SecondStep />;
        }
    }
    
    render() {
        
        console.log(this.props);
        
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <i className='ion-close-round modal_close' 
                        onClick={this.onCloseClick} /> 
                    {this.renderStep()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addCorner: state.addCorner.step
});

export default connect(mapStateToProps)(AddCorner);