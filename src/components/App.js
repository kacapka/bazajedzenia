import React, { Component } from 'react';
import 'styles/app.css';
import { connect } from 'react-redux';
import { fetchCorners } from 'actions/index';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { init as firebaseInit } from '../firebase';

import Header from './header/header';
import Footer from './footer/footer';
import Filters from './content/filters/filters';
import Map from './content/map/map';
import Corner from './content/corner/components/corner'
import AddCorner from './addcorner/components/add_corner';
import LogIn from './login/components/login';
import Loader from './reuse/loader';

import { setUser } from '../actions/index';

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
                <Footer />
            </div>
        );
    }
}
          
function mapStateToProps(state) {
    return {
        corners: state.corners      
    }
}

export default withRouter(connect(mapStateToProps, { fetchCorners, setUser })(App));
