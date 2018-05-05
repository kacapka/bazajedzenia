import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from 'images/logo/logo.svg';
import Button from 'reuse/button';

import { toggleView } from 'actions/mobileActions';
import { getUser } from 'selectors/data/dataSelector';
import { getNavStatus } from 'selectors/mobile/mobileSelector';
import { logOut } from '../../firebase';

import 'styles/header.css';

class Header extends Component {
    
    constructor(props) {
        super(props);
        
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onUserClick = this.onUserClick.bind(this);
    }
    
    onLogoutClick() {
        logOut();
    }
    
    onUserClick() {
        this.props.toggleView('isNav');
    }
    
    render() {
        const { user, isMobile, isNav } = this.props;
        const classLogoutNav = isNav ? 'on' : '';
        
        return (
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='header__navbar'>
                    <div className='header__nav'>
                        <Link to='/addcorner'>
                            <Button className='button--add'
                                name={!isMobile && 'dodaj lokal'}
                                icon='ion-plus-round' 
                            />
                        </Link>
                    </div>
                    {user 
                    ?   <div className='header__user'>
                            <div className='header__user-info'>
                                <span>{!isMobile && user.displayName}</span>
                                <img className='user__photo'
                                    onClick={this.onUserClick}
                                    alt='user thumbnail'
                                    src={user.photoURL} 
                                />
                            </div>
                            <div className={`header__logout--mobile ${classLogoutNav}`}>
                                <Link to='/'>
                                    <div className='header__signin'
                                        onClick={this.onLogoutClick}>
                                        wyloguj sie
                                    </div>
                                </Link>
                            </div>
                        </div>
                    :   <Link to='/login'>
                            <Button className='button--login'
                                name={!isMobile && 'zaloguj sie'}
                                icon='ion-log-in' 
                            />
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: getUser(state),
    isNav: getNavStatus(state),
    isMobile: state.isMobile
});

export default connect(mapStateToProps, { toggleView })(Header);
