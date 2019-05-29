import { UPLOADING_AVA, UPLOAD_AVA_SUCCESS, UPLOAD_AVA_FAIL, GETTING_PERSONAL_INFO, GET_PERSONAL_INFO_SUCCESSS, GET_PERSONAL_INFO_FAIL, CHANGE_USER_INFO_INPUT, EDITTING_USER_INFO, EDIT_USER_INFO_SUCCESS, EDIT_USER_INFO_FAIL } from "../../constants/constants";
import { changeAvaApi, getPersonalInfoApi, editUserInfoApi } from "../../api/AuthenticationApi";
import { formatDate } from "../../helpers/helper";
import { message } from "antd";
import { enableLoadingScreen, disableLoadingScreen } from "../cart/CartAction";

const uploadingAva = ()=>({
    type: UPLOADING_AVA
})

const uploadAvaSuccess = (data)=>({
    type: UPLOAD_AVA_SUCCESS,
    data
})

const uploadAvaFail = ()=>({
    type: UPLOAD_AVA_FAIL
})

const gettingPersonalInfo = ()=>({
    type: GETTING_PERSONAL_INFO
})

const getPersonalInfoSuccess = (info)=>({
    type: GET_PERSONAL_INFO_SUCCESSS,
    info
})

const getPersonalInfoFail = (error)=>({
    type: GET_PERSONAL_INFO_FAIL,
    error
})


export const changeUserInfoInput=(name,value)=>({
    type: CHANGE_USER_INFO_INPUT,
    name,
    value
})

const edittingUserInfo = ()=>({
    type: EDITTING_USER_INFO
})

const editUserInfoSuccess = (info)=>({
    type: EDIT_USER_INFO_SUCCESS,
    info
})

const editUserInfoFail = ()=>({
    type: EDIT_USER_INFO_FAIL,
})

export const editUserInfo = (data,token)=>{
    return dispatch =>{
        dispatch(edittingUserInfo());
        dispatch(enableLoadingScreen());
        editUserInfoApi(data,token).then(data=>{
            dispatch(disableLoadingScreen());
           message.success("You have change your info successfully",3);
            var data1 = {...data.data};
            if (data1.birthDate){
                data1.birthDate = formatDate(new Date(data1.birthDate));
            }
            dispatch(editUserInfoSuccess(data1));
        }).catch(error=>{
            dispatch(disableLoadingScreen());
            if (error.response){
               message.error("Change info fail: "+error.response.data,3);
            }else{
               message.error("Change info fail: "+error,3);
            }
            dispatch(editUserInfoFail());
        })
    }
}

export const changeAva = (data,token)=>{
    return dispatch =>{
        dispatch(uploadingAva());
        dispatch(enableLoadingScreen());
        changeAvaApi(data,token).then(data=>{
            dispatch(disableLoadingScreen());
            dispatch(uploadAvaSuccess(data.data));
           message.success("You have change your avatar successfully",3)
        }).catch(error=>{
            dispatch(disableLoadingScreen());
            if (error.response){
               message.error("Change avatar fail: "+error.response.data,
                3);
            }
            dispatch(uploadAvaFail());
        })
    }
}

export const getPersonalInfo = (token)=>{
    return dispatch=>{
        dispatch(gettingPersonalInfo());
        getPersonalInfoApi(token).then(data=>{
            var data1 = {...data.data};
            if (data1.birthDate){
                data1.birthDate = formatDate(new Date(data1.birthDate));
            }
            dispatch(getPersonalInfoSuccess(data1))
        }).catch(error=>{
            if (error.response){
                dispatch(getPersonalInfoFail(error.response.data))
            }else{
                dispatch(getPersonalInfoFail(error))
            }
        })
    }
}