import {combineReducers} from 'redux'
import sortBy from 'sort-by';
import {
    GET_CATEGORY,
    GET_POST,
    GET_COMMENT_BY_POST,
    ADD_POST,
    GET_POST_BY_CATEGORY,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    VOTE_POST,
    VOTE_COMMENT,
    SORT_POSTS,
    EDIT_POST,
    EDIT_COMMENT

} from "../actions/index";
//Categories
function categories(state = [], action) {

    switch (action.type) {
        case GET_CATEGORY:
            return action.payload;
        default:
            return state
    }
}
//Posts
function posts(state = [], action) {
    const {post, posts, postId, sortType,editedPost} = action;

    switch (action.type) {
        case GET_POST:
            return action.posts;
        case ADD_POST:
            return state.concat([post]);
        case GET_POST_BY_CATEGORY:
            return posts.filter(post => !post.deleted);
        case DELETE_POST:
            return state.filter(post => post.id !== postId);
        case VOTE_POST:
            return state.map(post => {

                if (post.id === action.postId) {
                    if (action.option === 'upVote') {
                        post.voteScore += 1;
                    }
                    if (action.option === 'downVote') {
                        post.voteScore -= 1;
                    }
                }
                return post;
            });
        case SORT_POSTS:
            return [].concat(state.sort(sortBy('-' + sortType)));
        case EDIT_POST:
            return state.map(post => {
                if (post.id === postId) {
                    post = editedPost;
                }
                return post;
            });
        default:
            return state
    }
}
//Comments
function comments(state = {}, action) {
    const {comments, parentId, comment, id, currentComment, commentId, editedComment } = action;

    switch (action.type) {
        case GET_COMMENT_BY_POST:
            return {...state, [parentId]: comments};
        case ADD_COMMENT :
            return state.concat([comment]);
        case DELETE_COMMENT:
            return state;
        case VOTE_COMMENT:
            return {
                ...state,
                [parentId]: state[parentId]
                    .filter(vote => vote.id !== id)
                    .concat([currentComment])
            };
        case EDIT_COMMENT:
            return {
                ...state,
                [parentId]: state[parentId].map(comment => {
                    if (comment.id === commentId) {
                        comment = editedComment;
                    }
                    return comment;
                })
            };
        default:
            return state
    }
}
export default combineReducers({
    categories,
    posts,
    comments,

})
