import {
    GETTING_ALL_ADDRESS_TYPE,
    GET_ALL_ADDRESS_TYPE_SUCCESS,
    GET_ALL_ADDRESS_TYPE_FAIL
} from "../../../constants/constants";

var initialState = {
    types: [],
    isGetting: false
}

export const addressTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ALL_ADDRESS_TYPE:
            return {
                ...state,
                isGetting: true
            }
        case GET_ALL_ADDRESS_TYPE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                types: action.types
            }
        case GET_ALL_ADDRESS_TYPE_FAIL:
            return {
                ...state,
                isGetting: false
            }
        default:
            return state;
    }
}