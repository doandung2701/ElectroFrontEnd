import React from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-s-alert';

class CartItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.quantity,
            price: this.props.price,
        }
    }

    handleQuantityChange = (e) => {
        var value = parseInt(e.target.value);
        if (value&&value>0) {
            this.props.onQtyChange({
                prodDetailId: this.props.id,
                currentQty: this.props.quantity,
                nextQty: value
            }, {
                prodDetailId: this.props.id
            })
            this.setState({
                quantity: value,
            });
            this.setState((state, props) => ({
                price: state.quantity * props.price
            }))
        }else{
            Alert.error("Invalid input",{
                position: 'top',
                timeout: 3000,
                effect: 'slide'
            })
        }
    }

    componentDidUpdate(){//resync state
        if (this.props.quantity!==this.state.quantity){
            this.setState({
                quantity: this.props.quantity
            })
        }
    }

    render(){
        return(
            <li className="cart-item" >
                <img height='35px' src={this.props.thumbnail} alt="" width="35px" />
                <Link to={{pathname: `/products/single/${this.props.productId}`}} className="cart-item-name">
                {this.props.name} ({this.props.color})</Link>
                <div className="cart-item-details-quantity">
                    <input type="number" name="quantity"
                    min={1}
                        value = {this.state.quantity}
                        onChange={this.handleQuantityChange}
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
                    <span className="cart-item-price">${this.state.price}</span>
                </div>
            </li>
        )
    }
}

export default CartItem;