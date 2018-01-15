import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card, Icon, Button} from 'semantic-ui-react';
import {formatTimestamp, pluralSingular} from "../utils";

//actions
import {
    getPosts,
    deletePost,
    votePost,
    getCommentsByPosts,
    editPost
} from '../actions';

//components

import Newcomment from './Newcomment';


class Posts extends Component {


    componentDidMount = () => {
        this.props.getPosts()
    };
    onClickDeletePost = (id) => {
        this.props.deletePost(id)
    };
    onClickVote = (postId, option) => {
        this.props.votePost(postId, option);
        this.props.getPosts();
    };

    render() {
        const {allposts} = this.props;

        return (
            <div className="post-container">
                {allposts &&
                allposts
                    .map(post => (
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

                                        <Link to={`/${post.category}/${post.id}`}>
                                            <Button
                                                content='Post Detail'/>
                                        </Link>

                                        <p> {pluralSingular(post.commentCount, 'comment')}</p>
                                        <div className="vote-post-button">
                                            <Button
                                                onClick={() => {
                                                    this.onClickVote(post.id, 'upVote');
                                                }}
                                                content='Like'
                                                icon='thumbs outline up'
                                                label={{as: 'a', basic: true, content: post.voteScore}}
                                                labelPosition='right'
                                            />
                                            <Button
                                                onClick={() => {
                                                    this.onClickVote(post.id, 'downVote');
                                                }}
                                                content='Dislike'
                                                icon='dislike outline'
                                                labelPosition='left'
                                            />
                                        </div>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>

                                    <a>
                                        <Icon name='barcode'/>
                                        {post.category}
                                    </a>
                                    <p>{formatTimestamp(post.timestamp)}</p>


                                    <div className='post-delete-button'>
                                        <Link to={`/${post.category}/${post.id}/edit`}>
                                            <Button
                                                content="Edit"
                                                icon="edit"
                                                labelPosition="left"
                                            />
                                        </Link>

                                        <Button onClick={() => this.onClickDeletePost(post.id)}
                                                content="Delete"
                                                icon="trash"
                                                id="deleteButton"
                                                labelPosition="right"/>
                                    </div>

                                </Card.Content>
                            </Card>
                        </div>
                    ))}
            </div>
        )
    }
}

function mapStateToProps({posts}, {match}) {
    const {category} = match.params;

    return {
        allposts: category ? posts.filter(post => post.category === category) : posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        deletePost: (id) => dispatch(deletePost(id)),
        votePost: (id, option) => dispatch(votePost(id, option)),
        getCommentsByPosts: (parentId) => dispatch(getCommentsByPosts(parentId)),
        editPost: (postId, title, body) => dispatch(editPost(postId, title, body))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))

