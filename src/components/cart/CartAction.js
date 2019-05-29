import {
    REMOVE_CART_ITEM,
    CHANGING_CART_ITEM_QTY,
    CHANGE_CART_ITEM_QTY_SUCCESS,
    CHANGE_CART_ITEM_QTY_FAIL,
    ADD_NEW_CART_ITEM,
    CHANGE_CART_ITEM_QTY,
    ENABLE_LOADING_SCREEN,
    DISABLE_LOADING_SCREEN,
    REMOVE_ALL_CART_ITEM,
} from "../../constants/constants";
import {
    changeCartItemQtyApi
} from "../../api/ProductsApi";
import { message } from "antd";

export const changeCartItemQtyAsync = (payload, itemToChange) => {
    return dispatch => {
        dispatch(changingCartItemQty());
        dispatch(enableLoadingScreen());
        changeCartItemQtyApi(payload).then(data => {
            dispatch(changeCartItemQtySuccess())
            if (payload.currentQty === 0) {
                dispatch(addNewCartItem(itemToChange));
                message.success("Added to your cart", 3);
            } else if (payload.nextQty === 0) {
                dispatch(removeCartItem(itemToChange.prodDetailId));
            } else {
                dispatch(changeCartItemQty(itemToChange.prodDetailId, payload.nextQty))
            }
            dispatch(disableLoadingScreen());
        }).catch(error => {
            if (error.response) {
                message.error(error.response.data, 3);
            } else if (!error.response) {
                message.error("Undefined error happened :(", 3);
            }
            dispatch(changeCartItemQtyFail());
            dispatch(disableLoadingScreen());
        })
    }
}



const changingCartItemQty = () => ({
    type: CHANGING_CART_ITEM_QTY
})

const changeCartItemQtySuccess = () => ({
    type: CHANGE_CART_ITEM_QTY_SUCCESS
})

const changeCartItemQtyFail = () => ({
    type: CHANGE_CART_ITEM_QTY_FAIL,
})

const addNewCartItem = (item) => ({
    type: ADD_NEW_CART_ITEM,
    item
})

export const changeCartItemQty = (id, qty) => ({
    type: CHANGE_CART_ITEM_QTY,
    id,
    qty
});

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    id
});

export const enableLoadingScreen = () => ({
    type: ENABLE_LOADING_SCREEN
})

export const disableLoadingScreen = ()=>({
    type: DISABLE_LOADING_SCREEN
})

export const removeAllCartItem = ()=>({
    type: REMOVE_ALL_CART_ITEM
})