import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts, deletePost} from '../actions';
import {Card, Icon} from 'semantic-ui-react';

//components
import Comments from './Comments';
import Newcomment from './Newcomment'


class Posts extends Component {

    static propTypes = {
        posts: PropTypes.array
    };

    componentDidMount() {
        this.props.getPosts()
    };

    onClickDeletePost = (id) => {
        this.props.deletePost(id)
    };


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
                                <Card.Header>
                                    {post.title}
                                </Card.Header>
                                <Card.Meta>
        <span className='date'>
            {post.author}
        </span>
                                </Card.Meta>
                                <Card.Description>
                                    {post.body}

                                    <Newcomment parentId={post.id}/>

                                    <Comments parentId={post.id}/>

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='barcode'/>
                                    {post.category}
                                </a>
                                <p>{Date(post.timestamp)}</p>

                                <button onClick={() => this.onClickDeletePost(post.id)} className="ui icon basic button"
                                        id="deleteButton">
                                    <i aria-hidden="true" className="trash icon"/>
                                </button>
                            </Card.Content>
                        </Card>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({posts}) {

    return {
        allposts: posts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        deletePost: (id) => dispatch(deletePost(id)),
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))


