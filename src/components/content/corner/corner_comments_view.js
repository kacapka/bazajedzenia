import React, { Component, Fragment } from 'react';
import Rating from 'react-rating';
import _ from 'underscore';

class CommentsView extends Component {
    render() {
        const comments = this.props.comments;
        
        return(
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
        )
    }
}

export default CommentsView;