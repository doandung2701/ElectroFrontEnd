import Axios from "axios";

var axios = Axios.create({
    baseURL: 'http://localhost:8080/brands/',
    timeout: 10000
})

export const getAllBrandsApi = ()=>{
    return axios.get("/find/find-all");
}

export const getBrandsByCategoryApi = (categoryIds)=>{
    return axios.get("find/by-category",{
        params: {
            catId: categoryIds
        }
    })
}