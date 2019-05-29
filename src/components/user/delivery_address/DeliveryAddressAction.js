import { GETTING_ALL_DELIVERY_ADDRESS, GET_ALL_DELIVERY_ADDRESS_SUCCESS, GET_ALL_DELIVERY_ADDRESS_FAIL, ADDING_DELIVERY_ADDRESS, ADD_DELIVERY_ADDRESS_FAIL, ADD_DELIVERY_ADDRESS_SUCCESS, REMOVING_DELIVERY_ADDRESS, REMOVE_DELIVERY_ADDRESS_FAIL, REMOVE_DELIVERY_ADDRESS_SUCCESS, UPDATING_DELIVERY_ADDRESS, UPDATE_DELIVERY_ADDRESS_FAIL, UPDATE_DELIVERY_ADDRESS_SUCCESS } from "../../../constants/constants";
import { findDeliveryAddressedByUserApi, addDeliveryAddressApi, removeDeliveryAddressApi, updateDeliveryAddressApi } from "../../../api/DeliveryAddressApi";
import { enableLoadingScreen, disableLoadingScreen } from "../../cart/CartAction";
import { message } from "antd";

const gettingAllDeliveryAddress = () => ({
    type: GETTING_ALL_DELIVERY_ADDRESS
})

const getAllDeliveryAddressSuccess = (addresses) => ({
    type: GET_ALL_DELIVERY_ADDRESS_SUCCESS,
    addresses
})

const getAllDeliveryAddressFail = () => ({
    type: GET_ALL_DELIVERY_ADDRESS_FAIL
})

const addingDeliveryAddress = () => ({
    type: ADDING_DELIVERY_ADDRESS
})

const addDeliveryAddressFail = () => ({
    type: ADD_DELIVERY_ADDRESS_FAIL
})

const addDeliveryAddressSuccess = (addresses) => ({
    type: ADD_DELIVERY_ADDRESS_SUCCESS,
    addresses
})

const removingDeliveryAddress = () => ({
    type: REMOVING_DELIVERY_ADDRESS
})

const removeDeliveryAddressFail = () => ({
    type: REMOVE_DELIVERY_ADDRESS_FAIL
})

const removeDeliveryAddressSuccess = (addresses) => ({
    type: REMOVE_DELIVERY_ADDRESS_SUCCESS,
    addresses
})


const updatingDeliveryAddress = () => ({
    type: UPDATING_DELIVERY_ADDRESS
})

const updateDeliveryAddressFail = () => ({
    type: UPDATE_DELIVERY_ADDRESS_FAIL
})

const updateDeliveryAddressSuccess = (addresses) => ({
    type: UPDATE_DELIVERY_ADDRESS_SUCCESS,
    addresses
})


export const getAllDeliveryAddress = () => {
    return dispatch => {
        dispatch(gettingAllDeliveryAddress());
        findDeliveryAddressedByUserApi().then(data => {
            dispatch(getAllDeliveryAddressSuccess(data.data))
        }).catch(error => {
            dispatch(getAllDeliveryAddressFail());
        })
    }
}

export const addDeliveryAddress = (address) => {
    return dispatch => {
        dispatch(enableLoadingScreen());
        dispatch(addingDeliveryAddress());
        addDeliveryAddressApi(address).then(data => {
            dispatch(addDeliveryAddressSuccess(data.data))
            dispatch(disableLoadingScreen());
            message.success("Added a new delivery address!", 3);
        }).catch(error => {
            dispatch(addDeliveryAddressFail());
            dispatch(disableLoadingScreen());
            message.error("Error, can't add now, please try again.", 3);
        })
    }
}

export const updateDeliveryAddress = (address) => {
    return dispatch => {
        dispatch(enableLoadingScreen());
        dispatch(updatingDeliveryAddress());
        updateDeliveryAddressApi(address).then(data => {
            dispatch(updateDeliveryAddressSuccess(data.data))
            dispatch(disableLoadingScreen());
            message.success("Updated your delivery address!", 3);
        }).catch(error => {
            dispatch(updateDeliveryAddressFail());
            dispatch(disableLoadingScreen());
            message.error("Error, can't update now, please try again.", 3);
        })
    }
}

export const removeDeliveryAddress = (addressId) => {
    return dispatch => {
        dispatch(enableLoadingScreen());
        dispatch(removingDeliveryAddress());
        removeDeliveryAddressApi(addressId).then(data => {
            dispatch(removeDeliveryAddressSuccess(data.data))
            dispatch(disableLoadingScreen());
            message.success("Removed!", 3);
        }).catch(error => {
            dispatch(removeDeliveryAddressFail());
            dispatch(disableLoadingScreen());
            message.error("Error, can't remove now, please try again.", 3);
        })
    }
}
