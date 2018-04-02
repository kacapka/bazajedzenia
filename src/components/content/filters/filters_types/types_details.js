import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

import { createDaysHours } from 'utils/bj_time';

import FilterBox from 'reuse/filter_box';
import DetailsInput from './types_details_input';
import DetailsDays from './types_details_days';

import { checkboxSelect, getTime } from 'actions/filterActions';
import { getCheckbox } from 'selectors/filters/filterSelector';

import 'rc-time-picker/assets/index.css';
import 'styles/details_filter.css';

const hours = createDaysHours();
const transitionOpt = {
    transitionName: 'slide-down',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300    
}

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
    
    onSelectChange(e) {
        const seconds = e.target.value;
        this.props.getTime(seconds);
    }
    
    render() {
        const { isMobile, time, checkbox: { delivery, openNow, chooseDate } } = this.props;

        const days = chooseDate && <DetailsDays />;
        
        return (
            <FilterBox title='Szczegóły'>
                <DetailsInput
                    id='delivery'
                    name="dowóz" 
                    checked={delivery}
                    onChange={e => this.onInputChange(e)} 
                />
                <DetailsInput 
                    id='openNow'
                    name="otwarte teraz" 
                    checked={openNow}  
                    onChange={e => this.onInputChange(e)} 
                />
                <DetailsInput className="details-input--date-picker"
                    id='chooseDate'
                    name="wybierz dzień i godzinę" 
                    checked={chooseDate}
                    onChange={e => this.onInputChange(e)} 
                />
                {isMobile ?
                <select className='details-select'
                    ref={select => this.select = select}
                    disabled={!chooseDate}
                    onChange={e => this.onSelectChange(e)} 
                    value={time}
                >
                    {hours.map(hour => <option value={hour.sec} key={hour.string}>{hour.string}</option>)}
                </select>
                :
                <TimePicker
                    className="details-time-picker"
                    showSecond={false}
                    defaultValue={moment()}
                    disabled={!chooseDate} 
                    onChange={this.onTimeChange}
                    allowEmpty={false} 
                />
                }
                <CSSTransitionGroup {...transitionOpt} >
                    {days}
                </CSSTransitionGroup>
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    checkbox: getCheckbox(state),
    isMobile: state.isMobile,
    time: state.filter.time
})

export default connect(
    mapStateToProps, 
    { checkboxSelect, getTime }
)(DetailsFilter);