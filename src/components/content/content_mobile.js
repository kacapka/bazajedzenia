import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import FiltersTypes from './filters/filters_types/types';
import CornersInput from './filters/filters_corners/corners_input';
import CornersList from './filters/filters_corners/corners_list';

import { toggleView } from 'actions/mobileActions';

import 'styles/filters.css';

class ContentMobile extends Component {
    
    constructor(props) {
        super(props);
        
        this.onFiltersClick = this.onFiltersClick.bind(this);
    }
    
    onFiltersClick() {
        this.props.toggleView('isFilters');
    }
    
    render() {    
        const isFilters = this.props.isFilters;
        const classAccordion = isFilters ? 'is-open' : 'is-closed';
        
        return (
            <Fragment>
                <div className='button-accordion'
                    onClick={this.onFiltersClick}
                >
                    {isFilters ? 'zamknij' : 'filtry'}
                </div>
                <div className={`filters-accordion ${classAccordion}`}>
                    <FiltersTypes />
                </div>
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
        
export default connect(mapStateToProps, { toggleView } )(ContentMobile);
