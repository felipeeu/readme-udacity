import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCommentsByPosts} from '../actions';


class Comments extends Component {

    componentDidMount() {
        this.props.getCommentsByPosts(this.props.parentId)
    }

    render() {
        const {allcomments} = this.props;

        return (
            <div>

                <h6>Comments</h6>
                {allcomments &&
                allcomments.map(comment => (
                    <div key={comment.id} className="comment">

                        <h5>{comment.body}</h5>
                        <h6>{comment.author}</h6>
                        <button>vote</button>
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
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))