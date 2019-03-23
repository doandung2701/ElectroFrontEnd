import {
    GETTING_ALL_CATEGORIES,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_ALL_CATEGORIES_FAIL
} from "../../constants/constants";

var initialState = {
    categories: [],
    isGetting: false
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ALL_CATEGORIES:
            return {
                ...state,
                isGetting: true
            }
        case GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                isGetting: false,
                categories: action.categories
            }
        case GET_ALL_CATEGORIES_FAIL:
            return {
                ...state,
                isGetting: false,
                categories: []
            }
        default:
            return state;
    }
}