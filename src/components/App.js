import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { init as firebaseInit } from '../firebase';
import _ from 'underscore';
import { animateScroll as scroll } from 'react-scroll';

import Header from './header/header';
import Filters from './content/filters/filters';
import Map from './content/map/map';
import Corner from './content/corner/corner'
import AddCorner from './addcorner/add_corner';
import LogIn from './login/login';
import Loader from './reuse/loader';
import ContentMobile from './content/content_mobile';

import { setUser, fetchCorners, checkUserDevice } from 'actions/dataActions';
import { toggleView } from 'actions/mobileActions';
import { getCorners } from 'selectors/data/dataSelector';
import checkDevice from '../utils/checkDevice';

import 'styles/app.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        
        firebaseInit();
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.onViewClick = this.onViewClick.bind(this);
        this.onTopClick = this.onTopClick.bind(this);
    }
    
    componentWillMount() {
        this.props.setUser();
        this.props.fetchCorners('all');
        setTimeout(this.props.fetchCorners('recommended'), 2000);
        window.addEventListener('resize', this.handleWindowSizeChange);
        window.addEventListener('scroll', _.throttle(this.handleScroll, 100));
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleWindowSizeChange() {
        this.props.checkUserDevice(checkDevice());    
    }
    
    handleScroll() {
        const { mobile: {isTop}, toggleView } = this.props;
        if(window.scrollY > 1.5 * window.innerHeight) {
            if(!isTop) toggleView('isTop'); 
        } else {
            if(isTop) toggleView('isTop');
        }
    }
    
    onViewClick() {
        this.props.toggleView('isMap');
    }
    
    onTopClick() {
        scroll.scrollToTop();
    }
   
    render() {
        const { isMobile, corners, mobile: {isMap, isTop} } = this.props;
        const content = corners.length ? <Filters /> : <Loader size={60} className="loader--filters" />
        const classIcon = isMap ? 'ion-android-arrow-back' : 'ion-map';      
        const classContentMobile = isMap ? 'app-mobile' : 'app-mobile on';
        const classMapMobile = isMap ? 'map-mobile on' : 'map-mobile';
        const classButton = isTop ? 'on' : '';
                 
        return (
            <div className="app">
                <Route path="/addcorner" component={AddCorner} />
                <Route path="/login" component={LogIn} />
                {!isMobile ?
                <Fragment>
                    <Header />
                    <div className="app-content">
                        {content}
                        <Route path="/:id" component={Corner} />
                        <Route path="/" component={Map} />
                    </div>
                </Fragment>
                :
                <Fragment>
                    <div className={classContentMobile} >
                        <Header />
                        <Switch>
                            <Route path="/:id" component={Corner} />
                            <Route path="/" component={ContentMobile} />
                        </Switch>
                    </div>
                    <div className={classMapMobile} >
                        <Map />
                    </div>
                    <div className={`button-mobile button-mobile--view ${classButton}`}
                        onClick={this.onViewClick}
                    >
                        <i className={classIcon} />
                    </div>
                    <div className={`button-mobile button-mobile--top ${classButton}`}
                        onClick={this.onTopClick}
                    >
                        <i className='ion-chevron-up' />
                    </div>
                </Fragment>
                }
            </div>
        );
    }
}
          
const mapStateToProps = state => ({
    corners: getCorners(state),
    isMobile: state.isMobile,
    mobile: state.mobile
})

export default withRouter(connect(mapStateToProps, { fetchCorners, setUser, checkUserDevice, toggleView })(App));
