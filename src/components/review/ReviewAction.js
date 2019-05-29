import { GETTING_REVIEWS, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAIL, SAVING_REVIEW, SAVE_REVIEW_SUCCESSS, SAVE_REVIEW_FAIL } from "../../constants/constants";
import { getReviewByProductIdApi, addReviewApi } from "../../api/ReviewApi";
import { message } from "antd";
import { enableLoadingScreen, disableLoadingScreen } from "../cart/CartAction";

const gettingReviews = ()=>({
    type: GETTING_REVIEWS
})

const getReviewsSuccess = (reviews)=>({
    type: GET_REVIEWS_SUCCESS,
    reviews
})

const getReviewsFail = ()=>({
    type: GET_REVIEWS_FAIL
})

const savingReview = ()=>({
    type: SAVING_REVIEW
})

const saveReviewSuccess = (reviews)=>({
    type: SAVE_REVIEW_SUCCESSS,
    reviews
})

const saveReviewFail = ()=>({
    type: SAVE_REVIEW_FAIL
})

export const getReviewsByProductId = (productId)=>{
    return dispatch=>{
        dispatch(gettingReviews());
        getReviewByProductIdApi(productId).then(response=>{
            dispatch(getReviewsSuccess(response.data));
        }).catch(error=>{
            dispatch(getReviewsFail());
        })
    }
}

export const saveReview = (review)=>{
    return dispatch=>{
        dispatch(savingReview());
        dispatch(enableLoadingScreen());
        addReviewApi(review).then(data=>{
            dispatch(disableLoadingScreen());
            dispatch(saveReviewSuccess(data.data));
            message.success("Saved review successfully",3);
        }).catch(error=>{
            dispatch(disableLoadingScreen());
            message.error("Save review fail",{
                effect: 'slide'
            });
                
            dispatch(saveReviewFail());
            if (error){
                message.error("Save review fail: "+error.response.data,3);
            }
        })
    }
}