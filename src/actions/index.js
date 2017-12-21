import * as API from '../leituraAPI';

// Categories actions
export const GET_CATEGORY = 'GET_CATEGORY'
// Posts actions
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
//Comments actions
export const GET_COMMENT_BY_POST = 'GET_COMMENT_BY_POST'

//Categories actions
export const getCategories = () => {
    return dispatch => {
        API.fetchCategories().then(payload => {
            dispatch({
                type: GET_CATEGORY,
                payload
            })
        })
    }
}

//Posts actions
export const getPosts = () => {
    return dispatch => {
        API.fetchPosts().then(posts => {
            dispatch({
                type: GET_POST,
                posts
            })
        })
    }
}

export const newPost = (post, callback) => {
    return dispatch => {
        API.addPost(post).then(() => callback())
        dispatch({
            type: ADD_POST,
            post
        })
        console.log(post)
    }
}

//Comments actions
export const getCommentsByPosts = parentId => {
    return dispatch => {
        API.fetchCommentsByParentId(parentId).then(comments => {
            dispatch({
                type: GET_COMMENT_BY_POST,
                parentId,
                comments
            })
        })
    }
}


