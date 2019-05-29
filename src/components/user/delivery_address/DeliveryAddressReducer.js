import {
    GETTING_ALL_DELIVERY_ADDRESS,
    GET_ALL_DELIVERY_ADDRESS_SUCCESS,
    GET_ALL_DELIVERY_ADDRESS_FAIL,
    ADDING_DELIVERY_ADDRESS,
    ADD_DELIVERY_ADDRESS_SUCCESS,
    ADD_DELIVERY_ADDRESS_FAIL,
    REMOVING_DELIVERY_ADDRESS,
    REMOVE_DELIVERY_ADDRESS_SUCCESS,
    REMOVE_DELIVERY_ADDRESS_FAIL,
    UPDATING_DELIVERY_ADDRESS,
    UPDATE_DELIVERY_ADDRESS_SUCCESS,
    UPDATE_DELIVERY_ADDRESS_FAIL
} from "../../../constants/constants";

var initialState = {
    addresses: [],
    isGetting: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false
}

export const deliveryAddressesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ALL_DELIVERY_ADDRESS:
            return {
                ...state,
                isGetting: true
            }
        case GET_ALL_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                addresses: action.addresses
            }
        case GET_ALL_DELIVERY_ADDRESS_FAIL:
            return {
                ...state,
                isGetting: false
            }
        case ADDING_DELIVERY_ADDRESS:
            return {
                ...state,
                isAdding: true
            }
        case ADD_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isAdding: false,
                addresses: action.addresses
            }
        case ADD_DELIVERY_ADDRESS_FAIL:
            return {
                ...state,
                isAdding: false
            }
        case REMOVING_DELIVERY_ADDRESS:
            return {
                ...state,
                isDeleting: true
            }
        case REMOVE_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                addresses: action.addresses
            }
        case REMOVE_DELIVERY_ADDRESS_FAIL:
            return {
                ...state,
                isDeleting: false
            }
        case UPDATING_DELIVERY_ADDRESS:
            return {
                ...state,
                isUpdating: true
            }
        case UPDATE_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                addresses: action.addresses
            }
        case UPDATE_DELIVERY_ADDRESS_FAIL:
            return {
                ...state,
                isUpdating: false
            }
        default:
            return state;
    }
}