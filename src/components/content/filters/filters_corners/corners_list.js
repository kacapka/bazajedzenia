import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterBox from '../../../reuse/filter_box';
import ListItem from './corners_list_item';
import { fetchCorners } from 'actions/index';
import Loader from '../../../reuse/loader';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderList = this.renderList.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCorners('recommended');    
    }
    
    renderList() {
        const { toRender } = this.props;
        if(!toRender) return <Loader size={40}/>;
        if(toRender.length === 0) return <div>nie znaleziono lokali spelniajacych podane kryteria</div>;
        
        return toRender.map(corner => {
            return (
                <li key={corner.id}>
                    <ListItem name={corner.name} 
                        street={corner.street} />
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
};

function mapStateToProps(state) {
    return {
        toRender: state.userCorners,
        resultsTitle: state.resultsTitle
    }
};

export default connect(mapStateToProps, { fetchCorners })(CornersList);
