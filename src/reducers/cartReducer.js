import {

    REMOVE_CART_ITEM,
    CHANGE_CART_ITEM_QTY,
    CHANGING_CART_ITEM_QTY,
    CHANGE_CART_ITEM_QTY_SUCCESS,
    CHANGE_CART_ITEM_QTY_FAIL,
    ADD_NEW_CART_ITEM,
    REMOVE_ALL_CART_ITEM
} from "../constants/constants";

const initialState = sessionStorage.getItem("cart") ? {
    items: JSON.parse(sessionStorage.getItem("cart")),
    isChanging: false,
    error: false
} : {
    items: [],
    isChanging: false,
    error: false
}

export const cartReducer = (state = initialState, action) => {
    let items;
    switch (action.type) {
        case CHANGING_CART_ITEM_QTY:
            return {
                ...state,
                isChanging: true,
                error: false
            }
        case CHANGE_CART_ITEM_QTY_SUCCESS:
            return {
                ...state,
                isChanging: false,
                error: false
            }
        case CHANGE_CART_ITEM_QTY_FAIL:
            return {
                ...state,
                isChanging: false,
                error: true
            }
        case ADD_NEW_CART_ITEM:
            items = [...state.items, action.item];
            sessionStorage.setItem("cart", JSON.stringify(items));
            return {
                ...state,
                items
            }
        case REMOVE_CART_ITEM:
            items = state.items.filter((value) => {
                return value.prodDetailId !== action.id
            })
            sessionStorage.setItem("cart", JSON.stringify(items));
            return {
                ...state,
                items
            }

        case CHANGE_CART_ITEM_QTY:
            items = [...state.items];
            items.forEach(value => {
                if (value.prodDetailId === action.id) {
                    value.currentQty = action.qty
                }
            });
            sessionStorage.setItem("cart", JSON.stringify(items));
            return {
                ...state,
                items
            }
        case REMOVE_ALL_CART_ITEM: 
            items = [];
            sessionStorage.setItem("cart", JSON.stringify(items));
            return {
                ...state,
                items
            }
        default:
            return state;
    }
}