import {combineReducers} from 'redux'
import {GET_CATEGORY, GET_POST, GET_COMMENT_BY_POST, ADD_POST} from "../actions/index";

//Categories
function categories(state = [], action) {

    switch (action.type) {
        case GET_CATEGORY:
            return action.payload
        default:
            return state
    }
}

//Posts
function posts(state = [], action) {
    const {post} = action
    switch (action.type) {
        case GET_POST:
            return action.posts
        case ADD_POST:
            return state.concat([post])
        default:
            return state

    }
}

//Comments
function comments(state = {}, action) {
    const {comments, parentId} = action
//console.log(comments)
    switch (action.type) {
        case GET_COMMENT_BY_POST:
            return {...state, [parentId]: comments}
        default:
            return state
    }

}

export default combineReducers({categories, posts, comments})
