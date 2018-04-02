import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import FilterBox from 'reuse/filter_box';
import ListItem from './corners_list_item';
import Loader from 'reuse/loader';

import { getMoreItems } from 'actions/dataActions';
import { getCornersToLoad } from 'selectors/data/dataSelector';
import { getResultTitle} from 'selectors/filters/filterSelector';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.loadMoreItems = this.loadMoreItems.bind(this);
    }
              
    loadMoreItems() {
        this.props.getMoreItems();   
    }
     
    render() {   
        
        const { toLoad, load, corners, resultsTitle, isMobile } = this.props;
         
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
            <FilterBox title={resultsTitle}
                className='filter-box--title-padding filter-box--mobile-result'
            >
                <div className="corners-list">
                    {corners.length === 0 ? <Loader /> :
                    <InfiniteScroll loadMore={this.loadMoreItems}
                        useWindow={isMobile ? true : false}
                        loader={<Loader key={1} />}
                        hasMore={load.isMore}
                        threshold={100}
                    >
                        {list}
                    </InfiniteScroll> 
                    }
                </div> 
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    resultsTitle: getResultTitle(state),
    toLoad: getCornersToLoad(state),
    load: state.data.load,
    corners: state.data.corners,
    isMobile: state.isMobile
})

export default connect(mapStateToProps, { getMoreItems })(CornersList);


