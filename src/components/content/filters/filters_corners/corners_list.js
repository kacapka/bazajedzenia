import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterBox from 'reuse/filter_box';
import ListItem from './corners_list_item';
import Loader from 'reuse/loader';

import { fetchCorners } from 'actions/dataActions';
import { getResultCorners } from 'selectors/data/dataSelector';
import { getResultTitle} from 'selectors/filters/filterSelector';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderList = this.renderList.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCorners('recommended');
    }
         
    renderList() {
        const toRender = this.props.toRender;
        if(!toRender) return <Loader />;
        if(toRender.length === 0) return <div>nie znaleziono lokali spelniajacych podane kryteria</div>;
        
        return toRender.map((corner, index) => {
            return (
                <li key={corner.id}>
                    <ListItem name={corner.name} 
                        street={corner.street}
                        id={corner.id} />
                </li>
            );
        });
    }
     
    render() {   
         
        return(
            <FilterBox title={this.props.resultsTitle}>
                <ul className="corners-list">
                    {this.renderList()}
                </ul> 
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    resultsTitle: getResultTitle(state),
    toRender: getResultCorners(state)
})

export default connect(mapStateToProps, { fetchCorners })(CornersList);


