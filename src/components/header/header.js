import React, { Component } from 'react';
import logo from '../../images/logo/logo.svg';
import Button from '../reuse/button';
import { Link } from 'react-router-dom';
import 'styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} 
                    alt="logo" 
                    className="header__logo" />
                <Link to='/addcorner'>
                    <Button className='button--add'
                        name='dodaj lokal'
                        icon='ion-plus-round' />
                </Link>    
            </div>
        );
    }
}

export default Header;