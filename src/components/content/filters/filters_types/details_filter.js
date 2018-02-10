import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import 'rc-time-picker/assets/index.css';
import 'styles/details_filter.css';
import moment from 'moment';

import FilterBox from '../filter_box';
import DetailsInput from './details_input';
import DetailsDays from './details_days';
import TimePicker from 'rc-time-picker';
import { connect } from 'react-redux';
import { checkboxSelect } from 'actions/index';


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
        // here set time to app state,
        // decide wchich format is neeeded to filter
        // in corners data
    }
    
    render() {
        const { delivery, openNow, chooseDate } = this.props.checkbox;
        
        const days = chooseDate && <DetailsDays />;
        //const now = new Date();
        
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
                    onChange={this.onTimeChange} />
                <CSSTransitionGroup
                    transitionName="slide-down"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {days}
                </CSSTransitionGroup>
            </FilterBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkbox: state.checkbox
    }
}

export default connect(mapStateToProps, { checkboxSelect })(DetailsFilter);