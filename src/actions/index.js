

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    }
}

function receiveCategories(json) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: json.categories,
        receivedAt: Date.now()
    }
}


const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'}




export function getCategories() {
    return function (dispatch) {
        dispatch(requestCategories())
        return fetch(`${api}/categories`, {headers})
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json))
            )
    }
}

