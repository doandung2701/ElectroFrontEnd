import {
    USER_SIGNINGUP,
    USER_SIGNUP_SUCCESSFULLY,
    USER_SIGNUP_FAIL
} from "../constants/constants";

var initialState = {
    isRegistering: false
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNINGUP:
            return {
                isRegistering: true
            }
        case USER_SIGNUP_SUCCESSFULLY:
        case USER_SIGNUP_FAIL:
            return {
                isRegistering: false
            }
        default:
            return state;
    }
}