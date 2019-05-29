import {connect} from 'react-redux';
import SelectPaymentMethod from './SelectPaymentMethod';
import { getAllPaymentMethod } from './PaymentMethodAction';

var mapStateToProps = state=>{
    return {
        paymentMethods: state.paymentMethods
    }
}

var mapDispatchToProp = dispatch =>{
    return {
        getAllPaymentMethod: ()=>{
            dispatch(getAllPaymentMethod())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(SelectPaymentMethod);