import {
    authHeader,
    isProductExist
} from "../../../../../helpers/helper";
import {
    GET_SEEN_PRODUCTS_COUNT_SUCCESS,
    GETTING_SEEN_PRODUCTS,
    GET_SEEN_PRODUCTS_SUCCESS,
    GET_SEEN_PRODUCTS_FAIL,
    ADD_SEEN_PRODUCT_LOCAL,
    REST_SEEN_PRODUCTS_TO_LOCAL,
} from "../../../../../constants/constants";

var seenProductsLocal = localStorage.getItem('seenProducts');
var initialState = authHeader() ? {
    seenProducts: [],
    count: 0,
    isGettingSeenProducts: false,
    error: null
} : {
    seenProducts: seenProductsLocal ? JSON.parse(seenProductsLocal) : [],
    count: seenProductsLocal?JSON.parse(seenProductsLocal).length:0
}

export const seenProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REST_SEEN_PRODUCTS_TO_LOCAL:
            return {
                seenProducts: seenProductsLocal ? JSON.parse(seenProductsLocal) : [],
                count: seenProductsLocal?JSON.parse(seenProductsLocal).length:0
            }
        case GET_SEEN_PRODUCTS_COUNT_SUCCESS:
            return {
                ...state,
                count: action.count
            }
        case GETTING_SEEN_PRODUCTS:
            return {
                ...state,
                isGettingSeenProducts: true,
                seenProducts: []
            }
        case GET_SEEN_PRODUCTS_SUCCESS:
            return {
                ...state,
                isGettingSeenProducts: false,
                seenProducts: action.products
            }
        case GET_SEEN_PRODUCTS_FAIL:
            return {
                ...state,
                isGettingSeenProducts: false
            }
        case ADD_SEEN_PRODUCT_LOCAL:
            if (isProductExist(state.seenProducts, action.product.productId))
                return state;
            var seenProducts = [action.product, ...state.seenProducts];
            localStorage.setItem("seenProducts", JSON.stringify(seenProducts));
            return {
                seenProducts,
                count: seenProducts.length
            }
        default:
            return state;
    }
}