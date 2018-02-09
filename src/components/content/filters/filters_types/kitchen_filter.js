import React, { Component } from 'react';
import Select from 'react-select';
import 'styles/select_input.css';
import FilterBox from '../filter_box';
import { connect } from 'react-redux';
import { setValue } from 'actions/index';
 
const types = [
    {value: 'polska',label: 'polska'},
    {value: 'turecka',label: 'turecka'},
    {value: 'kebab',label: 'kebab'},
    {value: 'wloska',label: 'wloska'},
    {value: 'europejska',label: 'europejska'},
    {value: 'grecka',label: 'grecka'},
    {value: 'grecka',label: 'grecka'},
    {value: 'grecka',label: 'grecka'},
    {value: 'grecka',label: 'grecka'},
    {value: 'grecka',label: 'grecka'},
    {value: 'grecka',label: 'grecka'},
    {value: 'pizza]',label: 'pizza'}
]; 

class KitchenFilter extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.renderValues = this.renderValues.bind(this);
    }
    
	handleSelectChange(value) {
		console.log('You\'ve selected:', value);
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
        return (
            <FilterBox title="Rodzaj kuchni">
                <Select
                    value={this.props.value}
                    options={types}
                    onChange={this.handleSelectChange}
    
                    backspaceRemoves={false}
                    closeOnSelect={false}
                    tabSelectsValue={false}
                    noResultsText="brak wyników"
                    optionClassName="select__type"
                    placeholder="szukaj kuchni"
                    valueComponent={this.renderValues}
                    simpleValue
                    multi
                    className="select"
				/>
            </FilterBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps, { setValue })(KitchenFilter);

