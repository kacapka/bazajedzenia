import React, { Component } from 'react';
import { connect } from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';
import { getOptions } from '../../../../selectors/selector_options';
import FilterBox from '../../../reuse/filter_box';
import ListItem from './corners_list_item';

import { selectCorner } from 'actions/index';

class CornersInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.renderValue = this.renderValue.bind(this);
        this.renderCorner = this.renderCorner.bind(this);     
    }
        
    onInputChange(value) {
        this.props.selectCorner(value.id);
    }
    
    renderValue(params) {
        const label = params.value.label;
        return (
            <span className="select-corners__value-selected">
                {label}
            </span>
        );
    }
        
    renderCorner() {
        if(!this.props.selectedCorner) return;
        const selectedCorner = this.props.selectedCorner;
        
        return (
            <div className="list-item--wrapper">
                <ListItem 
                    name={selectedCorner.label}
                    street={selectedCorner.street}
                    id={selectedCorner.id}
                />
            </div>
        );
    }
 
    render() {    
        const selectedCorner = this.props.selectedCorner;
        const selectOpt = {
            clearable: false,
            arrowRenderer: null,
            placeholder: 'np. Amrit Kebab',
            loadingPlaceholder: 'szukam...',
            searchPromptText: 'wpisz nazwę lokalu',
            noResultsText: "brak wyników",   
            className: "select-corners",
            matchPos: "start"
        }
         
        return(
            <FilterBox title="Szukaj lokalu" line>
                <VirtualizedSelect
                    options={this.props.options}
                    value={selectedCorner}
                    valueComponent={this.renderValue}
                    onChange={this.onInputChange}
                    {...selectOpt}
                />
                {this.renderCorner()}
            </FilterBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedCorner: state.selectedCorner,
        options: getOptions(state)
    }
}

export default connect(mapStateToProps, { selectCorner } )(CornersInput);
