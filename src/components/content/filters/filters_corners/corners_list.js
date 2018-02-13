import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterBox from '../../../reuse/filter_box';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderList = this.renderList.bind(this);
    }
    
    renderList() {
        const { toRender } = this.props;
        if(!toRender) return <div>nie wybrano filtrow</div>;
        if(toRender.length === 0) return <div>nie znaleziono lokali</div>;
        
        return toRender.map(corner => {
            return (
                <li>
                    {corner.name}
                </li>
            );    
        });
    }
     
    render() {
        
        return(
            <FilterBox title="Twoje wyniki">
                <ul>
                    {this.renderList()}
                </ul>
            </FilterBox>
        );
    }
};

function mapStateToProps(state) {
    return {
        toRender: state.userCorners
    }
};

export default connect(mapStateToProps)(CornersList);
