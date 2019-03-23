import {
    FETCHING_ITEM_COUNT,
    FETCH_ITEM_COUNT_SUCCESS,
    FETCH_ITEM_COUNT_FAIL
} from "../constants/constants";

var initialState = {
    itemCount: 0,
    isFetchingItemCount: false,
}

export const itemCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ITEM_COUNT:
            return {
                ...state,
                isFetchingItemCount: true
            }
        case FETCH_ITEM_COUNT_SUCCESS:
            return {
                ...state,
                isFetchingItemCount: false,
                itemCount: action.itemCount
            }
        case FETCH_ITEM_COUNT_FAIL:
            return {
                ...state,
                isFetchingItemCount: false
            }
        default:
            return state;
    }
}