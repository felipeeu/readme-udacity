import React, {Component} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../actions';
import {Card, Icon} from 'semantic-ui-react'
import Comments from "./Comments";

class Posts extends Component {

    static propTypes = {
        posts: PropTypes.array
    };

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const {allposts} = this.props;
        return (

            <div>
                <h6>Posts</h6>

                {allposts &&
                allposts.map(post => (
                    <div key={post.id} className="post-body">

                        <Card>
                            <Card.Content>
                                <Link to={`/post/${post.id}`}>
                                    <Card.Header>
                                        {post.title}
                                    </Card.Header>
                                </Link>
                                <Card.Meta>
        <span className='date'>
            {post.author}
        </span>
                                </Card.Meta>
                                <Card.Description>
                                    {post.body}
                                    <Route path={`/post/${post.id}`} render={({history}) => (
                                        <Comments post={post}/>)}/>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='barcode'/>
                                    {post.category}
                                </a>
                            </Card.Content>
                        </Card>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({posts}, {comments}) {

    return {
        allposts: posts,

    }

}

function mapDispatchToProps(dispatch, parentId) {
    return {
        getPosts: () => dispatch(getPosts()),

    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))


