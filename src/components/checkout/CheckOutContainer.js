import {connect} from 'react-redux';
import { changeCartItemQtyAsync, removeAllCartItem } from '../cart/CartAction';
import CheckOut from './CheckOut';
import {injectStripe} from 'react-stripe-elements';

var mapStateToProps = state=>{
    return {
        cart: state.cart,
        userId: state.authentication.userId,
        username: state.authentication.username
    }
}

var mapDispatchToProp = dispatch =>{
    return {
        changeCartItemQty: (payload,itemToChange)=>{
            dispatch(changeCartItemQtyAsync(payload,itemToChange));
        },
        removeAllCartItems: ()=>{
            dispatch(removeAllCartItem());
        }
    }
}

export default injectStripe(connect(mapStateToProps,mapDispatchToProp)(CheckOut));