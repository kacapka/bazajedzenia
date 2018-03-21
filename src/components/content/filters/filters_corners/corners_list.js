import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import FilterBox from 'reuse/filter_box';
import ListItem from './corners_list_item';
import Loader from 'reuse/loader';

import { fetchCorners, getMoreItems } from 'actions/dataActions';
import { getCornersToLoad } from 'selectors/data/dataSelector';
import { getResultTitle} from 'selectors/filters/filterSelector';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.loadMoreItems = this.loadMoreItems.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCorners('recommended');
    }
                 
    loadMoreItems(page) {
        this.props.getMoreItems();   
    }
     
    render() {   
        const toLoad = this.props.toLoad;  
        const list = (toLoad.length === 0) ? 
            <div className='corners-not-found'>
              <div>nie znaleziono lokali spelniajacych podane kryteria</div>
              <i className='ion-sad-outline' />
            </div> : 
            toLoad.map((corner, index) => {
            return (
                <div key={corner.id}>
                    <ListItem name={corner.name} 
                        street={corner.street}
                        id={corner.id} />
                </div>
            );
        });     
             
        return(
            <FilterBox title={this.props.resultsTitle}
                className='filter-box--title-padding'
            >
                <div className="corners-list">
                    <InfiniteScroll loadMore={this.loadMoreItems}
                        useWindow={false}
                        loader={<Loader key={1}/>}
                        hasMore={this.props.load.isMore}
                        threshold={1}
                    >
                        {list}
                    </InfiniteScroll> 
                </div> 
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    resultsTitle: getResultTitle(state),
    toLoad: getCornersToLoad(state),
    load: state.data.load
})

export default connect(mapStateToProps, { fetchCorners, getMoreItems })(CornersList);


