import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';


//actions
import {
    getPosts,
    getCommentsByPosts,
    editPost

} from '../actions';

class Editpost extends Component {

    componentDidMount() {
        this.props.getPosts();
        this.props.getCommentsByPosts(this.props.postId);
    }

    editPost = e => {
        const postId = this.props.postId;
        const title = e.target.title.value;
        const body = e.target.body.value;

        if (body === '' || title === '') {
            alert('Both body and title fields are mandatory');
        }

        else {
            this.props.editPost(postId, title, body);
        }
    };

    render() {

        const {post} = this.props;

        return !post ? "carregando" : (
            <div>
                <div>
                    <div className="form">
                        <Link to='/'>
                            <Button icon='close'
                                    circular={true}/>
                        </Link>
                        <form onSubmit={this.editPost} className="ui form">
                            <div className="equal width fields">
                                <div className="field">
                                    <label>Author</label>
                                    <div className="ui input">
                                        <input type="text"
                                               defaultValue={post.author}
                                               name="author"
                                               className="form-control"
                                               placeholder="Author"/>
                                    </div>
                                    <label>Title</label>
                                    <div className="ui input">
                                        <input
                                            defaultValue={post.title}
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="Title"/>
                                    </div>

                                    <div className="field">
                                        <label>Category</label>
                                        <select name="category">

                                                <option>{post.category}</option>
                                        </select>
                                    </div>
                                    <label>Post</label>
                                    <div className="ui input">
                                    <textarea
                                        defaultValue={post.body}
                                        type="text"
                                        name="body"
                                        className="form-control"
                                        placeholder="Post"/>
                                    </div>
                                    <div className="submit">
                                        <Button
                                            type="submit"
                                            content="Update Post"
                                            icon='checkmark'
                                            labelPosition='left'
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({posts, comments }, {match}) {

    return {
        allposts: posts,
        comments: comments[match.params.postId],
        postId: match.params.postId,
        category: match.params.category,
        post: posts.find(post => post.id === match.params.postId),

    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        editPost: (postId, title, body) => dispatch(editPost(postId, title, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editpost);