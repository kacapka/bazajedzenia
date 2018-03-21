import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showCornerOnMap } from 'actions/filterActions';

import { getSelectedCorner } from 'selectors/filters/filterSelector';

import 'styles/list_item.css';

class ListItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.listDiv = document.querySelector('.corners-list');
        this.parentDivHeight = document.querySelector('.filters-column--corners').offsetHeight;
        this.onIconClick = this.onIconClick.bind(this);
    }
    
    componentDidMount() {
        this.setDivHeight();
    }
        
    componentDidUpdate() {
        this.setDivHeight();
    }
        
    onIconClick(e) {
        const id = this.props.id;
        e.preventDefault();
        e.stopPropagation();
        this.props.showCornerOnMap(id);
    }
    
    setDivHeight() {
        const { parentDivHeight, listDiv } = this;
        const topDiv = document.querySelector('.filter-box--padding');
        const newPx =  parentDivHeight - topDiv.offsetHeight - 65;
        listDiv.style.height = newPx + 'px';       
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
                    <Link to={`/${id}`}>więcej</Link>
                </div>
                <i className="ion-android-pin list-item__icon"
                    onClick={this.onIconClick} >
                </i>
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    selectedCorner: getSelectedCorner(state)
})

export default connect(mapStateToProps, { showCornerOnMap })(ListItem);