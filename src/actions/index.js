import * as API from '../leituraAPI';

export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_POST = 'GET_POST'
export const GET_COMMENT_BY_POST = 'GET_COMMENT_BY_POST'

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


export const getCommentsByPosts = parentId => {
    return dispatch => {
        API.fetchCommentsByParentId(parentId).then(comments => {
            dispatch({
                type: GET_COMMENT_BY_POST,
                parentId,
                comments
            })
            //console.log(parentId)
        })
    }
}


