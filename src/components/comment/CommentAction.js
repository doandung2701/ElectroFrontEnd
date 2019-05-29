import {
    GETTING_COMMENTS_BY_USER_ID,
    GET_COMMENTS_BY_USER_ID_SUCCESS,
    GET_COMMENTS_BY_USER_ID_FAIL,
    GETTING_COMMENTS_BY_PRODUCT_ID,
    GET_COMMENTS_BY_PRODUCT_ID_SUCCESS,
    GET_COMMENTS_BY_PRODUCT_ID_FAIL,
    POSTING_COMMENT,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,
    EDITTING_COMMENT,
    EDIT_COMMENT_SUCCESS,
    EDIT_COMMENT_FAIL
} from "../../constants/constants"; 
import {
    getCommentsByProductIdApi,
    postReplyApi,
    postCommentApi,
    editCommentApi
} from "../../api/CommentApi";
import { enableLoadingScreen, disableLoadingScreen } from "../cart/CartAction";
import { message } from "antd";

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

const postingReply = () => ({
    type: POSTING_COMMENT
})

const postReplySuccess = (comments) => ({
    type: POST_COMMENT_SUCCESS,
    comments
})

const postReplyFail = () => ({
    type: POST_COMMENT_FAIL
})

const edittingComment = ()=>({
    type: EDITTING_COMMENT
})

const editCommentSuccess = (comments)=>({
    type: EDIT_COMMENT_SUCCESS,
    comments
})

const editCommentFail = ()=>({
    type: EDIT_COMMENT_FAIL
})

export const editComment = (comment)=>{
    return dispatch=>{
        dispatch(enableLoadingScreen());
        dispatch(edittingComment());
        editCommentApi(comment).then(data=>{
            dispatch(disableLoadingScreen());
            dispatch(editCommentSuccess(data.data));
            message.success("Your comment has been modified successfully!");
        }).catch(error=>{
            dispatch(disableLoadingScreen());
            if (error.response) {
                message.error("Can't edit your reply because of an internal server error.",3)
            }else{
                message.error("Can't edit your reply because of an unexpected error.",3)
            }
            dispatch(editCommentFail());      
        })
    }
}

export const getCommentsByProductId = (id) => {
    return dispatch => {
        dispatch(gettingCommentsByProductId());
        getCommentsByProductIdApi(id).then(data => {
            dispatch(getCommentsByProductIdSuccess(data.data));
        }).catch(error => {
            dispatch(getCommentsByProductIdFail(error));
        })
    }
}

export const postReply = (reply) => {
    return dispatch => {
        dispatch(postingReply());
        dispatch(enableLoadingScreen());
        postReplyApi(reply).then(data => {
            dispatch(disableLoadingScreen());
            message.success("Your reply has been posted.",3)
            dispatch(postReplySuccess(data.data));
        }).catch(error => {
            dispatch(disableLoadingScreen());
            if (error.response) {
                message.error("Can't post your reply because of an internal server error.",3)
            }else{
                message.error("Can't post your reply because of an unexpected error.",3)
            }
            dispatch(postReplyFail());
        })
    }
}

export const postComment = (comment) => {
    return dispatch => {
        dispatch(postingReply());
        dispatch(enableLoadingScreen());
        postCommentApi(comment).then(data => {
            dispatch(disableLoadingScreen());
            message.success("Your comment has been posted.",3)
            dispatch(postReplySuccess(data.data));
        }).catch(error => {
            dispatch(disableLoadingScreen());
            if (error.response) {
                message.error("Can't post your comment because of an internal server error.",3);
            }else{
                message.error("Can't post your comment because of an unexpected error.",3);
            }
            dispatch(postReplyFail());
        })
    }
}