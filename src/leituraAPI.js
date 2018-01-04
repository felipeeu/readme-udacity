export const API = 'http://localhost:3001'
let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
};
//Categories
export const fetchCategories = () => {
    return fetch(`${API}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)
};

//Posts
export const fetchPosts = () => {
    return fetch(`${API}/posts`, {headers})
        .then(res => res.json())

};

export const addPost = (post) => {
    return fetch(`${API}/posts`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(post)
        })
};

export const fetchPostByCategory = (category) => {
    return fetch(`${API}/${category}/posts`, {headers})
        .then(res => res.json())

};

export const deletePost = (id) => {
    return fetch(`${API}/posts/${id}`,
        {
            method: 'DELETE',
            headers: headers
        }).then(res => res.json())
};

export const votePost = (id, option) => {

    return fetch(`${API}/posts/${id}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ option })
    }).then(res => res.json())
};

//Comments
export const fetchCommentsByParentId = (parentId) => {
    return fetch(`${API}/posts/${parentId}/comments`, {headers})
        .then(res => res.json())
};

export const addComment = (comment) => {
    return fetch(`${API}/comments`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
};

export const deleteComment = (id) => {
    return fetch(`${API}/comments/${id}`,
        {
            method: 'DELETE',
            headers: headers,
        }).then(res => res.json())
}


export const voteComment = (id, option) => {

    return fetch(`${API}/comments/${id}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ option })
    }).then(res => res.json())
};