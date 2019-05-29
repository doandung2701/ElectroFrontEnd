import React from 'react';
import {Link} from 'react-router-dom';

class CartItem extends React.Component{

    handleQuantityChange = (e) => {
        var value = Math.abs(parseInt(e.target.value));
        if (isNaN(value)) value = 0;
           this.props.onQtyChange1(this.props.id,value);
    }

    onConfirmQty = ()=>{
        this.props.onQtyChange({
            prodDetailId: this.props.id,
            currentQty: this.props.quantity,
            nextQty: this.props.quantity
        }, {
            prodDetailId: this.props.id
        })
    }

    render(){
        return(
            <li className="cart-item" >
                <img height='35px' src={this.props.thumbnail} alt="" width="35px" />
                <Link to={{pathname: `/products/single/${this.props.productId}`}} className="cart-item-name">
                {this.props.name} ({this.props.color})</Link>
                <div className="cart-item-details-quantity">
                    <input type="text" name="quantity"
                        value = {this.props.quantity}
                        onChange={this.handleQuantityChange}
                        onBlur={this.onConfirmQty}
                    className="cart-item-quantity" />
                </div>
                <div className="cart-item-details-remove"
                 onClick={()=>this.props.onQtyChange({
                     prodDetailId: this.props.id,
                     currentQty: this.props.quantity,
                     nextQty: 0,
                 },{
                     prodDetailId: this.props.id
                 })}
                 >
                    <button 
                     className="cart-item-remove"><i 
                        className="fas fa-times"></i></button>
                </div>
                <div className="cart-item-details-price">
                    <span className="cart-item-price">${this.props.price}</span>
                </div>
            </li>
        )
    }
}

export default CartItem;