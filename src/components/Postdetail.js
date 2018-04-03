import React, {Component} from 'react';
import {connect} from 'react-redux';

//actions
import {
    getCommentsByPosts
} from '../actions';

import Comments from './Comments';
import Posts from './Posts';

class Postdetail extends Component {

    componentDidMount = () => {
        this.props.getCommentsByPosts(this.props.postId)
    };

    render() {
        const { allposts , postId  } = this.props;
        const postIdArray = allposts.map(post => post.id)

        if (!postIdArray.includes(postId)) {
            return <div>No Post Found</div>
        }
        return (
            <div>
                <Posts/>
                <Comments
                    category={this.props.category}
                    parentId={this.props.postId}
                    history={this.props.history}/>
            </div>
        )
    }
}

function mapStateToProps({posts}, {match}) {

    return {
        allposts: posts,
        postId: match.params.postId,
        category: match.params.category
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Postdetail);
