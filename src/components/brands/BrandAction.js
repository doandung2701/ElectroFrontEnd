import { GETTING_ALL_BRANDS, GET_ALL_BRANDS_FAIL, GET_ALL_BRANDS_SUCCESS, GETTING_BRANDS_BY_CATEGORY, GET_BRANDS_BY_CATEGORY_SUCCESS, GET_BRANDS_BY_CATEGORY_FAIL } from "../../constants/constants";
import { getAllBrandsApi, getBrandsByCategoryApi } from "../../api/BrandApi";

const gettingAllBrands = ()=>({
    type: GETTING_ALL_BRANDS
})

const getAllBrandsFail = ()=>({
    type: GET_ALL_BRANDS_FAIL
})

const getAllBrandsSuccess = (brands)=>({
    type: GET_ALL_BRANDS_SUCCESS,
    brands
})

const gettingBrandsByCategory = ()=>({
    type: GETTING_BRANDS_BY_CATEGORY
})

const getBrandsByCategorySuccess = (brands)=>({
    type: GET_BRANDS_BY_CATEGORY_SUCCESS,
    brands
})

const getBrandsByCategoryFail = ()=>({
    type: GET_BRANDS_BY_CATEGORY_FAIL
})

export const getAllBrands = ()=>{
    return dispatch=>{
        dispatch(gettingAllBrands());
        getAllBrandsApi().then(data=>{
            dispatch(getAllBrandsSuccess(data.data));
        }).catch(error=>{
            dispatch(getAllBrandsFail())
        })
    }
}

export const getBrandsByCategory = (catIds)=>{
    return dispatch=>{
        dispatch(gettingBrandsByCategory());
        getBrandsByCategoryApi(catIds).then(data=>{
            dispatch(getBrandsByCategorySuccess(data.data));
        }).catch(error=>{
            dispatch(getBrandsByCategoryFail());
        })
    }
}