import { SEARCHING_PRODUCTS, SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAIL, CLEAR_SEARCH_PRODUCTS } from "../constants/constants";

var initialState = {
    searchProducts: [],
    isSearching: false,
}

export const searchProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHING_PRODUCTS:
            return {
                ...state,
                isSearching: true
            }
        case SEARCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isSearching: false,
                searchProducts: action.searchProducts
            }
        case SEARCH_PRODUCTS_FAIL:
        case CLEAR_SEARCH_PRODUCTS:
            return {
                ...state,
                isSearching: false,
                searchProducts:[],
            }
        default:
            return state;
    }
}