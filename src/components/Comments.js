import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCommentsByPosts} from '../actions';

class Comments extends Component {

    componentDidMount() {
        this.props.getCommentsByPosts(this.props.post.id)
    }

    render() {
       // const {post} = this.props;
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps({comments},{post}) {

    return {

        comments: comments
    }

}


function mapDispatchToProps(dispatch, parentId) {
    return {
        getCommentsByPosts: () => dispatch(getCommentsByPosts(parentId))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Comments))