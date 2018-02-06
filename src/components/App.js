import React, { Component } from 'react';
import '../styles/App.css';

import Header from './header/header';
import Filters from './content/filters/filters';
import Map from './content/map/map';

class App extends Component {
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

export default App;
