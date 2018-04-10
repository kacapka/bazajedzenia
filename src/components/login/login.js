import React, { Component } from 'react';
import FirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Modal from 'reuse/modal';
import logo from 'images/logo/logo.svg';

import { setAuthStateChange, uiConfig } from '../../firebase';

import 'styles/modal_signin.css';

const config = uiConfig();

class LogIn extends Component {
    
    constructor(props) {
        super(props);
        
        this.onCloseClick = this.onCloseClick.bind(this);
    }
    
    onCloseClick() {
         this.props.history.push('/');   
    }
    
    render() {
        
        return (
            <Modal onClick={this.onCloseClick}
                className='modal-sign-in'
            >
                <img className='sign-in__logo'
                    alt='logo'
                    src={logo} 
                />
                <div className='sign-in__description'>
                    Aby oceniać oraz dodawać opinię restauracji zaloguj sie do serwisu przy uzyciu dostępnych metod logowania. Jesli nie posiadasz konta, w celu rejestrcji  wybierz jedna z ponizszych opcji. 
                </div>
                <FirebaseAuth uiConfig={config} firebaseAuth={setAuthStateChange()} />    
            </Modal>
        );
    }
}

export default LogIn;