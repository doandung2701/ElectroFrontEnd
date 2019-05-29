import Axios from "axios";
import {
    authHeader
} from "../helpers/helper";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/transaction',
    headers: {
        "Authorization": authHeader()
    },
    timeout: 5000
})

export const chargeApi = (payload,token)=>{
    return axios.post("/charge",payload,{
        params:{
            token
        }
    })
}