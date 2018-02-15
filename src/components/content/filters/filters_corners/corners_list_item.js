import React, { Component } from 'react';
import 'styles/list_item.css';

class ListItem extends Component {
    render() {
        const { name, street } = this.props;
        
        return(    
            <div className="list-item">
                <div className="list-item__name">
                    {name}
                </div>
                <div className="list-item__street">
                    ul. {street}
                </div>
                <div className="list-item__button">
                    <div className="list-item__color1"></div>
                    <div className="list-item__color2"></div>
                    <div className="list-item__color3"></div>
                    wiecej
                </div>
            </div>
        );
    }
}

export default ListItem;