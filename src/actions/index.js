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
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_POST = 'VOTE_POST';


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


export const deletePost = (postId) => {
    return dispatch => {
        API.deletePost(postId).then(posts =>
            dispatch({
                type: DELETE_POST,
                postId
            })
        )
    }
};

export const votePost = (id, option) => {
    return dispatch => {
        API.votePost(id, option).then(post => {
            dispatch({
                type: VOTE_POST,
                id,
                option
            })
        })
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

export const deleteComment= (commentId) => {
    return dispatch => {
        API.deleteComment(commentId).then (comments =>
        dispatch({
            type:DELETE_COMMENT,
            commentId

        })
        )
    }

}






