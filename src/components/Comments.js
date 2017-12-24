import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCommentsByPosts} from '../actions';

class Comments extends Component {

    componentDidMount() {
        this.props.getCommentsByPosts(this.props.post.id)
    }

    render() {
        const {allcomments} = this.props;

        return (
            <div>
                <h6>Comments</h6>
                {allcomments &&
                allcomments.map(comment => (
                    <div key={comment.id} className="comment">
                        <ul>
                            <li>{comment.body}</li>
                        </ul>

                    </div>
                ))}
            </div>

        )
    }
}

function mapStateToProps({comments}, {post}) {

    return {
        allcomments: comments[post.id]
    }
}

function mapDispatchToProps(dispatch, parentID) {
    return {
        getCommentsByPosts: (parentID) => dispatch(getCommentsByPosts(parentID))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))