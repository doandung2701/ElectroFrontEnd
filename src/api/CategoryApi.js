import Axios from "axios";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/categories/',
    timeout: 5000
})

export const getAllCategoriesApi = ()=>{
    return axios.get("find/find-all");
}