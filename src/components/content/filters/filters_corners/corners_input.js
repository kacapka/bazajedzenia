import React, { Component } from 'react';
import { connect } from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';
import { getOptions } from '../../../../selectors/selector_options';
import FilterBox from '../../../reuse/filter_box';
import CornerItem from './corners_input_item';
import { selectCorner } from 'actions/index';

class CornersInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.renderValue = this.renderValue.bind(this);
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
        
        const transitionOpt = {
            transitionName: 'slide-down',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300    
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
                    {selectedCorner && <CornerItem corner={selectedCorner} />}
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
