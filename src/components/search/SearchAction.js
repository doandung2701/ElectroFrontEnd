import { SEARCHING_PRODUCTS, SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAIL, CLEAR_SEARCH_PRODUCTS } from "../../constants/constants";
import { findProductsByNameApi } from "../../api/ProductsApi";
import Alert from 'react-s-alert';

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
                Alert.closeAll();
            Alert.error(error.response.data,{
                timeout: 3000,
                position: 'top-right',
                effect: 'slide',
            });}else{
                Alert.error("Can't search item because the server is offline",{
                    timeout: 3000,
                    position: 'top-right',
                    effect: 'slide',
                });
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