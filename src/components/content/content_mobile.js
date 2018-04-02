import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import FiltersTypes from './filters/filters_types/types';
import CornersInput from './filters/filters_corners/corners_input';
import CornersList from './filters/filters_corners/corners_list';

import { toggleView } from 'actions/mobileActions';

import 'styles/filters.css';

const transitionOpt = {
    transitionName: 'slide-down-filters',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
}

class ContentMobile extends Component {
    
    constructor(props) {
        super(props);
        
        this.onFiltersClick = this.onFiltersClick.bind(this);
    }
    
    onFiltersClick() {
        this.props.toggleView('isFilters');
    }
 
    render() {    
        
        console.log('content mobile fired');
        
        
        const { isFilters } = this.props;
        const filters = isFilters && <FiltersTypes />;
        
        return (
            <Fragment>
                <button className='button-filters'
                    onClick={this.onFiltersClick}
                >
                    {isFilters ? 'zamknij' : 'filtry'}
                </button>
                <CSSTransitionGroup className='animated-filters' {...transitionOpt} >
                    {filters}
                </CSSTransitionGroup>
                <CornersInput />
                <div className='corner-list-mobile'>
                    <CornersList />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isFilters: state.mobile.isFilters
});
        
export default connect(mapStateToProps, { toggleView })(ContentMobile);