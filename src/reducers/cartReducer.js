import {

    REMOVE_CART_ITEM,
    CHANGE_CART_ITEM_QTY,
    CHANGING_CART_ITEM_QTY,
    CHANGE_CART_ITEM_QTY_SUCCESS,
    CHANGE_CART_ITEM_QTY_FAIL,
    ADD_NEW_CART_ITEM
} from "../constants/constants";

const initialState = {
    items: [],
    isChanging: false,
    error: false
}

export const cartReducer = (state = initialState, action) => {
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
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                items: state.items.filter((value) => {
                    return value.prodDetailId !== action.id
                })
            }

        case CHANGE_CART_ITEM_QTY:
            var items = [...state.items]; 
            items.forEach(value=>{
                if (value.prodDetailId===action.id){
                    value.currentQty = action.qty
                }
            });
            return {
                ...state,
                items
            }
        default:
            return state;
    }
}