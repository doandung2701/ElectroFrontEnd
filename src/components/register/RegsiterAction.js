import { USER_SIGNINGUP, USER_SIGNUP_SUCCESSFULLY, USER_SIGNUP_FAIL } from "../../constants/constants";
import { signupApi } from "../../api/AuthenticationApi";
import Alert from 'react-s-alert';
import { history } from "../../helpers/helper";

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
            Alert.closeAll();
            alert(data.data);
            dispatch(userRegisterSuccess());
            history.push("/account/login");
        }).catch(error=>{
            dispatch(userRegisterFail())
            Alert.closeAll();
            Alert.error(error.response.data,{
                timeout: 2000,
                position: 'top-right',
                effect: 'slide'
            })
           
        })
    }
}