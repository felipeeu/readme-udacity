import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
        const commentId = this.props.comment.id;
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

        console.log(this.props.comment)
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.updateComment} className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label>Comment</label>
                                <div className="ui input">
                                            <textarea type="text"
                                                      name="body"
                                                      className="form-control"
                                                      defaultValue="msg do cropo"
                                                      placeholder="Comment"/>
                                </div>
                                <div className="submit">
                                    <button type="submit"
                                            className="ui icon left labeled button">
                                        <i aria-hidden="true"
                                           className="checkmark icon"/>Update Comment
                                    </button>

                                    <Link to={`/post/${this.props.parentId}`}>
                                        <button className="btn btn-danger">Cancel</button>
                                    </Link>
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
    return {
        allcomments: comments,
        parentId: match.params.postId,
        comment:  comments[match.params.postId].find(comment => comment.id === match.params.commentId)

    };
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
