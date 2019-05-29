import { SEARCHING_PRODUCTS, SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAIL, CLEAR_SEARCH_PRODUCTS } from "../../constants/constants";
import { findProductsByNameApi } from "../../api/ProductsApi";
import { message } from "antd";

const searchingProducts = ()=>({
    type: SEARCHING_PRODUCTS
})

const searchProductsSuccess = (searchProducts)=>({
    type: SEARCH_PRODUCTS_SUCCESS,
    searchProducts
})

const searchProductsFail = ()=>({
    type: SEARCH_PRODUCTS_FAIL
})


export const searchProductsByName = (name)=>{
    return dispatch=>{
        dispatch(searchingProducts());
        findProductsByNameApi(name).then(data=>{
            if (data.status===200){
                dispatch(searchProductsSuccess(data.data));}
            else{
                dispatch(searchProductsFail());
            }
        }).catch(error=>{

            if (error.response){
            message.error(error.response.data,3);}else{
                message.error("Can't search item because the server is offline",3);
            }
            dispatch(searchProductsFail());
        })
    }
}

export const clearSearchProduct = ()=>{
    return {
        type: CLEAR_SEARCH_PRODUCTS
    }
}