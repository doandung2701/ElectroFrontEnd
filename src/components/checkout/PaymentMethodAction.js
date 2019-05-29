import { GETTING_ALL_PAYMENT_METHOD, GET_ALL_PAYMENT_METHOD_SUCCESS, GET_ALL_PAYMENT_METHOD_FAIL } from "../../constants/constants";
import { getAllPaymentMethodApi } from "../../api/PaymentMethodApi";

const gettingAllPaymentMethod = ()=>({
    type: GETTING_ALL_PAYMENT_METHOD
})

const getAllPaymentMethodSuccess = (methods)=>({
    type: GET_ALL_PAYMENT_METHOD_SUCCESS,
    methods
})

const getAllPaymentMethodFail = ()=>({
    type: GET_ALL_PAYMENT_METHOD_FAIL
})

export const getAllPaymentMethod = ()=>{
    return dispatch=>{
        dispatch(gettingAllPaymentMethod());
        getAllPaymentMethodApi().then(data=>{
            dispatch(getAllPaymentMethodSuccess(data.data));
        }).catch(error=>{
            dispatch(getAllPaymentMethodFail());
        })
    }
}