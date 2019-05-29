import React from 'react';
import {injectStripe,CardElement} from 'react-stripe-elements';
import { calculateSubtotals } from '../../helpers/helper';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';

class CheckOutForm extends React.Component{

    // serializeCart=()=>{
    //     let cart = this.props.cart.items;
    //     let serializedCart = [];
    //     if (cart!==null&&cart.length>0){
    //         for(let cartItem of cart){
    //             serializedCart.push({
    //                 prodDetailId: cartItem.prodDetailId,
    //                 quantity: cartItem.currentQty
    //             })
    //         }
    //     }
    //     return serializedCart;
    // }

    // getChargeRequest = ()=>{
    //     let paymentMethodId = sessionStorage.getItem("paymentMethodId");
    //     let deliveryAddress = getDeliveryAddr();
    //     let chargeRequest  = {
    //         purchaseCartRequests: this.serializeCart(),
    //         paymentMethodId : paymentMethodId?paymentMethodId:"",
    //         deliveryAddress : deliveryAddress?deliveryAddress.id:""
    //     }
    //     return chargeRequest;
    // }

    // submit = async ()=>{
    //     try{
    //         console.log("here")
    //         let token = await this.props.stripe.createToken({
    //             name: this.props.userId+"-"+this.props.username
    //         })
    //         let result = await chargeApi(this.getChargeRequest(),token.token.id);
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    render(){
        return (
            <div className="checkout">
                <CardElement />
                <button 
                onClick={this.props.onConfirmPay}>
                Pay <NumberFormat value={calculateSubtotals(JSON.parse(sessionStorage.getItem("cart")))}
                    thousandSeparator={true} displayType="text" prefix="$" renderText={
                        value=>`${value}`
                    }
                ></NumberFormat>
                </button>
            </div>
        )
    }
}

var mapStateToProps = state=>{
    return {
        userId: state.authentication.userId,
        username: state.authentication.username,
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(CheckOutForm);