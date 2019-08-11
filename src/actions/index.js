import * as API from '../leituraAPI';

// Categories actions
export const GET_CATEGORY = 'GET_CATEGORY';
// Posts actions
export const GET_POST = 'GET_POST';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const ADD_POST = 'ADD_POST';
export const GET_POST_BY_CATEGORY = 'GET_POST_BY_CATEGORY';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const SORT_POSTS = 'SORT_POSTS';
export const EDIT_POST = 'EDIT_POST';
//Comments actions
export const GET_COMMENT_BY_POST = 'GET_COMMENT_BY_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

//Categories actions
export const getCategories = () => {
    return dispatch => {
        API.fetchCategories()
            .then(payload => {
                dispatch({
                    type: GET_CATEGORY,
                    payload
                })
            })
            .catch(err => err)
    }
};

//Posts actions
export const getPosts = () => {
    return dispatch => {
        API.fetchPosts()
            .then(posts => {
                dispatch({
                    type: GET_POST,
                    posts
                })
            })
            .catch(err => err)
    }
};

export const newPost = (post) => {
    return dispatch => {
        API.addPost(post)
            .then(post =>
                dispatch({
                    type: ADD_POST,
                    post
                })
            )
            .catch(err => err)
    }
};

export const getPostByCategory = (category) => {
    return dispatch => {
        API.fetchPostByCategory(category)
            .then(posts => {
                dispatch({
                    type: GET_POST_BY_CATEGORY,
                    posts
                })
            })
            .catch(err => err)
    }
};

export const getPostById = (postId) => {
    return dispatch => {
        API.fetchPostByid(postId)
            .then(() => {
                dispatch({
                    type: GET_POST_BY_ID,
                    postId
                })

            })
            .catch(err => err)
    }
};

export const deletePost = (postId) => {
    return dispatch => {
        API.deletePost(postId)
            .then(() =>
                dispatch({
                    type: DELETE_POST,
                    postId
                })
            )
            .catch(err => err)
    }
};

export const votePost = (id, option) => {
    return dispatch => {
        API.votePost(id, option)
            .then(() => {
                dispatch({
                    type: VOTE_POST,
                    id,
                    option
                })
            })
            .catch(err => err)
    }
};

export const sortPosts = (sortType) => {
    return dispatch => {
        dispatch({
            type: SORT_POSTS,
            sortType
        })
    }
};

export const editPost = (postId, title, body) => {
    return dispatch => {
        API.editPost(postId, title, body)
            .then(editedPost => {
                dispatch({
                    type: EDIT_POST,
                    editedPost,
                    postId
                });
            })
            .catch(err => err)
    };
};

//Comments actions
export const getCommentsByPosts = (parentId) => {
    return dispatch => {
        API.fetchCommentsByParentId(parentId)
            .then(comments => {
                dispatch({
                    type: GET_COMMENT_BY_POST,
                    parentId,
                    comments
                })
            })
            .catch(err => err)
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
                })
            })
            .catch(err => err)
    }
};

export const deleteComment = (commentId) => {
    return dispatch => {
        API.deleteComment(commentId)
            .then(() =>
                dispatch({
                    type: DELETE_COMMENT,
                    commentId
                })
            )
            .catch(err => err)
    }
};

export const voteComment = (id, parentId, option) => {
    return dispatch => {
        API.voteComment(id, option)
            .then(currentComment => {
                dispatch({
                    type: VOTE_COMMENT,
                    currentComment,
                    id,
                    parentId
                })
            })
            .catch(err => err)
    }
};

export const editComment = (commentId,
                            parentId,
                            timestamp,
                            body,) => {
    return dispatch => {
        API.editComment(commentId, timestamp, body)
            .then(editedComment => {
                dispatch({
                    type: EDIT_COMMENT,
                    editedComment,
                    commentId,
                    parentId
                })
            })
            .catch(err => err)
    }
};


