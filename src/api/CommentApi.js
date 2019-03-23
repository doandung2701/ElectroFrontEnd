import Axios from "axios";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/comments/',
    timeout: 10000
})

export const getCommentsByUserIdApi = (userId)=>{
    return axios.get("find/find-by-user-id",{
        params:{
            userId
        }
    })
}

export const getCommentsByProductIdApi = (productId)=>{
    return axios.get("find/find-by-product-id",{
        params:{
            productId
        }
    })
}

export const postCommentApi = (comment)=>{
    return axios.post("save/post-comment",comment);
}