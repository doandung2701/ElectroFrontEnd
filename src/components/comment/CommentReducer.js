import {
    GETTING_COMMENTS_BY_PRODUCT_ID,
    GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
    GET_COMMENTS_BY_PRODUCT_ID_FAIL
} from "../../constants/constants";

var initialState = {
    comments: [],
    isGettingComments: false,
    error: null
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_COMMENTS_BY_PRODUCT_ID:
            return {
                ...state,
                isGettingComments: true
            }
        case GET_COMMENTS_BY_PRODUCT_ID_SUCCESS:
            return {
                ...state,
                comments: action.comments,
                isGettingComments: false
            }
        case GET_COMMENTS_BY_PRODUCT_ID_FAIL:
            return {
                ...state,
                isGettingComments: false
            }
        default:
            return state;
    }
}