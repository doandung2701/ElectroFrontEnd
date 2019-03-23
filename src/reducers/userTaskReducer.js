import {
    UPLOADING_AVA,
    UPLOAD_AVA_SUCCESS,
    UPLOAD_AVA_FAIL,
    GETTING_PERSONAL_INFO,
    GET_PERSONAL_INFO_SUCCESSS,
    GET_PERSONAL_INFO_FAIL,
    CHANGE_USER_INFO_INPUT,
    EDITTING_USER_INFO,
    EDIT_USER_INFO_SUCCESS,
    EDIT_USER_INFO_FAIL
} from "../constants/constants";

var initialState = {
    isUploading: false,
    isGettingInfo: true,
    isEditting: false,
    user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        address: '',
        birthDate: null,
        phoneNumber: '',
        avatar: ''
    },
    userToChange: {
        firstName: '',
        lastName: '',
        address: '',
        birthDate: null,
        phoneNumber: '',
    }
}

export const userTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOADING_AVA:
            return {...state,
                isUploading: true
            }
        case UPLOAD_AVA_SUCCESS:
            return {...state,
                isUploading: false,
                user: {...state.user,
                    avatar: action.data
                }
            }
        case UPLOAD_AVA_FAIL:
            return {...state,
                isUploading: false
            }
        case GETTING_PERSONAL_INFO:
            return {
                ...state,
                isGettingInfo: true,
            }
        case GET_PERSONAL_INFO_SUCCESSS:
            return {
                ...state,
                isGettingInfo: false,
                user: action.info,
                userToChange: {
                    firstName: action.info.firstName,
                    lastName: action.info.lastName,
                    address: action.info.address,
                    phoneNumber: action.info.phoneNumber,
                    birthDate: action.info.birthDate
                }
            }
        case GET_PERSONAL_INFO_FAIL: 
            return {
                ...state,
                isGettingInfo: false,
                user: {},
                userToChange: {}
            }
        case CHANGE_USER_INFO_INPUT: 
            return {
                ...state,
                userToChange: {
                    ...state.userToChange,
                    [action.name]: action.value
                }
            }
        case EDITTING_USER_INFO: 
            return {
                ...state,
                isEditting: true
            }
        case EDIT_USER_INFO_SUCCESS:
            return {
                ...state,
                isEditting: false,
                user: action.info,
                userToChange: {
                    firstName: action.info.firstName,
                    lastName: action.info.lastName,
                    address: action.info.address,
                    phoneNumber: action.info.phoneNumber,
                    birthDate: action.info.birthDate
                }
            }
        case EDIT_USER_INFO_FAIL:
            return {
                ...state,
                isEditting: false
            }
        default:
            return state;
    }
}