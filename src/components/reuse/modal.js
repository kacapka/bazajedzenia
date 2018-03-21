import React, { Component } from 'react';
import 'styles/modal.css';

class Modal extends Component {
      
    render() {
        const className = `modal ${this.props.className}`;
        return(
            <div className='modal-wrapper'>
                <div className={className}>
                    <i className='ion-close-round modal_close' 
                        onClick={this.props.onClick} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;