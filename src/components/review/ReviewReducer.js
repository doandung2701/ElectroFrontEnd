import {
    GETTING_REVIEWS,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    SAVING_REVIEW,
    SAVE_REVIEW_SUCCESSS,
    SAVE_REVIEW_FAIL
} from "../../constants/constants";

var initialState = {
    reviews: [],
    isLoading: false,
    isSaving: false
}

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_REVIEWS:
            return {
                ...state,
                isLoading: true,
                reviews: []
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: action.reviews
            }
        case GET_REVIEWS_FAIL:
            return {
                ...state,
                isLoading: false
            }
        case SAVING_REVIEW:
            return {
                ...state,
                isSaving: true
            }
        case SAVE_REVIEW_SUCCESSS:
            return {
                ...state,
                isSaving: false,
                reviews: action.reviews
            }
        case SAVE_REVIEW_FAIL:
            return {
                ...state,
                isSaving: false
            }
        default:
            return state;
    }
}