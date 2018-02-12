import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Async } from 'react-select';
import FilterBox from '../../../reuse/filter_box';
import OptionItem from './corners_input_item';

import { selectCorner } from 'actions/index';
 
class CornersInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.getOptions = this.getOptions.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.renderValue = this.renderValue.bind(this);
    }
    
	getOptions(input) {
        if(!input) {
            return Promise.resolve({ options: [] });
        }
        return fetch('JSON/baza.json')
            .then((response) => {
                return response.json();
            }).then((json) => {
                const opt = json.map(corner => {
                    return {
                        value: corner.district.name,
                        label: corner.name,
                        id: corner.id,
                        className: 'select__type--corners'
                    }
                });
                return { options: opt };
        });
    }
    
    onInputChange(value) {
        this.props.selectCorner(value);
    }
    
    renderValue(params) {
        const { label } = params.value;
        return (
            <span className="select-corners__value-selected">
                {label}
            </span>
        );
    }
    
    render() {
        const { selectedCorner } = this.props;
        const selectOpt = {
            clearable: false,
            arrowRenderer: null,
            placeholder: 'np. Amrit Kebab',
            loadingPlaceholder: 'szukam...',
            searchPromptText: 'wpisz nazwę lokalu',
            noResultsText: "brak wyników",   
            className: "select-corners"
        }
    
        return(
            <FilterBox title="Szukaj lokalu" line>
                <Async
                    value={selectedCorner}
                    valueComponent={this.renderValue}
                    optionComponent={OptionItem}
                    loadOptions={this.getOptions}
                    onChange={this.onInputChange}
                    onValueClick={this.onValueCikc}
                    {...selectOpt}
                />
            </FilterBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        corners: state.corners,
        selectedCorner: state.selectedCorner
    }
}

export default connect(mapStateToProps, { selectCorner } )(CornersInput);



