import {
    GETTING_ALL_BRANDS,
    GET_ALL_BRANDS_SUCCESS,
    GET_ALL_BRANDS_FAIL,
    GETTING_BRANDS_BY_CATEGORY,
    GET_BRANDS_BY_CATEGORY_SUCCESS,
    GET_BRANDS_BY_CATEGORY_FAIL
} from "../../constants/constants";

var intitialState = {
    brands: [],
    brandsByCategory: [],
    isGettingBrandsByCategory: false,
    isGetting: false
}

export const brandsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case GETTING_ALL_BRANDS:
            return {
                ...state,
                isGetting: true,
            }
        case GET_ALL_BRANDS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                brands: action.brands
            }
        case GET_ALL_BRANDS_FAIL:
            return {
                ...state,
                isGetting: false,
                brands: []
            }
        case GETTING_BRANDS_BY_CATEGORY:
            return {
                ...state,
                isGettingBrandsByCategory: true
            }
        case GET_BRANDS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                isGettingBrandsByCategory: false,
                brandsByCategory: action.brands
            }
        case GET_BRANDS_BY_CATEGORY_FAIL:
            return {
                ...state,
                isGettingBrandsByCategory: false,
                brandsByCategory: []
            }
        default:
            return state;
    }
}