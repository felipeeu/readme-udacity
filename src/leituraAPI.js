export const API = 'http://localhost:3001'
let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
}

export const fetchCategories = () => {
    return fetch(`${API}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}


export const fetchPosts = () => {
    return fetch(`${API}/posts`, { headers })
        .then(res => res.json())

}

export const fetchCommentsByParentId = (parentId) => {
    return fetch(`${API}/posts/${parentId}/comments`, { headers })
        .then(res => res.json())

}
