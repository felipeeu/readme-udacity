import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../actions';

class Posts extends Component {

    static propTypes = {
        props: PropTypes.array
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {posts} = this.props;
        return (
            <div>
                <h6>Posts</h6>

                {posts &&
                posts.map(post => (

                    <div key={post.id}>
                        <p>{post.title}</p>
                        <p><span className="post-body">{post.body}</span></p>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(posts) {
    return {
        posts: posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))


