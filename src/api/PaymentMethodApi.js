import Axios from "axios";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/payment-methods'
})

export const getAllPaymentMethodApi = ()=>{
    return axios.get("/find/find-all");
}