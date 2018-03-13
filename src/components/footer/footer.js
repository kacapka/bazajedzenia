import React, { Component } from 'react';
import Button from '../reuse/button';
import { Link } from 'react-router-dom';
import 'styles/footer.css';

class Footer extends Component {
       
    render() {
        return (
            <div className='footer'>
                <Link to='/addcorner'>
                    <Button className='button--add'
                        name='dodaj lokal'
                        icon='ion-plus-round' />
                </Link>
            </div>
        );
    }
}

export default Footer;