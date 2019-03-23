import React from 'react';
import './cart.css';
import CartItem from './CartItem';
import { closeCart} from '../../helpers/helper';

class CartList extends React.Component{


    calculateSubtotals = ()=>{
        var sub =0;
        for (var cartItem of this.props.cart.items){
            sub+= cartItem.currentQty*cartItem.price
        }
        return sub;
    }


    render(){
        return(
            <div className="cart-list">
                <button onClick={()=>closeCart()}
                className="btn-close-cart-list">
                <i className="fas fa-times"></i></button>
                <ul>
                   {this.props.cart.items.length>0?this.props.cart.items.map((value)=>(
                       <CartItem key={value.prodDetailId}
                       productId= {value.key}
                       id = {value.prodDetailId}
                       quantity= {value.currentQty}
                       onQtyChange = {this.props.changeCartItemQty}
                       error = {this.props.cart.error}
                       name={value.name} 
                       thumbnail = {value.thumbnail}
                       color={value.color}
                       discount={value.discount}
                       discountExDate={value.discountExDate}
                       price={value.price}/>
                   )):<p style={{textAlign: "center"}}>Your cart is empty</p>}
                </ul>
                <div className="cart-subtotals">
                    Subtotals: ${this.calculateSubtotals()}
                </div>
                <button className="cart-checkout-btn">
                    Check Out&nbsp;<i className="fas fa-shopping-cart"></i>
                </button>
            </div>
        )
    }
}

export default CartList;