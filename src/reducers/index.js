import {combineReducers} from 'redux'

import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
    REQUEST_POST,
    RECEIVE_POST
} from '../actions'

const initialCategoryState = {
    isFetching: false,
    categories: []
}

const initialPostState = {
    isFetching: false,
    posts: []

}

function categories(state = initialCategoryState, action) {

    switch (action.type) {
        case REQUEST_CATEGORIES:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                isFetching: false,
                categories: action.categories
            }
        default:
            return state
    }
}


function posts(state = initialPostState, action) {

    switch (action.type) {
        case REQUEST_POST:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_POST:
            return {
                ...state,
                isFetching: false,
                posts: action.posts
            }
        default:
            return state
    }
}

//const rootReducer = combineReducers({categories , posts})
//export default rootReducer
//export default posts
export default combineReducers({
    posts,
    categories}
);