import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCornerById } from 'selectors/selector_corner';
import Loader from '../../reuse/loader';
import 'styles/corner_details.css';
import pizza from '../../../images/kitchen/pizza.jpg';
import Button from '../../reuse/button';
import CornerHours from './corner_hours';
import { Link } from 'react-router-dom';

class Corner extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderDetails = this.renderDetails.bind(this);
    }
     
    renderDetails() {
        const { hours, corner: {name, street, town, district, locationInfo, clientNumber1, clientNumber2, cornerTypes, mail, homePage, instagram, facebook }} = this.props.details;

        return (
            <Fragment>
                <div className='corner-header'>
                    <img src={pizza} 
                        className='corner-header__img'/>
                    <div className='corner-header__name'>
                        {name}
                    </div>
                    <Link to="/">
                        <Button className="button--back"
                            name="powrot do mapy"
                            icon="ion-arrow-left-c" />
                    </Link>
                </div>
                <div className='corner-info'>
                    <div className='corner-info-details'>
                        <div className="corner-info--box">
                            <div className="corner-info__icon">
                                <i className="ion-home" />
                            </div>
                            <div className="corner-info__values">
                                <span>{street}</span>
                                <span>{town.name}, {district.name}</span>
                                <span className="corner-info__location-info">{locationInfo}</span>
                            </div>
                        </div>
                        <div className="corner-info--box">
                            <div className="corner-info__icon">
                                <i className="ion-ios-telephone" />
                            </div>
                            <div className="corner-info__values">
                                <span>{clientNumber1}</span>
                                <span>{clientNumber2}</span>
                            </div>
                        </div>
                        <div className="corner-info--box">
                            <div className="corner-info__icon">
                                <i className="ion-android-restaurant" />
                            </div>
                            <div className="corner-info__values">
                                {cornerTypes.map((type, i) =><span key={i}>{type.foodType.name}</span>)}
                            </div>
                        </div>
                        <div className="corner-info--social">
                            <a href={mail} target='_blank'
                                className={mail ? 'on' : 'off'}>
                                <i className="ion-email social-icon" />
                            </a>
                            <a href={homePage} target='_blank'
                                className={homePage ? 'on' : 'off'}>
                                <i className="ion-earth social-icon" />
                            </a>
                            <a href={facebook} target='_blank'
                                className={facebook ? 'on' : 'off'}>
                                <i className="ion-social-facebook social-icon" />
                            </a>
                            <a href={instagram} target='_blank'
                                className={instagram ? 'on' : 'off'}>
                                <i className="ion-social-instagram social-icon" />
                            </a>
                        </div>
                    </div>
                    <div className='corner-info-hours'>
                        <CornerHours hours={hours} />
                    </div> 
                </div>         
            </Fragment>
        );
    }
    
    
    render() {
        const details = this.props.details;
        return(
            <div className="corner-details"> 
                {!details ? <Loader className="loader--details"/> : this.renderDetails()} 
            </div>
        );    
    }
}

function mapStateToProps(state, props) {
    
    return {
        details: getCornerById(props.match.params.id)(state)
    }
}

export default connect(mapStateToProps)(Corner);