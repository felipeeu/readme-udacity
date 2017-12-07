import * as API from '../leituraAPI';
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_POST = 'GET_POST'





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


export const getComments = () => {
    return dispatch => {
        API.fetchPosts().then(posts => {
            dispatch({
                type: GET_POST,
                posts
            })
        })
    }
}
