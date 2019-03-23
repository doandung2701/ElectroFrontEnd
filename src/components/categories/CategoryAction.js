import { GETTING_ALL_CATEGORIES, GET_ALL_CATEGORIES_FAIL, GET_ALL_CATEGORIES_SUCCESS } from "../../constants/constants";
import { getAllCategoriesApi } from "../../api/CategoryApi";

const gettingAllCategories = ()=>({
    type: GETTING_ALL_CATEGORIES
})

const getAllCategoriesFail = ()=>({
    type: GET_ALL_CATEGORIES_FAIL
})

const getAllCategoriesSuccess = (categories)=>({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
})

export const getAllCategories = ()=>{
    return dispatch=>{
        dispatch(gettingAllCategories());
        getAllCategoriesApi().then(data=>{
            dispatch(getAllCategoriesSuccess(data.data));
        }).catch(error=>{
            dispatch(getAllCategoriesFail())
        })
    }
}