import * as API from '../leituraAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () => {
    return dispatch => {
        API.fetchCategories().then(payload => {
            dispatch({
                type: GET_CATEGORIES,
                payload
            });
            console.log(payload)
        });
    };
};