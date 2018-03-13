import React, { Component } from 'react';
import 'styles/modal_signin.css';
import logo from '../../../images/logo/logo.svg';
import Modal from '../../reuse/modal';
import FirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

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
                    src={logo} 
                />
                <div className='sign-in__description'>
                    Zaloguj sie do serwisu przy uzyciu ulubionej metody logowania. Jesli nie posiadasz konta, w celu rejestrcji  wybierz jedna z ponizszych opcji.
                </div>
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />    
            </Modal>
        );
    }
}

export default LogIn;