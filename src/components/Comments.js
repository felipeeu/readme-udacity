import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import sortBy from 'sort-by';

//actions
import {
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
    };

    onClickVoteComment = (commentId, parentId, option) => {
        this.props.voteComment(commentId, parentId, option)
        this.props.getCommentsByPosts(this.props.parentId)
    };

    render() {
        const {allcomments} = this.props;

        return (
            <div>
                {allcomments && allcomments
                    .sort(sortBy('voteScore'))
                    .reverse()
                    .map(comment => (
                        <div key={comment.id} className="comment">
                            <h4>{comment.body}</h4>
                            <h5>{comment.author}</h5>
                            <br/>
                            <div>
                                <Button
                                    onClick={() => {
                                        this.onClickVoteComment(comment.id, comment.parentId, 'upVote');
                                    }}
                                    content='Like'
                                    icon='heart'
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
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        voteComment: (commentId, parentId, option) => dispatch(voteComment(commentId, parentId, option))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))