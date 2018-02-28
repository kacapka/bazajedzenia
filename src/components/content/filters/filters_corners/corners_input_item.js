import React, { Component } from 'react';
import ListItem from './corners_list_item';

class CornerItem extends Component {
    
    render() {
        const corner = this.props.corner;
        
        return (
            <div className="list-item--wrapper"> 
                <ListItem name={corner.label}
                    street={corner.street}
                    id={corner.id} />
            </div>
        );
    }
}

export default CornerItem;