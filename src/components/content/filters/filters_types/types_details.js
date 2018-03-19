import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

import FilterBox from 'reuse/filter_box';
import DetailsInput from './types_details_input';
import DetailsDays from './types_details_days';

import { checkboxSelect, getTime } from 'actions/filterActions';
import { getCheckbox } from 'selectors/filters/filterSelector';

import 'rc-time-picker/assets/index.css';
import 'styles/details_filter.css';

class DetailsFilter extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this)
    }
    
    onInputChange(e) {
        const { checked, id} = e.target;
        this.props.checkboxSelect({[id]: checked}); 
    }
    
    onTimeChange(value) {
        this.props.getTime(value);
    }
    
    render() {
        const { delivery, openNow, chooseDate } = this.props.checkbox;
        const transitionOpt = {
            transitionName: 'slide-down',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300    
        }
        
        const days = chooseDate && <DetailsDays />;
        
        return (
            <FilterBox title='Szczegóły'>
                <DetailsInput
                    id='delivery'
                    name="dowóz" 
                    checked={delivery}
                    onChange={e => this.onInputChange(e)} />
                <DetailsInput 
                    id='openNow'
                    name="otwarte teraz" 
                    checked={openNow}  
                    onChange={e => this.onInputChange(e)} />
                <DetailsInput className="details-input--date-picker"
                    id='chooseDate'
                    name="wybierz dzień i godzinę" 
                    checked={chooseDate}
                    onChange={e => this.onInputChange(e)} />
                <TimePicker
                    className="details-time-picker"
                    showSecond={false}
                    defaultValue={moment()}
                    disabled={!chooseDate} 
                    onChange={this.onTimeChange}
                    allowEmpty={false} />
                <CSSTransitionGroup {...transitionOpt} >
                    {days}
                </CSSTransitionGroup>
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    checkbox: getCheckbox(state)
})

export default connect(
    mapStateToProps, 
    { checkboxSelect, getTime }
)(DetailsFilter);