import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'reuse/button';
import logo from 'images/logo/logo_full_black.png';

import 'styles/footer.css';

class Footer extends Component {
          
    render() {
    
        return (
            <div className='footer'>
                <img className='footer-logo'
                    src={logo}
                    alt='logo'
                />
            
                <Link to='/addcorner'>
                    <Button className='button--add'
                        name='dodaj lokal'
                        icon='ion-plus-round' 
                    />
                </Link>
            </div>
        );
    }
}



export default connect(null)(Footer);
