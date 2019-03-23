import { UPLOADING_AVA, UPLOAD_AVA_SUCCESS, UPLOAD_AVA_FAIL, GETTING_PERSONAL_INFO, GET_PERSONAL_INFO_SUCCESSS, GET_PERSONAL_INFO_FAIL, CHANGE_USER_INFO_INPUT, EDITTING_USER_INFO, EDIT_USER_INFO_SUCCESS, EDIT_USER_INFO_FAIL } from "../../constants/constants";
import { changeAvaApi, getPersonalInfoApi, editUserInfoApi } from "../../api/AuthenticationApi";
import  Alert from "react-s-alert";
import { formatDate } from "../../helpers/helper";

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
        editUserInfoApi(data,token).then(data=>{
            Alert.closeAll();
            Alert.success("You have change your info successfully",{
                effect: 'slide',
                timeout: 3000,
                position: 'top-right'
            });
            var data1 = {...data.data};
            if (data1.birthDate){
                data1.birthDate = formatDate(new Date(data1.birthDate));
            }
            dispatch(editUserInfoSuccess(data1));
        }).catch(error=>{
            Alert.closeAll();
            if (error.response){
                Alert.error("Change info fail: "+error.response.data,{
                    effect: 'slide',
                    timeout: 3000,
                    position: 'top-right'
                });
            }else{
                Alert.error("Change info fail: "+error,{
                    effect: 'slide',
                    timeout: 3000,
                    position: 'top-right'
                });
            }
            dispatch(editUserInfoFail());
        })
    }
}

export const changeAva = (data,token)=>{
    return dispatch =>{
        dispatch(uploadingAva());
        changeAvaApi(data,token).then(data=>{
            Alert.closeAll();
            dispatch(uploadAvaSuccess(data.data));
            Alert.success("You have change your avatar successfully",{
                effect: 'slide',
                timeout: 3000,
                position: 'top-right'
            })
        }).catch(error=>{
            Alert.closeAll();
            if (error.response){
                Alert.error("Change avatar fail: "+error.response.data,
                {
                    effect: 'slide',
                    timeout: 3000,
                    position: 'top-right'
                });
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