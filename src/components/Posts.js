import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card, Icon, Button} from 'semantic-ui-react';

//actions
import {
    getPosts,
    deletePost,
    votePost
} from '../actions';

//components
import Comments from './Comments';
import Newcomment from './Newcomment'


class Posts extends Component {


    componentDidMount() {
        this.props.getPosts()
    };

    onClickDeletePost = (id) => {
        this.props.deletePost(id)
    };

    onClickVote = (postId, option) => {
        this.props.votePost(postId, option)
        this.props.getPosts()
    };

    render() {
        const {allposts} = this.props;

        return (
            <div>
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
                                    <br/>
                                    <br/>
                                    <Comments parentId={post.id}/>

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='barcode'/>
                                    {post.category}
                                </a>
                                <p>{Date(post.timestamp)}</p>


                                <Button
                                    onClick={() => {
                                        this.onClickVote(post.id, 'upVote');
                                    }}
                                    content='Like'
                                    icon='heart'
                                    label={{as: 'a', basic: true, content: post.voteScore}}
                                    labelPosition='right'
                                    positive= {true}
                                />
                                <Button
                                    onClick={() => {
                                        this.onClickVote(post.id, 'downVote');
                                    }}
                                    content='Dislike'
                                    icon='dislike outline'
                                    labelPosition='left'
                                    negative={true}
                                />


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
        votePost: (id, option) => dispatch(votePost(id, option))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))


