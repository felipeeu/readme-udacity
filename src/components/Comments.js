import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Card, Icon} from 'semantic-ui-react';
import sortBy from 'sort-by';

//actions
import {
    getPosts,
    getCommentsByPosts,
    deleteComment,
    voteComment
} from '../actions';


class Comments extends Component {


    onClickDeleteComment = (commentId) => {
        this.props.deleteComment(commentId);
        this.props.getCommentsByPosts(this.props.postId);
        this.props.getPosts();

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
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        <Icon name='user'
                                              color='grey'
                                              size='small'/><br/>
                                        {comment.author}
                                    </Card.Header>
                                    <Card.Description>
                                        {comment.body}
                                    </Card.Description>
                                    <div className="edit-delete-comment-button">
                                        <Link to={`/${this.props.category}/${comment.parentId}/${comment.id}/edit`}>
                                            <Button
                                                content='Edit'
                                                size='mini'
                                            />
                                        </Link>
                                        <Button
                                            onClick={() => this.onClickDeleteComment(comment.id)}
                                            icon='trash'
                                            size='mini'
                                        />
                                    </div>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
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
                                            labelPosition='right'
                                            size='mini'
                                        />
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    ))}
            </div>
        )
    }
}

function mapStateToProps({comments}, {match}) {

    return {
        allcomments: comments[match.params.postId],
        postId: match.params.postId
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