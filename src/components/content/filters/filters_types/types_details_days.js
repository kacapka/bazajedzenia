import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDay } from 'actions/filterActions';
import { getActiveDay } from 'selectors/filters/filterSelector';

//convert data days to moment days id
const days = [
    { id: 1, day: 'Pon' }, { id: 2, day: 'Wt' }, { id: 3, day: 'Śr' }, { id: 4, day: 'Czw' }, { id: 5, day: 'Pt' }, { id: 6, day: 'So' }, { id: 0, day: 'Nd' }
]

class DetailsDays extends Component {
    
    renderDays() {
        return days.map( day => {
            const { activeDay } = this.props;
            const className = parseInt(activeDay, 10) === day.id ? 'details-days__item--open' : ''; 
            
            return (
                <li className={`details-days__item ${className}`}
                    key={day.id}
                    data-dayid={day.id}
                    onClick={e => {
                        this.props.selectDay(parseInt(e.target.dataset.dayid, 10));
                    }}
                >
                    {day.day}
                </li>
           ); 
        });
    }
    
    render() {
        return (
            <ul className="details-days">
                {this.renderDays()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    activeDay: getActiveDay(state)
})

export default connect(mapStateToProps, { selectDay })(DetailsDays);