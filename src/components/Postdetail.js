import React, {Component} from 'react';
import {connect} from 'react-redux';

//actions
import {
    getCommentsByPosts,
    getPostById
} from '../actions';

import Comments from './Comments';
import Posts from './Posts';

class Postdetail extends Component {

    componentDidMount = () => {
        const {postId} = this.props;
        this.props.getCommentsByPosts(postId);
        this.props.getPostById(postId);
    };

    render() {
        const {allposts} = this.props;
        const postIdArray = allposts.map(post => post.id)
        console.log(this.props)
        //if (!postIdArray.includes(postId)){

      //     return <div>No Post Found</div>
      //  }
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
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        getPostById: (postId) =>  dispatch(getPostById(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Postdetail);
