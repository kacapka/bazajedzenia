import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showCornerOnMap } from 'actions/mapActions';
import { toggleView } from 'actions/mobileActions';

import 'styles/list_item.css';

class ListItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.onPinClick = this.onPinClick.bind(this);
        this.onDetailsClick = this.onDetailsClick.bind(this);
    }
        
    onPinClick(e) {
        const id = this.props.id;
        e.preventDefault();
        e.stopPropagation();
        this.props.showCornerOnMap(id);
        this.props.toggleView('isMap');
    }
    
    onDetailsClick() {
        const id = this.props.id;
        this.props.showCornerOnMap(id);
    }
    
    render() {
        const { name, street, id } = this.props;
        
        return(    
            <div className="list-item">
                {<div className="list-item__name">
                    {name}
                </div>}
                <div className="list-item__street">
                    ul. {street}
                </div>
                <div className="list-item__button">
                    <div className="list-item__color1"></div>
                    <div className="list-item__color2"></div>
                    <div className="list-item__color3"></div>
                    <Link to={`/${id}`}
                        onClick={this.onDetailsClick}
                    >
                        więcej
                    </Link>
                </div>
                <i className="ion-android-pin list-item__icon"
                    onClick={this.onPinClick} >
                </i>
            </div>
            
        );
    }
}

export default connect(null, { showCornerOnMap, toggleView })(ListItem);