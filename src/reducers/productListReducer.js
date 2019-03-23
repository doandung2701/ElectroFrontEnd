import {
    FETCHING_PRODUCTS_LIST,
    FETCH_PRODUCTS_LIST_SUCCESSFULLY,
    FETCH_PRODUCTS_LIST_FAIL,
} from "../constants/constants";

var initialState = {
    products: [],
    isFetching: false,
    error: null
}

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PRODUCTS_LIST:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_PRODUCTS_LIST_SUCCESSFULLY:
            return {
                ...state,
                isFetching: false,
                products: action.products,
                error: null
            }
        case FETCH_PRODUCTS_LIST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
}