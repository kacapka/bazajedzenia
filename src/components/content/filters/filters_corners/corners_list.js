import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import FilterBox from 'reuse/filter_box';
import ListItem from './corners_list_item';
import Loader from 'reuse/loader';

import { getMoreItems } from 'actions/dataActions';
import { getCornersToLoad, getCorners, getBool } from 'selectors/data/dataSelector';
import { getResultTitle, getSelectedCorner } from 'selectors/filters/filterSelector';
 
class CornersList extends Component {
    
    constructor(props) {
        super(props);
        
        this.loadMoreItems = this.loadMoreItems.bind(this);
        this.setCornerListDivHeight = this.setCornerListDivHeight.bind(this);
    }
    
    componentDidMount() {
        !this.props.isMobile && this.setCornerListDivHeight();
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.slectedCorner !== this.props.selectedCorner) {
            setTimeout(this.setCornerListDivHeight, 50);   
        }
    }
    
    setCornerListDivHeight() {
        if (!this.props.isMobile) {
            const menuOuter = document.querySelector('.Select-menu-outer');
            const topDiv = document.querySelector('.filter-box-corner-input'); 
            let topDivheight;
            if(menuOuter) {
                topDivheight = topDiv.offsetHeight - 210;    
            } else {
                topDivheight = topDiv.offsetHeight  
            }
            const listDiv = document.querySelector('.corners-list');
            const parentDiv = document.querySelector('.filters-column--corners');
            listDiv.style.height = parentDiv.offsetHeight - topDivheight - 65 + 'px';    
        }
    }
              
    loadMoreItems() {
        this.props.getMoreItems();   
    }
     
    render() {
        const { toLoad, isMore, corners, resultsTitle, isMobile } = this.props;
        
        console.log(this.props.result)
         
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
                        hasMore={isMore}
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
    selectedCorner: getSelectedCorner(state),
    corners: getCorners(state),
    isMore: getBool(state),
    isMobile: state.isMobile,
    
    result: state.data.resultCorners
})

export default connect(mapStateToProps, { getMoreItems })(CornersList);


