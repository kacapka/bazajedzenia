import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'styles/list_item.css';
import { showCornerOnMap } from 'actions/index';

class ListItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.onIconClick = this.onIconClick.bind(this);
    }
    
    onIconClick(e) {
        const id = this.props.id;
        e.preventDefault();
        e.stopPropagation();
        this.props.showCornerOnMap(id);
    }
    
    componentDidUpdate() {
        this.refs.efect.addEventListener('transitionend', () => this.refs.efect.classList.remove('list-item--higlight')); 
    }
    
    componentWillUpdate() {
        this.refs.efect.classList.add('list-item--higlight');
    }
      
    render() {
        const { name, street, id } = this.props;
        
        return(    
            <div ref="efect" className="list-item">
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
                    <Link to={`/${id}`}>więcej</Link>
                </div>
                <i className="ion-android-pin list-item__icon"
                    onClick={this.onIconClick} >
                </i>
            </div>
            
        );
    }
}

export default connect(null, { showCornerOnMap })(ListItem);