import React, { Component } from 'react'
import { ClipLoader } from 'react-spinners';
import 'styles/loader.css';

class Loader extends Component {
    render() {
        return(
            <div className="loader">
                <ClipLoader color={'#47a243'}
                    size={this.props.size} />
            </div>
        );
    }
}

export default Loader;