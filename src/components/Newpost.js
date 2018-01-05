import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {guid} from "../utils";

//actions
import {
    newPost,
    getCategories
} from '../actions';


class Newpost extends Component {

    componentDidMount() {
        this.props.getCategories();
    };

    addNewPost = e => {

        const submitPost = {
            id: guid(),
            timestamp: Date.now(),
            author: e.target.author.value,
            title: e.target.title.value,
            body: e.target.body.value,
            category: e.target.category.value


        };
        this.props.newPost(submitPost)
    };

    render() {
        const {allcategories} = this.props;

        return (
            <div>
                <h6>Add new post</h6>
                <div className="form">
                    <Link to='/'>
                        <button className="ui icon basic button">
                            <i aria-hidden="true" className="window close icon"/>
                        </button>
                    </Link>
                    <form onSubmit={this.addNewPost} className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label>Author</label>
                                <div className="ui input">
                                    <input type="text" name="author" className="form-control" placeholder="Author"/>
                                </div>
                                <label>Title</label>
                                <div className="ui input">
                                    <input type="text" name="title" className="form-control" placeholder="Title"/>
                                </div>

                                <div className="field">
                                    <label>Category</label>
                                    <select name="category" className="btn btn-default dropdown-toggle">
                                        {allcategories &&
                                        allcategories.map(category => (
                                            <option key={category.name} value={category.name}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <label>Post</label>
                                <div className="ui input">
                                    <textarea type="text" name="body" className="form-control" placeholder="Post"/>
                                </div>
                                <div className="submit">
                                    <button type="submit" className="ui icon left labeled button">
                                        <i aria-hidden="true" className="checkmark icon"/>Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({categories}) {

    return {
        allcategories: categories
    }
}


function mapDispatchToProps(dispatch) {
    return {

        newPost: (submitPost) => dispatch(newPost(submitPost)),
        getCategories: () => dispatch(getCategories())
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Newpost))
