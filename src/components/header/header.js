import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from 'images/logo/logo.svg';
import Button from 'reuse/button';

import { getUser } from 'selectors/data/dataSelector';
import { logOut } from '../../firebase';

import 'styles/header.css';

class Header extends Component {
    
    constructor(props) {
        super(props);
        
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }
    
    onLogoutClick() {
        logOut();
    }
    
    render() {
        
        const user = this.props.user;
        
        return (
            <div className="header">
                <img src={logo} 
                    alt="logo" 
                    className="header__logo" />
                <div className='header__navbar'>
                    <div className='header__nav'>
                        <Link to='/addcorner'>
                            <Button className='button--add'
                                name='dodaj lokal'
                                icon='ion-plus-round' />
                        </Link>
                    </div>
                    {user ? 
                    <div className='header__user'>
                        <div className='header__user-info'>
                            <span>{user.displayName}</span>
                            <img className='user__photo'
                                alt='user thumbnail'
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
                        <Button className='button--login'
                            name='zaloguj się'
                            icon='ion-log-in' />
                    </Link>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: getUser(state)
});

export default connect(mapStateToProps)(Header);

/*<Link to='/login'>
                        <div className='header__signin'>
                            zaloguj sie
                        </div>
                    </Link>*/