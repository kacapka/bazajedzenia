import React, { Component } from 'react';
import FilterBox from '../filter_box';
import DetailsInput from './details_input';


class DetailsFilter extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(e) {
        console.log(e.target.checked);
        console.log(e.target.id);
    }
    
    render() {
        return (
            <FilterBox title='Szczegóły'>
                <DetailsInput id='delivery'
                    name="dowóz" />
            </FilterBox>
        );
    }
}

export default DetailsFilter;