import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDay } from 'actions/index';

const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd']

class DetailsDays extends Component {
    
    renderDays() {
        console.log(this.props);
    
        return days.map((day, index) => {
            const { activeDay } = this.props;
            const className = activeDay == index ? 'details-days__item--open' : ''; 
            return (
                <li className={`details-days__item ${className}`}
                    key={index}
                    data-dayid={index}
                    onClick={e => {
                        this.props.selectDay(e.target.dataset.dayid);
                    }}>
                    {day}
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

function mapStateToProps(state) {
    return {
        activeDay: state.activeDay
    }
}

export default connect(mapStateToProps, { selectDay })(DetailsDays);