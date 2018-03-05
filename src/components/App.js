import React, { Component } from 'react';
import 'styles/app.css';
import { connect } from 'react-redux';
import { fetchCorners } from 'actions/index';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './header/header';
import Filters from './content/filters/filters';
import Map from './content/map/map';
import Corner from './content/corner/corner'
import AddCorner from './addcorner/components/add_corner';
import Loader from './reuse/loader';

class App extends Component {
    
    componentWillMount() {
        this.props.fetchCorners('all');
    }
    
    render() {
        const content = this.props.corners.length ? <Filters /> : <Loader size={60} className="loader--filters" />
        
        return (
            <div className="app">
                <Route path="/addcorner" component={AddCorner} />
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
          
function mapStateToProps(state) {
    return {
        corners: state.corners      
    }
}

export default withRouter(connect(mapStateToProps, { fetchCorners })(App));
