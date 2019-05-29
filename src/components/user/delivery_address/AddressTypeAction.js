import { GETTING_ALL_ADDRESS_TYPE, GET_ALL_ADDRESS_TYPE_SUCCESS, GET_ALL_ADDRESS_TYPE_FAIL } from "../../../constants/constants";
import { getAllAddressTypeApi } from "../../../api/AddressTypeApi";

const gettingAllAddressType = ()=>({
    type: GETTING_ALL_ADDRESS_TYPE
})

const getAllAddressTypeSuccess = (types)=>({
    type: GET_ALL_ADDRESS_TYPE_SUCCESS,
    types
})

const getAllAddressTypeFail = ()=>({
    type: GET_ALL_ADDRESS_TYPE_FAIL,
})

export const getAllAddressType = ()=>{
    return dispatch=>{
        dispatch(gettingAllAddressType());
        getAllAddressTypeApi().then(data=>{
            dispatch(getAllAddressTypeSuccess(data.data))
        }).catch(error=>{
            dispatch(getAllAddressTypeFail())
        })
    }
}