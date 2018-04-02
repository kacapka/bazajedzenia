import React, { Component } from 'react';

import ListItem from './corners_list_item';

class CornerItem extends Component {
        
    componentDidUpdate() {
        //const div = this.efectDiv.firstChild;
        //div.addEventListener('transitionend', () => div.classList.remove('list-item--higlight')); 
    }
    
    componentWillUpdate() {
        //const div = this.efectDiv.firstChild;
        //div.classList.add('list-item--higlight');
    }
     
    render() {
        const corner = this.props.corner;
        
        return (
            <div className="list-item--wrapper list-item--onchange" 
                ref={ref => this.efectDiv = ref}
            > 
                <ListItem name={corner.label}
                    street={corner.street}
                    id={corner.id} 
                    ref={ref => this.efectDiv = ref}
                />
            </div>
        );
    }
}

export default CornerItem;