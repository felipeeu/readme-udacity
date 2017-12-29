import * as API from '../leituraAPI';

// Categories actions
export const GET_CATEGORY = 'GET_CATEGORY';
// Posts actions
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const GET_POST_BY_CATEGORY = 'GET_POST_BY_CATEGORY';
export const DELETE_POST = 'DELETE_POST';
//Comments actions
export const GET_COMMENT_BY_POST = 'GET_COMMENT_BY_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

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
};

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
};


export const newPost = (post) => {
    return dispatch => {
        API.addPost(post).then(post =>
            dispatch({
                type: ADD_POST,
                post
            })
        )
    }
};


export const getPostByCategory = (category) => {
    return dispatch => {
        API.fetchPostByCategory(category).then(posts => {
            dispatch({
                type: GET_POST_BY_CATEGORY,
                posts
            })
        })
    }
};


export const deletePost = (id) => {
    return dispatch => {
        API.deletePost(id).then(posts =>
            dispatch({
                type: DELETE_POST,
                id
            })
        )
    }
};


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
};


export const newComment = (comment, parentId) => {
    return dispatch => {
        API.addComment(comment)
            .then(comment => {
                dispatch({
                    type: ADD_COMMENT,
                    parentId,
                    comment
                });
            })
    };
};


