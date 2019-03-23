import {
    ENABLE_LOADING_SCREEN,
    DISABLE_LOADING_SCREEN
} from "../constants/constants";

export const loadingScreenReducer = (state = false, action) => {
    switch (action.type) {
        case ENABLE_LOADING_SCREEN:
            return true;
        case DISABLE_LOADING_SCREEN:
            return false;
        default:
            return state;
    }
}