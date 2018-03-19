import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { init as firebaseInit } from '../firebase';

import Header from './header/header';
import Filters from './content/filters/filters';
import Map from './content/map/map';
import Corner from './content/corner/corner'
import AddCorner from './addcorner/add_corner';
import LogIn from './login/login';
import Loader from './reuse/loader';

import { setUser, fetchCorners } from 'actions/dataActions';
import { getCorners } from 'selectors/data/dataSelector';

import 'styles/app.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        firebaseInit();
    }
    
    componentWillMount() {
        this.props.setUser();
        this.props.fetchCorners('all');
    }
    
    render() {
        const content = this.props.corners.length ? <Filters /> : <Loader size={60} className="loader--filters" />
             
        return (
            <div className="app">
                <Route path="/addcorner" component={AddCorner} />
                <Route path="/login" component={LogIn} />
                <Header />
                <div className="app-content">
                    {content}
                    <Route path="/:id" component={Corner} />
                    <Route path="/" component={Map} />
                </div>
            </div>
        );
    }
}
          
const mapStateToProps = (state) => ({
   corners: getCorners(state)
})

export default withRouter(connect(mapStateToProps, { fetchCorners, setUser })(App));
