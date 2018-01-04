import {combineReducers} from 'redux'
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
    VOTE_COMMENT

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
function posts(state = [], action){
    const {post, posts, postId} = action;

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
            return state.map (post => {

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
        default:
            return state
    }
}

//Comments
function comments(state = {}, action) {
    const {comments, parentId, comment , id , currentComment  } = action;
    switch (action.type) {
        case GET_COMMENT_BY_POST:
            return {...state, [parentId]: comments};
        case ADD_COMMENT :
            return state.concat([comment]);
        case DELETE_COMMENT:
            return state

        case VOTE_COMMENT:
            return{
        ...state,
            [parentId]: state[parentId]
            .filter(vote => vote.id !== id)
            .concat([currentComment])
    };


        default:
            return state
    }
}


export default combineReducers({categories, posts, comments})
