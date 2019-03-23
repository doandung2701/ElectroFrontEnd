import {
    USER_LOGGINGIN, USER_LOGIN_SUCESSFULLY, USER_LOGIN_FAIL, USER_LOGOUT
} from "../../constants/constants";
import { loginApi } from "../../api/AuthenticationApi";
import { history } from "../../helpers/helper";

export const userLoggingIn = () => ({
    type: USER_LOGGINGIN
})

export const userLogInSuccessfully = (token) => ({
    type: USER_LOGIN_SUCESSFULLY,
    token
})

export const userLogInFail = (error)=>({
    type: USER_LOGIN_FAIL,
    error
})

export const userLogout = ()=>{
    localStorage.removeItem('token');
    history.push("/");
    return {
        type: USER_LOGOUT
    }
}

export const userLogin = (user)=>{
    return dispatch=>{
        dispatch(userLoggingIn());
        loginApi(user).then(data=>{
            alert("Login Successfully!")
            localStorage.setItem("token",JSON.stringify(data.data));
            dispatch(userLogInSuccessfully(data.data));
        }).catch(error=>{
            alert("Login failed "+ error.response.data);
            dispatch(userLogInFail(error.response.data));
        })
    }
}

