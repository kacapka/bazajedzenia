import React, { Component, Fragment } from 'react';
import _ from 'underscore';
import moment from 'moment';

const nowId = moment().day();

class CornerHours extends Component {
    
    render() {
        const hours = this.props.hours;
        
        return (
            <Fragment>
                    <div className="hours-row">
                        <span className="hours-row_item hours-row_item--day"></span>
                        <i className="ion-clock hours-row_item hours-row_icon"/>
                        <i className="ion-android-car hours-row_item hours-row_icon"/>
                    </div>
                    {_.map(hours, (day, value) => {
                    const className = day[0] === nowId ? 'today-active' : '';
                    return (
                        <div className={`hours-row ${className}`} key={day[0]}>
                            <span className="hours-row_item hours-row_item--day">{value}</span>
                            <span className="hours-row_item hours-row_item--hour">
                                {day[1] ? day[1] : 'zamkniete'}
                            </span>
                            <span className="hours-row_item hours-row_item--hour">
                                {day[2] ? day[2] : 'brak dowozu'}
                            </span>
                        </div>
                    )})}
            </Fragment>
        );
    }
}

export default CornerHours;