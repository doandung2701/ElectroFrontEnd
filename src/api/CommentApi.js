import Axios from "axios";
import { authHeader } from "../helpers/helper";

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


export const postReplyApi = (reply)=>{
    return axios.post("save/post-reply",reply,{
        headers:{
            "Authorization": authHeader()
        }
    });
}

export const postCommentApi = (comment)=>{
    return axios.post("save/post-comment",comment,{
        headers:{
            "Authorization": authHeader()
        }
    });
}

export const editCommentApi = (comment)=>{
    return axios.put("save/edit-comment",comment,{
        headers:{
            "Authorization": authHeader()
        }
    });
}