import React, { Component } from 'react';
import { connect } from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';

import FilterBox from 'reuse/filter_box';
import CornerItem from './corners_input_item';

import { getOptions } from 'selectors/filters/optionsSelector';
import { getSelectedCorner } from 'selectors/filters/filterSelector';
import { selectCorner } from 'actions/filterActions';

class CornersInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.renderValue = this.renderValue.bind(this);
    }
        
    onInputChange(value) {
        let id = value ? value.id : null;
        this.props.selectCorner(id);
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
        const { selectedCorner, options } = this.props;
        
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
                    options={options}
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

const mapStateToProps = (state) => ({
    selectedCorner: getSelectedCorner(state),
    options: getOptions(state)
})

export default connect(mapStateToProps, { selectCorner } )(CornersInput);
