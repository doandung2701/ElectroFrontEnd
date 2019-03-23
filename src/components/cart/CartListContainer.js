import {connect} from 'react-redux';
import { changeCartItemQtyAsync } from './CartAction';
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(CartList);