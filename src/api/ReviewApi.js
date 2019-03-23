import Axios from "axios";
import { authHeader } from "../helpers/helper";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/reviews/'
})

export const getReviewByProductIdApi = (productId)=>{
    return axios.get('find-by-product-id',{
        params: {
            productId
        }
    })
}

export const addReviewApi = (review)=>{
    return axios.post('save-review',review,{
        headers:{
            "Authorization" : authHeader()
        }
    });
}