import {combineReducers} from 'redux'
import {GET_CATEGORY , GET_POST} from "../actions/index";



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

export default combineReducers({categories, posts})
