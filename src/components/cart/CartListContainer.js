import {connect} from 'react-redux';
import { changeCartItemQtyAsync, changeCartItemQty } from './CartAction';
import CartList from './CartList';

var mapStateToProps = state=>{
    return {
        cart: state.cart
    }
}

var mapDispatchToProp = dispatch =>{
    return {
        changeCartItemQty: (payload,itemToChange)=>{
            dispatch(changeCartItemQtyAsync(payload,itemToChange));
        },
        changeCartItemQty1: (id,qty)=>{
            dispatch(changeCartItemQty(id,qty))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(CartList);