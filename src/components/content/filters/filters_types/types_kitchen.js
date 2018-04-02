import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import FilterBox from 'reuse/filter_box';

import { setValue } from 'actions/filterActions';
import { getKitchenTypes } from 'selectors/data/kitchenTypesSelector';
import { getKitchen } from 'selectors/filters/filterSelector';

class KitchenInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.renderValues = this.renderValues.bind(this);
    }
    
    onRemoveClick(e, value, onRemove) {
        onRemove(value);
        e.stopPropagation();
        e.preventDefault();
    }
     
	handleSelectChange(value) {
		this.props.setValue(value);
	}
    
    renderValues(params) {
        const { id, children, value, onRemove } = params;
        
        return (
            <div id={id}
                className="select__value-selected">
                <span className="select__value-name">
                    {children}
                </span>
                
                <i className="select__value-icon ion-close-circled" 
                    onClick={(e) => { this.onRemoveClick(e, value, onRemove) } } 
                    onTouchEnd={(e) => { this.onRemoveClick(e, value, onRemove) } }
                />
                
            </div>
        );
    }
    
    render() {    
        const selectOpt = {
            backspaceRemoves: false,
            closeOnSelect: false,
            tabSelectsValue: false,
            noResultsText: "brak wyników",
            optionClassName: "select__type--kitchen",
            placeholder: "wszystkie kuchnie",
            clearAllText: 'wyczyść',
            multi: true,
            className: "select-kitchen"
        }
        
        return (
            <FilterBox title="Rodzaj kuchni" line>
                <Select
                    value={this.props.kitchen}
                    options={this.props.kitchenTypes}
                    onChange={this.handleSelectChange}
                    valueComponent={this.renderValues}
                    {...selectOpt}
				/>
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    kitchenTypes: getKitchenTypes(state),
    kitchen: getKitchen(state)
})

export default connect(mapStateToProps, { setValue })(KitchenInput);

