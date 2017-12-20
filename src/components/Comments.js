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
                {allcomments &&
                allcomments.map(comment => (

                    <div key={comment.id} className="comment">
                        <p>Comment</p>
                        <p>{comment.body}</p>
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


function mapDispatchToProps(dispatch , parentID) {
    return {
        getCommentsByPosts: (parentID) => dispatch(getCommentsByPosts(parentID))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))