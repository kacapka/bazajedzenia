import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import CornerComments from './corner_comments';
import CornerHours from './corner_hours';
import Loader from 'reuse/loader';
import Button from 'reuse/button';

import { fetchComments, resetCommentForm } from 'actions/detailsActions';
import { fetchPhoto } from 'actions/dataActions';
import { getCornerPhotos } from 'selectors/data/dataSelector';
import { getCornerById } from 'selectors/selector_corner';

import 'styles/corner_details.css';
import "react-image-gallery/styles/css/image-gallery.css";

const galleryOpt = {
    additionalClass: 'corner-header__images',
    thumbnailPosition: 'right',
    showPlayButton: false,
    showNav: false
}

class Corner extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderDetails = this.renderDetails.bind(this);
    }
    
    componentWillMount() {
        const id = this.props.match.params.id
        this.props.fetchComments(id);
        this.props.fetchPhoto(id);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.location !== this.props.location) {
            const id = nextProps.match.params.id
            this.props.resetCommentForm();
            this.props.fetchComments(id);   
            this.props.fetchPhoto(id);
        }
    }
         
    renderDetails() {
        const { hours, corner: {name, street, town, district, locationInfo, clientNumber1, clientNumber2, cornerTypes, mail, homePage, instagram, facebook }} = this.props.details;
        const photos = this.props.photos;
        
        const social = [
            {name: homePage, icon: 'ion-earth'},
            {name: facebook, icon: 'ion-social-facebook'},
            {name: instagram, icon: 'ion-social-instagram'}
        ]
        
        return (
            <Fragment>
                <div className='corner-header'>
                    <div className="corner-info--social">
                        {social.map(social => (
                            <a href={social.name} 
                                key={social.name}
                                target='_blank'
                                className={social.name ? 'on' : 'off'}>
                                <i className={`${social.icon} social-icon`} />
                            </a>
                        ))}
                    </div>
                    <Link to="/">
                        <Button className="button--back"
                            name="powrot do mapy"
                            icon="ion-arrow-left-c" 
                        />
                    </Link>
                    {photos  ? 
                    <ImageGallery items={photos} 
                        {...galleryOpt}
                    />
                    : <Loader className="loader--details"/>
                    }
                </div>
                <div className='corner-info'>
                    <div className='corner-info-details'>
                        <div className="corner-info--box">
                            <div className='corner-info__name'>
                                {name}
                            </div>    
                        </div>
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
                                <span>{mail}</span>
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
                    </div>
                    <div className='corner-info-hours'>
                        <CornerHours hours={hours} />
                    </div> 
                </div>        
                <CornerComments id={this.props.match.params.id} />
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

const mapStateToProps = (state, props) => ({
    details: getCornerById(props.match.params.id)(state),
    photos: getCornerPhotos(props.match.params.id)(state)
})

export default connect(mapStateToProps, { fetchComments, resetCommentForm, fetchPhoto })(Corner);

