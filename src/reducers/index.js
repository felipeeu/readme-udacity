
import {GET_CATEGORY} from "../actions/index";



function categories(state=[], action) {

    switch(action.type) {
        case GET_CATEGORY:
            return action.payload.categories
        default:
            return state
    }
}


export default categories