import Axios from 'axios';

var axios = Axios.create(
    {
        baseURL: 'http://localhost:8080/users'   
    }
)


export const loginApi = (user)=>{
    return axios.post("/signin",user);
}

export const signupApi = (user)=>{
    return axios.post("/signup",user);
}

export const changeAvaApi = (data,token)=>{
    return axios.put("/my-profile/change-ava",data,{
        headers: {
            "Authorization": token
        }
    });
}

export const getPersonalInfoApi = (token)=>{
    return axios.get("/my-profile/get-info",{
        headers: {
            "Authorization": token
        }
    })
}

export const editUserInfoApi = (data,token)=>{
    return axios.put("/my-profile/edit-info",data,{
        headers: {
            "Authorization": token
        }
    });
}
