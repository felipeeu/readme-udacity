import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {newPost} from '../actions';
import {guid} from "../utils";


class Form extends Component {
    addNewPost = e => {

        const submitPost = {
            id: guid(),
            title: e.target.title.value
        };
        this.props.newPost(submitPost)
    };


    render() {

        return (
            <div className="form">
                <Link to='/'>
                    <button>Close</button>
                </Link>
                <form onSubmit={this.addNewPost} className="ui form">
                    <div className="equal width fields">
                        <div className="field">
                            <label>Title</label>
                            <div className="ui input">
                                <input type="text" name="title" className="form-control" placeholder="Title"/>
                            </div>
                            <button type="submit">submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps() {

    return {


    }
}


function mapDispatchToProps(dispatch, submitPost) {
    return {
        newPost: (submitPost) => dispatch(newPost(submitPost))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Form))
