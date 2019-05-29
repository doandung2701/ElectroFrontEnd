import Axios from "axios";
import {authHeader} from '../helpers/helper';

var axios = Axios.create({
    baseURL: 'http://localhost:8080/products',
    timeout: 5000
})

export const getProductsListApi = (pageable)=>{
    return axios.get("/find/all-paging",{
        params: {
            page: pageable.page,
            rows: pageable.rows,
            order: pageable.order,
            direction: pageable.direction
        }
    })
}

export const findById = (id)=>{
    return axios.get(`/find/by-id/${id}`)
}

export const getItemCountsApi = ()=>{
    return axios.get('/count/all');
}

export const findProductsByNameApi = (name)=>{
    return axios.get('/find/by-name',{
        params:{
            name: name
        }
    })
}

export const findProductsByBrandApi = (brandId,pageable)=>{
    return axios.get("/find/by-brand",{
        params: {
            brandId,
            page: pageable.page,
            rows: pageable.rows,
            order: pageable.order,
            direction: pageable.direction
        }
    })
}

export const countByBrandApi=(brandId)=>{
    return axios.get('/count/by-brand',{
        params:{
            brandId
        }
    });
}

export const findProductsByCategoryApi = (categoryId,pageable)=>{
    return axios.get("/find/by-category",{
        params: {
            categoryId,
            page: pageable.page,
            rows: pageable.rows,
            order: pageable.order,
            direction: pageable.direction
        }
    })
}

export const countByCategoryApi=(categoryId)=>{
    return axios.get('/count/by-category',{
        params:{
            categoryId
        }
    });
}

export const getTopViewApi  = (pageable)=>{
    return axios.get('/find/top-view',{
        params:{
            page: pageable.page,
            rows: pageable.rows
        }
    })
}

export const changeCartItemQtyApi = (payload)=>{
    return axios.put('/cart/change-qty',payload);
}

export const increaseViewCountApi = (productId)=>{
    return axios.put("/save/increase-view-count",null,{
        params: {
            productId
        }
    });
}

export const addSeenProductApi = (productId)=>{
    return axios.post("/save/add-seen-product",null,{
        params:{
            productId
        },
        headers:{
            "Authorization": authHeader()
        }
    })
}

export const getSeenProductByUserIdApi = (pageable)=>{
    return axios.get("/find/find-by-seen-user",{
        params: {
            page: pageable.page,
            rows: pageable.rows
        },
        headers:{
            "Authorization": authHeader()
        }
    })
}

export const getSeenProductsCountApi = (userId)=>{
    return axios.get("/count/count-seen-product",{
        params: {
            userId
        },
        headers: {
            "Authorization": authHeader()
        }
    })
}
