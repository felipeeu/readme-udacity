import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
//actions
import {
    getCommentsByPosts,
    editComment
} from '../actions';

class Editcomment extends Component {
    componentDidMount() {
        this.props.getCommentsByPosts(this.props.parentId);
    }

    updateComment = e => {
        e.preventDefault();
        const commentId = this.props.commentId;
        const postId = this.props.parentId;
        const timestamp = Date.now();
        const body = e.target.body.value;

        if (body === '') {
            alert('Comment body cannot be empty');
        } else {
            this.props.editComment(commentId, postId, timestamp, body);
        }
    };

    render() {
        const {comment} = this.props;
        return (
            <div>
                <div className="form">
                    <Link to={`/post/${this.props.parentId}`}>
                        <Button icon='close'
                                circular={true}/>
                    </Link>
                    <form onSubmit={this.updateComment} className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label>Comment</label>
                                <div className="ui input">
                                            <textarea type="text"
                                                      name="body"
                                                      className="form-control"
                                                      defaultValue={comment.body}
                                                      placeholder="Comment"/>
                                </div>
                                <div className="submit">
                                        <button type="submit"
                                                className="ui icon left labeled button">

                                            <i aria-hidden="true"
                                               className="checkmark icon"/>Update Comment
                                        </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({comments}, {match}) {
    if (!comments) {
        return "carregando"
    } else {
        return {
            allcomments: comments,
            parentId: match.params.postId,
            comment: comments && comments[match.params.postId] ? comments[match.params.postId].find(comment => comment.id === match.params.commentId) : {},
            commentId: match.params.commentId
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        editComment: (commentId, postId, timestamp, body) => dispatch(editComment(commentId, postId, timestamp, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    Editcomment
);
