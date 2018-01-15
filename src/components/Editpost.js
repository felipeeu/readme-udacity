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
        } else {
            this.props.editPost(postId, title, body);
        }
    };

    render() {

        const {allcategories, postId} = this.props;



        return (
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
                                               defaultValue="Valor do autor"
                                               name="author"
                                               className="form-control"
                                               placeholder="Author"/>
                                    </div>
                                    <label>Title</label>
                                    <div className="ui input">
                                        <input
                                            defaultValue="valor do title"
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="Title"/>
                                    </div>

                                    <div className="field">
                                        <label>Category</label>
                                      <select>
                                        {allcategories &&
                                        allcategories.map(category => (
                                            <option key={category.name} value={category.name}>{category.name}</option>
                                        ))}
                                      </select>
                                    </div>
                                    <label>Post</label>
                                    <div className="ui input">
                                    <textarea
                                        defaultValue="Valor do corpo"
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
                                        <Link to={`/post/${postId}`}>
                                            <Button
                                                content="Cancel"
                                                className="btn btn-danger"/>
                                        </Link>
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

function mapStateToProps({posts, comments, categories}, {match}) {

    return {
        allposts: posts,
        comments: comments[match.params.postId],
        postId: match.params.postId,
        allcategories: categories,
        category: match.params.category

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