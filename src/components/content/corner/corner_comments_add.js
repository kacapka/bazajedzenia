import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';

import Button from 'reuse/button';

import { allowUserAddComment, getReviews } from 'selectors/details/detailsSelector';
import { updateInput, updateRates, addComment, commentFormValidate, } from 'actions/detailsActions';

class CommentsAdd extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
    }
    
    onButtonClick() {
        const {input, rate} = this.props.reviews;
        if(!rate) {
            this.props.commentFormValidate('rating');
        } else if(input.length < 2) {
            this.props.commentFormValidate('text');
        } else if(rate !== null & input.length > 2) {
            this.props.addComment(this.props.id); 
        }           
    }
    
    onTextareaChange(e) {
        const val = e.target.value;
        this.props.commentFormValidate('text', val);
        this.props.updateInput(val);    
    }
    
    onRatingChange(val) {
        if(val) this.props.commentFormValidate('rating', val);
        this.props.updateRates(val);
    }
    
    render() {
        const { user, allowAddComment, reviews: { input, rate, validate: { rating, text }} } = this.props;
        const errorRate = `comments-add__error ${rating}`;
        const errorText = `comments-add__error ${text}`;
            
        return (
            <Fragment>
                {allowAddComment 
                 ?
                <div className='comments-add-empty'>
                    <p>
                        Dla tej restauracji dodałeś już recenzję jako <span className='comments__username'>{user.displayName}</span>
                    </p>
                </div>
                 :
                <Fragment>
                    <div className='comments-add__rates'>
                        <Rating emptySymbol='comments__star--big ion-ios-star-outline'
                            fullSymbol='comments__star--big ion-ios-star'
                            fractions={2}
                            onChange={this.onRatingChange}
                            initialRating={rate}
                        />
                        <div className={errorRate} >
                            zapomniałeś dodać oceny
                        </div>
                    </div>
                    <div className='comments-add__input'>
                        <textarea className='comments-add__input-comment' 
                            onChange={e => this.onTextareaChange(e)}
                            value={input}
                        >
                        </textarea>
                        <div className={errorText} >
                            napisz krótką recenzję
                        </div>
                    </div>
                    <div className='button--comment-wrapper'>
                        <Button className='button--green button--comment'
                            name='dodaj opinie'
                            icon='ion-plus-round' 
                            onClick={this.onButtonClick}
                        />
                    </div>
                </Fragment>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    reviews: getReviews(state),
    allowAddComment: allowUserAddComment(state)
});

export default connect(mapStateToProps, { updateInput, updateRates, addComment, commentFormValidate })(CommentsAdd);