import React from 'react';
import './cart.css';
import CartItem from './CartItem';
import { closeCart, calculateSubtotals} from '../../helpers/helper';
import {Link} from 'react-router-dom';

class CartList extends React.Component{

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
                       onQtyChange1 = {this.props.changeCartItemQty1}
                       error = {this.props.cart.error}
                       name={value.name} 
                       thumbnail = {value.thumbnail}
                       color={value.color}
                       discount={value.discount}
                       discountExDate={value.discountExDate}
                       price={value.discount>0&&new Date(value.discountExDate)>Date.now()?
                        (value.price-(value.price*value.discount/100))*value.currentQty:value.price*value.currentQty}/>
                   )):<p style={{textAlign: "center"}}>Your cart is empty</p>}
                </ul>
                <div className="cart-subtotals">
                    Subtotals: ${calculateSubtotals(this.props.cart.items)}
                </div>
                <button className="cart-checkout-btn">
                    <Link to="/checkout/cart" style={{color: 'white'}} onClick={()=>closeCart()}>
                    Check Out&nbsp;<i className="fas fa-shopping-cart"></i></Link>
                </button>
            </div>
        )
    }
}

export default CartList;