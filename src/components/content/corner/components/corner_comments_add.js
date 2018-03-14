import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import Button from '../../../reuse/button';
import { updateInput, updateRates, addComment } from '../actions';

class CommentsAdd extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
    }
    
    onButtonClick() {
        const { rateError, inputError, props: {input, rate} } = this;
        if(!rate) {
            rateError.classList.add('on');
        } else if(input.length < 2) {
            inputError.classList.add('on');
        } else if(rate !== null & input.length > 2) {
            rateError.classList.remove('on');
            inputError.classList.remove('on');
            this.props.addComment(this.props.id); 
        }           
    }
    
    onTextareaChange(e) {
        if(this.inputError) this.inputError.classList.remove('on');
        this.props.updateInput(e.target.value);    
    }
    
    onRatingChange(val) {
        if(this.rateError) this.rateError.classList.remove('on');
        this.props.updateRates(val);
    }
    
    render() {
        const comments = this.props.comments;
        
        return (
            <Fragment>
                <div className='comments-add__rates'>
                    <Rating emptySymbol='comments__star--big ion-android-star-outline'
                        fullSymbol='comments__star--big ion-android-star'
                        fractions={2}
                        onChange={this.onRatingChange}
                        initialRating={this.props.rate}
                    />
                    <div className='comments-add__error' ref={el => this.rateError = el}>
                        zapomniałeś dodać oceny!
                    </div>
                </div>
                <div className='comments-add__input'>
                    <textarea className='comments-add__input-comment' 
                        onChange={e => this.onTextareaChange(e)}
                        value={this.props.input}
                    >
                    </textarea>
                    <div className='comments-add__error' ref={el => this.inputError = el}>
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
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    input: state.reviews.input,
    comments: state.reviews.comments,
    rate: state.reviews.rate
});

export default connect(mapStateToProps, { updateInput, updateRates, addComment })(CommentsAdd);