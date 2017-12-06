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
            <ol>
                {posts &&
                posts.map(post => (
                    <li key={post.id}>
                        <p>{post.title}</p>
                    </li>
                ))}
            </ol>

        </div>

    )
    }

}

function mapStateToProps(posts) {
    return {
        posts: posts
    }
}

export default withRouter(connect(mapStateToProps, {getPosts})(Posts))


