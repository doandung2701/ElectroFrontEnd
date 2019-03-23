import {
    authHeader,
    getPayLoadFromToken
} from "../helpers/helper";

import {
    USER_LOGGINGIN,
    USER_LOGIN_SUCESSFULLY,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from "../constants/constants";

var token = authHeader();
var initialState = token ? {
    isLoggedIn: true,
    isLoading: false,
    userId: getPayLoadFromToken(token).ID,
    username: getPayLoadFromToken(token).USERNAME
} : {
    isLoggedIn: false
}

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGINGIN:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOGIN_SUCESSFULLY:
            const payload = getPayLoadFromToken(action.token);
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                userId: payload.ID,
                username: payload.USERNAME
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
            }
        case USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false
            }
        default:
            return state;
    }
}