import { GETTING_SEEN_PRODUCTS, GET_SEEN_PRODUCTS_SUCCESS, GET_SEEN_PRODUCTS_FAIL, GETTING_SEEN_PRODUCTS_COUNT, GET_SEEN_PRODUCTS_COUNT_SUCCESS, GET_SEEN_PRODUCTS_COUNT_FAIL, ADDING_SEEN_PRODUCT, ADD_SEEN_PRODUCT_SUCCESS, ADD_SEEN_PRODUCT_FAIL, ADD_SEEN_PRODUCT_LOCAL, REST_SEEN_PRODUCTS_TO_LOCAL } from "../../../../../constants/constants";
import { addSeenProductApi, getSeenProductByUserIdApi, getSeenProductsCountApi } from "../../../../../api/ProductsApi";
import { message } from "antd";

const gettingSeenProducts = ()=>({
    type: GETTING_SEEN_PRODUCTS
})

const getSeenProductsSuccess = (products)=>({
    type: GET_SEEN_PRODUCTS_SUCCESS,
    products
})

const getSeenProductsFail = (error)=>({
    type: GET_SEEN_PRODUCTS_FAIL,
    error
})

const getingSeenProductsCount = ()=>({
    type: GETTING_SEEN_PRODUCTS_COUNT
})

const getSeenProductsCountSuccess = (count)=>({
    type: GET_SEEN_PRODUCTS_COUNT_SUCCESS,
    count
})

const getSeenProductCountFail = ()=>({
    type: GET_SEEN_PRODUCTS_COUNT_FAIL
})

const addingSeenProduct = ()=>({
    type: ADDING_SEEN_PRODUCT
})

const addSeenProductSuccess = ()=>({
    type: ADD_SEEN_PRODUCT_SUCCESS,
})

const addSeenProductFail = ()=>({
    type: ADD_SEEN_PRODUCT_FAIL
})

export const addSeenProductLocal = (product)=>({
    type: ADD_SEEN_PRODUCT_LOCAL,
    product
})

export const resetToLocal = ()=>({
    type: REST_SEEN_PRODUCTS_TO_LOCAL
})

export const addSeenProduct = (productId)=>{
    return dispatch=>{
        dispatch(addingSeenProduct());
        addSeenProductApi(productId).then(data=>{
            dispatch(addSeenProductSuccess())
        }).catch(error=>{
            dispatch(addSeenProductFail())
        })
    }
}

export const getSeenProducts = (pageable)=>{
    return dispatch=>{
        dispatch(gettingSeenProducts());
        getSeenProductByUserIdApi(pageable).then(data=>{
            dispatch(getSeenProductsSuccess(data.data));
        }).catch(error=>{
            dispatch(getSeenProductsFail(error));
            message.error("Can't get your seen products because of a server error");
        })
    }
}

export const getSeenProductsCount = (userId)=>{
    return dispatch=>{
        dispatch(getingSeenProductsCount());
        getSeenProductsCountApi(userId).then(data=>{
            dispatch(getSeenProductsCountSuccess(data.data))
        }).catch(error=>{
            dispatch(getSeenProductCountFail());
        })
    }
}