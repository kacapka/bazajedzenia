import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsView from './corner_comments_view';
import CommentsAdd from './corner_comments_add';
import 'styles/corner_comments.css';

class CornerComments extends Component {
    
    render() {
        const { user, comments } = this.props;
        
        return(
            <div className='corner-comments'> 
                <div className='comments comments-view'>
                    <div className='comments__title'>
                        Recenzje użytkowników
                    </div>
                    {comments ? <CommentsView comments={comments} />
                    :
                    <div className='comments-view-empty'>
                        <p>Ten lokal nie ma jeszcze receznji, badź pierwszy i podziel się z innymi użytkownikami swoją opinią.</p>
                    </div>
                    }
                </div>
                <div className='comments comments-add'>
                    <div className='comments__title'>
                        Podziel się swoją opinią
                    </div>
                    {user ? <CommentsAdd />
                    :
                    <div className='comments-add-empty'>
                        <p>Zaloguj się aby dodać receznję.</p>
                    </div>
                    }
                </div>
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    user: state.user,
    comments: state.reviews.comments
});

export default connect(mapStateToProps)(CornerComments);

