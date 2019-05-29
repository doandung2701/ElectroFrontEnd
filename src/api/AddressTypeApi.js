import Axios from "axios";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/address-types',
    timeout: 5000
})

export const getAllAddressTypeApi = ()=>{
    return axios.get("/find/find-all");
}