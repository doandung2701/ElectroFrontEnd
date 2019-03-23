import { GETTING_TOP_VIEW, GET_TOP_VIEW_SUCCESS, GET_TOP_VIEW_FAIL } from "../constants/constants";

var initialState = {
    topView: [],
    isGetting: false,
    error: null
}

export const topViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_TOP_VIEW:
            return {
                ...state,
                isGetting: true,
                error: null
            }
        case GET_TOP_VIEW_SUCCESS:
            return {
                ...state,
                isGetting: false,
                topView: action.topView,
                error: null
            }
        case GET_TOP_VIEW_FAIL:
            return {
                ...state,
                isGetting: false,
                error: action.error
            }
        default:
            return state;
    }
}