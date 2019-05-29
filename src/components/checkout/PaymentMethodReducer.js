import {
    GETTING_ALL_PAYMENT_METHOD,
    GET_ALL_PAYMENT_METHOD_SUCCESS,
    GET_ALL_PAYMENT_METHOD_FAIL
} from "../../constants/constants";

var initialState = {
    methods: [],
    isGetting: false
}

export const paymentMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ALL_PAYMENT_METHOD:
            return {
                ...state,
                isGetting: true
            }
        case GET_ALL_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                methods: action.methods,
                isGetting: true
            }
        case GET_ALL_PAYMENT_METHOD_FAIL:
            return {
                ...state,
                isGetting: false
            }
        default:
            return state;
    }
}