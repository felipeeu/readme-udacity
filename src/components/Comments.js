import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import sortBy from 'sort-by';

//actions
import {
    getPosts,
    getCommentsByPosts,
    deleteComment,
    voteComment
} from '../actions';


class Comments extends Component {

    componentDidMount() {
        this.props.getCommentsByPosts(this.props.parentId)
    }

    onClickDeleteComment = (commentId) => {
        this.props.deleteComment(commentId)
        this.props.getCommentsByPosts(this.props.parentId)
        this.props.getPosts()
    };

    onClickVoteComment = (commentId, parentId, option) => {
        this.props.voteComment(commentId, parentId, option)

    };

    render() {
        const {allcomments} = this.props;

        return (
            <div className="comment-div">
                {allcomments && allcomments
                    .sort(sortBy('voteScore')) // sort comments
                    .reverse() // most voted in the top
                    .map(comment => (
                        <div key={comment.id} className="comment">
                            <h5 className="comment-body">{comment.body}</h5>
                            <h5 className="comment-author">{comment.author}</h5>
                            <br/>
                            <div>
                                <Button
                                    onClick={() => {
                                        this.onClickVoteComment(comment.id, comment.parentId, 'upVote');
                                    }}
                                    content='Like'
                                    icon='thumbs outline up'
                                    label={{as: 'a', basic: true, content: comment.voteScore}}
                                    labelPosition='right'
                                    size='mini'

                                />
                                <Button
                                    onClick={() => {
                                        this.onClickVoteComment(comment.id, comment.parentId, 'downVote');
                                    }}
                                    content='Dislike'
                                    icon='dislike outline'
                                    labelPosition='left'
                                    size='mini'
                                />
                            </div>
                            <br/>

                            <Button
                                onClick={() => this.onClickDeleteComment(comment.id)}
                                content='Delete comment'
                                icon='trash'
                                labelPosition='left'
                                size='mini'
                            />
                            <br/>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                    ))}
            </div>
        )
    }
}

function mapStateToProps({comments}, {parentId}) {

    return {
        allcomments: comments[parentId]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        voteComment: (commentId, parentId, option) => dispatch(voteComment(commentId, parentId, option))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))