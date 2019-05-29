import Axios from "axios";
import { authHeader } from "../helpers/helper";

var token = authHeader();

var axios = Axios.create({
    baseURL: "http://localhost:8080/delivery-addresses",
    timeout: 5000,
    headers: {
        "Authorization": token
    }
})

export const findDeliveryAddressedByUserApi=()=>{
    return axios.get("/find/find-by-user");
}

export const addDeliveryAddressApi=(address)=>{
    return axios.post("/save/add-delivery-address",address);
}

export const updateDeliveryAddressApi=(address)=>{
    return axios.put("/save/update-delivery-address",address);
}

export const removeDeliveryAddressApi = (addressId)=>{
    return axios.delete("/save/delete",{
        params: {
            addressId
        }
    })
}