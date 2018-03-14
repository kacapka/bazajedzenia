import React, { Component, Fragment } from 'react';
import _ from 'underscore';
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
    
    renderComments() { 
        const comments = this.props.comments;
        return (
            <Fragment>
                {_.map(comments, (value, key) => (
                    <div key={key}
                        className='comments__item'
                    >
                        <img className='comments__img'
                            src={value.userPhoto} 
                            alt='user' 
                        />
                        <div className='comments__box'>
                            <div className='comments__rates'>
                                <div className='comments__username'>
                                    {value.userName}
                                </div>
                                <Rating initialRating={value.rate}
                                    emptySymbol='comments__star--small ion-android-star-outline'
                                    fullSymbol='comments__star--small ion-android-star'
                                    readonly
                                />
                            </div>
                            <div className='comments__content'>
                                {value.content}
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
    
    render() {
        
        const comments = this.props.comments;
        
        return(
            <div className='corner-comments'> 
                <div className='comments comments--current'>
                    {comments ? this.renderComments()
                    :
                    <div>
                        no comments
                    </div>
                    }
                </div>
                <div className='comments comments--add'>
                    <Rating emptySymbol='comments__star--big ion-android-star-outline'
                        fullSymbol='comments__star--big ion-android-star'
                        fractions={2}
                        onChange={this.onRatingChange}
                        initialRating={this.props.rate}
                    /> 
                    <textarea className='comments__textarea'
                        onChange={e => this.onTextareaChange(e)}
                        value={this.props.input}
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
    input: state.reviews.input,
    comments: state.reviews.comments,
    rate: state.reviews.rate
});

export default connect(mapStateToProps, { updateInput, updateRates, addComment })(CornerComments);

