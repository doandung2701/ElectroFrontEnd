import {
    FETCHING_PRODUCT,
    FETCH_PRODUCT_SUCCESSFULLY,
    FETCH_PRODUCT_FAIL
} from "../constants/constants";

var initialState = {
    product: {
        productDetails: [{
            productImg: [{
                imgUrl: ''
            }]
        }]
    },
    isLoading: false
}

export const productPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCT_SUCCESSFULLY:
            return {
                ...state,
                product: action.product,
                isLoading: false
            }
        case FETCH_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}