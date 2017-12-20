import {combineReducers} from 'redux'
import {GET_CATEGORY , GET_POST ,GET_COMMENT_BY_POST} from "../actions/index";



function categories(state=[], action) {

    switch(action.type) {
        case GET_CATEGORY:
            return action.payload
        default:
            return state
    }
}

function posts (state=[], action) {

    switch(action.type) {
        case GET_POST:
            return action.posts
        default:
            return state

    }
}

function comments (state={}, action) {
const {comments , parentId} = action
//console.log(comments)
    switch(action.type) {
        case GET_COMMENT_BY_POST:
            return { ...state, [parentId]: comments }
        default:
            return state
    }

}

export default combineReducers({categories, posts , comments})
