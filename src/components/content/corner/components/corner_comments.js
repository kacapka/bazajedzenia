import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import 'styles/corner_comments.css';

import { updateInput, updateRates, addComment } from '../actions';

class CornerComments extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
    }
    
    onButtonClick() {
        this.props.addComment(this.props.id);        
    }
    
    onTextareaChange(e) {
        this.props.updateInput(e.target.value);    
    }
    
    onRatingChange(val) {
        this.props.updateRates(val);
    }
    
    render() {
        
        return(
            <div className='corner-comments'> 
                <div className='comments comments--current'>
                </div>
                <div className='comments comments--add'>
                    <Rating emptySymbol="comments__star ion-android-star-outline"
                        fullSymbol="comments__star ion-android-star"
                        fractions={2}
                        onChange={this.onRatingChange}
                    /> 
                    <textarea className='comments__textarea'
                        onChange={e => this.onTextareaChange(e)}
                        value={this.props.value}
                    >
                    </textarea>
                    <button className='comments__button'
                        onClick={this.onButtonClick}>
                        dodaj opinie
                    </button>
                </div>
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    user: state.user,
    value: state.comments.input
});

export default connect(mapStateToProps, { updateInput, updateRates, addComment })(CornerComments);

