import {
    GETTING_COMMENTS_BY_USER_ID,
    GET_COMMENTS_BY_USER_ID_SUCCESS,
    GET_COMMENTS_BY_USER_ID_FAIL,
    GETTING_COMMENTS_BY_PRODUCT_ID,
    GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
    GET_COMMENTS_BY_PRODUCT_ID_FAIL,
    POSTING_COMMENT
} from "../../constants/constants";
import {
    getCommentsByProductIdApi
} from "../../api/CommentApi";

const gettingCommentsByUserId = () => ({
    type: GETTING_COMMENTS_BY_USER_ID
})

const getCommentsByUserIdSuccess = (comments) => ({
    type: GET_COMMENTS_BY_USER_ID_SUCCESS,
    comments
})

const getCommentsByUserIdFail = (error) => ({
    type: GET_COMMENTS_BY_USER_ID_FAIL,
    error
})

const gettingCommentsByProductId = () => ({
    type: GETTING_COMMENTS_BY_PRODUCT_ID
})

const getCommentsByProductIdSuccess = (comments) => ({
    type: GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
    comments
})

const getCommentsByProductIdFail = (error) => ({
    type: GET_COMMENTS_BY_PRODUCT_ID_FAIL,
    error
})

export const getCommentsByProductId = (id) => {
    return dispatch => {
        dispatch(gettingCommentsByProductId());
        getCommentsByProductIdApi(id).then(data => {
            dispatch(getCommentsByProductIdSuccess(data.data));
        }).catch(error => {
            dispatch(getCommentsByProductIdFail(error));
            }
        )
    }
}