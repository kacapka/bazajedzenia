import React, { Component } from 'react'
import { ClipLoader } from 'react-spinners';
import 'styles/loader.css';

class Loader extends Component {
    render() {
        const size = this.props.size || 50;
        const className = this.props.className || '';
        
        return(
            <div className={`loader ${className}`}>
                <ClipLoader color={'#47a243'}
                    size={size} />
            </div>
        );
    }
}

export default Loader;