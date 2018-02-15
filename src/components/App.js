import React, { Component } from 'react';
import 'styles/app.css';
import { connect } from 'react-redux';
import { fetchCorners } from 'actions/index';

import Header from './header/header';
import Filters from './content/filters/filters';
import Map from './content/map/map';

class App extends Component {
    
    componentDidMount() {
        this.props.fetchCorners('all');
    }
    
    render() {
          return (
            <div className="app">
                <Header />
                <div className="app-content">
                    <Filters />
                    <Map />
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchCorners })(App);
