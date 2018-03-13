import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/logo/logo.svg';
import Button from '../reuse/button';
import { Link } from 'react-router-dom';
import 'styles/header.css';
import firebase from 'firebase';

class Header extends Component {
    
    constructor(props) {
        super(props);
        
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }
    
    onLogoutClick() {
        firebase.auth().signOut();
    }
    
    render() {
        
        const user = this.props.user;
        
        return (
            <div className="header">
                <img src={logo} 
                    alt="logo" 
                    className="header__logo" />
                {user ? 
                <div className='header__user'>
                    <div className='header__user-info'>
                        <span>{user.displayName}</span>
                        <img className='user__photo'
                            src={user.photoURL} />
                    </div>
                    <Link to='/'>
                        <div className='header__signin'
                            onClick={this.onLogoutClick}>
                            wyloguj sie
                        </div>
                    </Link>
                </div>
                : 
                <Link to='/login'>
                    <div className='header__signin'>
                        zaloguj sie
                    </div>
                </Link>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Header);