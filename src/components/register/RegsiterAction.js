import { USER_SIGNINGUP, USER_SIGNUP_SUCCESSFULLY, USER_SIGNUP_FAIL } from "../../constants/constants";
import { signupApi } from "../../api/AuthenticationApi";
import { history } from "../../helpers/helper";
import { message } from "antd";

export const userRegistering = ()=>({
    type: USER_SIGNINGUP
})

export const userRegisterSuccess = ()=>({
    type: USER_SIGNUP_SUCCESSFULLY
})
export const userRegisterFail = ()=>({
    type: USER_SIGNUP_FAIL
})
export const userSignUp= (user)=>{
    return dispatch=>{
        dispatch(userRegistering());
        signupApi(user).then(data=>{
            alert(data.data);
            dispatch(userRegisterSuccess());
            history.push("/account/login");
        }).catch(error=>{
            dispatch(userRegisterFail())
            message.error(error.response.data,3)
           
        })
    }
}