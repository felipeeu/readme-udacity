import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {newPost} from '../actions';
import {guid} from "../utils";


class Form extends Component {
    addNewPost = e => {

        const submitPost = {
            id: guid(),
            author: e.target.author.value,
            title: e.target.title.value,
            body: e.target.body.value
        };
        this.props.newPost(submitPost)
    };


    render() {

        return (
            <div><h6>Add new post</h6>
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
                                <label>Post</label>
                                <div className="ui input">
                                    <input type="text" name="body" className="form-control" placeholder="Post"/>
                                </div>
                                  <div className="submit">
                                    <button type="submit" className="ui icon left labeled button" >
                                        <i aria-hidden="true" className="checkmark icon"/>Submit</button>
                                  </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps() {

    return {}
}


function mapDispatchToProps(dispatch) {
    return {
        newPost: (submitPost) => dispatch(newPost(submitPost))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Form))
