import React, { Component } from 'react';
import Select from 'react-select';
import FilterBox from '../../../reuse/filter_box';
import { getKitchenTypes } from '../../../../selectors/selector_kitchentypes';
import { connect } from 'react-redux';
import { setValue } from 'actions/index';

class KitchenInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.renderValues = this.renderValues.bind(this);
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
                    onClick={(e) =>{
                        onRemove(value);
                        e.stopPropagation();
                }}/>
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

function mapStateToProps(state) {
    return {
        kitchenTypes: getKitchenTypes(state),
        kitchen: state.kitchen
    }
}

export default connect(mapStateToProps, { setValue })(KitchenInput);

