import {
    FETCHING_PRODUCTS_LIST,
    FETCH_PRODUCTS_LIST_SUCCESSFULLY,
    FETCH_PRODUCTS_LIST_FAIL,
    FETCHING_PRODUCT,
    FETCH_PRODUCT_SUCCESSFULLY,
    FETCH_PRODUCT_FAIL,
    FETCHING_ITEM_COUNT,
    FETCH_ITEM_COUNT_SUCCESS,
    FETCH_ITEM_COUNT_FAIL,
    GETTING_TOP_VIEW,
    GET_TOP_VIEW_SUCCESS,
    GET_TOP_VIEW_FAIL
} from "../../constants/constants";
import {
    getProductsListApi,
    findById,
    getItemCountsApi,
    countByBrandApi,
    findProductsByBrandApi,
    findProductsByCategoryApi,
    countByCategoryApi,
    getTopViewApi
} from "../../api/ProductsApi";
import { message } from "antd";


export const fetchingProductsList = () => ({
    type: FETCHING_PRODUCTS_LIST
})

export const fetchProductsListSuccessfully = (products) => ({
    type: FETCH_PRODUCTS_LIST_SUCCESSFULLY,
    products
})

export const fetchProductsListFail = (error) => ({
    type: FETCH_PRODUCTS_LIST_FAIL,
    error
})

export const fetchingProduct = () => ({
    type: FETCHING_PRODUCT
})

export const fetchProductSuccessfully = (product) => ({
    type: FETCH_PRODUCT_SUCCESSFULLY,
    product
})

export const fetchProductFail = (error) => ({
    type: FETCH_PRODUCT_FAIL,
    error
})

const fetchingItemCount = () => ({
    type: FETCHING_ITEM_COUNT
})

const fetchItemCountSuccess = (itemCount) => ({
    type: FETCH_ITEM_COUNT_SUCCESS,
    itemCount
})

const fetchItemCountFail = () => ({
    type: FETCH_ITEM_COUNT_FAIL
})

const gettingTopView = ()=>({
    type: GETTING_TOP_VIEW
})

const getTopViewSuccess= (topView)=>({
    type: GET_TOP_VIEW_SUCCESS,
    topView 
})

const getTopViewFail = (error)=>({
    type: GET_TOP_VIEW_FAIL,
    error
})

export const getItemCount = () => {
    return dispatch => {
        dispatch(fetchingItemCount());
        getItemCountsApi().then(data => {
            dispatch(fetchItemCountSuccess(data.data));
        }).catch(error => {
            dispatch(fetchItemCountFail())
        })
    }
}

export const getItemCountByBrand = (brandId) => {
    return dispatch => {
        dispatch(fetchingItemCount());
        countByBrandApi(brandId).then(data => {
            dispatch(fetchItemCountSuccess(data.data));
        }).catch(error => {
            dispatch(fetchItemCountFail())
        })
    }
}

export const getItemCountByCategory = (categoryId) => {
    return dispatch => {
        dispatch(fetchingItemCount());
        countByCategoryApi(categoryId).then(data => {
            dispatch(fetchItemCountSuccess(data.data));
        }).catch(error => {
            dispatch(fetchItemCountFail())
        })
    }
}

export const getProductsList = (pageable) => {
    return dispatch => {
        dispatch(fetchingProductsList());
        getProductsListApi(pageable).then(data => {
            if (data)
                dispatch(fetchProductsListSuccessfully(data.data))
        }).catch(error => {
            if (error.respose) {
                dispatch(fetchProductsListFail(error.respose.data));
                message.error("An Error Occured While Getting Product List:\n" + error.respose.data, 3);
            } else {
                dispatch(fetchProductsListFail(error));
                message.error("An Error Occured While Getting Product List:\n" + error, 3);
            }
        })
    }
}

export const getProductsListByBrand = (brandId,pageable) => {
    return dispatch => {
        dispatch(fetchingProductsList());
        findProductsByBrandApi(brandId,pageable).then(data => {
            if (data)
                dispatch(fetchProductsListSuccessfully(data.data))
        }).catch(error => {
            
            if (error.respose) {
                dispatch(fetchProductsListFail(error.respose.data));
                message.error("An Error Occured While Getting Product List:\n" + error.respose.data, 3);
            } else {
                dispatch(fetchProductsListFail(error));
                message.error("An Error Occured While Getting Product List:\n" + error, 3);
            }
        })
    }
}

export const getProductsListByCategory = (categoryId,pageable) => {
    return dispatch => {
        dispatch(fetchingProductsList());
        findProductsByCategoryApi(categoryId,pageable).then(data => {
            if (data)
                dispatch(fetchProductsListSuccessfully(data.data))
        }).catch(error => {
            
            if (error.respose) {
                dispatch(fetchProductsListFail(error.respose.data));
                message.error("An Error Occured While Getting Product List:\n" + error.respose.data, 3);
            } else {
                dispatch(fetchProductsListFail(error));
                message.error("An Error Occured While Getting Product List:\n" + error, 3);
            }
        })
    }
}

export const getTopViewList = (pageable) => {
    return dispatch => {
        dispatch(gettingTopView());
        getTopViewApi(pageable).then(data => {
            if (data)
                dispatch(getTopViewSuccess(data.data))
        }).catch(error => {
            
            if (error.respose) {
                dispatch(getTopViewFail(error.respose.data));
                message.error("An Error Occured While Getting Product List:\n" + error.respose.data, 3);
            } else {
                dispatch(getTopViewFail(error));
                message.error("An Error Occured While Getting Product List:\n" + error, 3);
            }
        })
    }
}


export const getProductById = (id) => {
    return dispatch => {
        dispatch(fetchingProduct());
        findById(id).then(data => {
            dispatch(fetchProductSuccessfully(data.data));
        }).catch(error => {
            
            dispatch(fetchProductFail(error.respose.data));
            message.error("An Error Occured While Getting Product:\n" + error.respose.data, 3);
        })
    }

}