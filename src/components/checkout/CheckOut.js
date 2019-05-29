import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Button as BButton} from 'react-bootstrap';
import DelieryAddress from '../user/delivery_address/DeliveryAddress';
import { Steps, Button, Modal, Card, Divider, message} from 'antd';
import CheckOutCartContainer from './CheckOutCartContainer';
import SelectPaymentMethodContainer from './SelectPaymentMethodContainer';
import { topTop, getDeliveryAddr, calculateSubtotals, getPaymentMethodId } from '../../helpers/helper';
import { chargeApi } from '../../api/TransactionApi';
import NumberFormat from 'react-number-format';

const Step = Steps.Step;

const steps = [{
  title: 'Cart',
  content: (onNext,location)=><CheckOutCartContainer onNext={onNext} location={location}/>,
}, {
  title: 'Address',
  content: (onNext,location)=><DelieryAddress onNext={onNext} location={location}/>,
}, {
  title: 'Payment & Purchase',
  content: (onConfirmPay)=><SelectPaymentMethodContainer onConfirmPay={onConfirmPay}/>,
}];

class CheckOut extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      current: sessionStorage.getItem("currentStep")?parseInt(sessionStorage.getItem("currentStep")):0,
      visible: false,
      loading: false,
      success: false,
      error: null
    };
  }

  serializeCart=()=>{
    let cart = this.props.cart.items;
    let serializedCart = [];
    if (cart!==null&&cart.length>0){
        for(let cartItem of cart){
            serializedCart.push({
                prodDetailId: cartItem.prodDetailId,
                quantity: cartItem.currentQty
            })
        }
    }
    return serializedCart;
}

toStep=(step)=>{
  this.setState({
    current: step,
    visible: false
  });
}

getChargeRequest = ()=>{
    let paymentMethodId = getPaymentMethodId();
    let deliveryAddress = getDeliveryAddr();
    let chargeRequest  = {
        purchaseCartRequests: this.serializeCart(),
        paymentMethodId : paymentMethodId,
        deliveryAddress : deliveryAddress?deliveryAddress.id:""
    }
    return chargeRequest;
}

submit = async ()=>{
    try{
        this.setState({
          loading: true
        });
        let token;
        if (getPaymentMethodId()==="CRE"){
         token = await this.props.stripe.createToken({
            name: this.props.userId+"-"+this.props.username
        });
      }
        let result = await chargeApi(this.getChargeRequest(),token?token.token.id:null);
        this.props.removeAllCartItems();
        await this.setState({ current: 0 });
        sessionStorage.setItem("currentStep",this.state.current.toString());
        await this.setState({
          loading: false
        });
        this.setState({
          success: true
        });
    }catch(error){
        await this.setState({
          loading: false
        })
        this.setState({
          error: error
        })
        message.error(`We can't make the purchase now :(\n Cause: ${error}`)
    }
}


showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.submit();
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  next = async ()=> {
    const current = this.state.current + 1;
    await this.setState({ current });
    sessionStorage.setItem("currentStep",this.state.current.toString());
    topTop(200);
  }

  prev= async ()=> {
    const current = this.state.current - 1;
    await this.setState({ current });
    sessionStorage.setItem("currentStep",this.state.current.toString());
    topTop(200);
  }

  content = (steps)=>{
    if (this.state.current<steps.length-1){
      return steps[this.state.current].content(this.next,this.props.location.location);
    }
    return steps[this.state.current].content(this.showModal);
  }

    render(){
      const { current } = this.state;
      console.log(this.props);
      var deliveryAddress = getDeliveryAddr()?getDeliveryAddr():{addressType: {}};
      if (this.props.cart.items.length===0){
        return (
          <div className="empty-cart">
            <img className="empty-cart-img" src="/images/cart.png" alt=""/>
            <h4>Your cart is empty.</h4>
            <Link to="/"><BButton variant="outline-warning"
                  size="lg" >
                  Continue shopping</BButton>
                  </Link>
            <Modal     
            title="Purchase successful"
            visible={this.state.visible}
            onOk={this.state.success?()=>this.setState({
              visible: false
            }):this.handleOk}
            onCancel={this.handleCancel}>
                {this.state.success&&<div style={{textAlign: 'center'}}>
                  <h5>Thank you for your purchase!</h5>
                  <img height="150"  width="auto"
                      src="/images/success_icon.png" alt="" />
                  <p>Your order will be delivered within 24 hours.</p>
                </div>}
            </Modal>
          </div>
        )
      }
        return (
        
            <div className="privacy py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
              <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                <span>C</span>heckout
              </h3>
              
              <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{this.content(steps)}</div>
        <div className="steps-action">
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
        <Modal     
            title="Payment confirmation"
            visible={this.state.visible}
            onOk={this.state.success?()=>this.setState({
              visible: false,
              success: false
            }):this.handleOk}
            onCancel={this.handleCancel}>
                <Fragment>
                <Card extra={<span onClick={()=>this.toStep(1)}
                  style={{color: 'blue',cursor: 'pointer'}}>Edit</span>}
                title="Delivery Address" 
                size="small">
                    <h5>{deliveryAddress.fullName}</h5>
                    <p>{deliveryAddress.address}</p>
                    <p>{deliveryAddress.addressType.name}</p>
                    <p>Phone: {deliveryAddress.phone}</p>
                </Card>
                <Card 
                extra={<span onClick={()=>this.toStep(0)}
                  style={{color: 'blue',cursor: 'pointer'}}>Edit</span>}
                title="Order" 
                size="small">
                    {this.props.cart.items.map(value=>(
                      <div key={value.prodDetailId}>
                        <span style={{float: 'left'}}>{value.currentQty} x &nbsp;
                        <Link to={`/products/single/${value.key}`}>
                        {value.name} {`(${value.color})`} </Link></span>
                        <span style={{float: 'right'}}><NumberFormat value={value.discount>0&&new Date(value.discountExDate)>Date.now()?
                        (value.price-(value.price*value.discount/100))*value.currentQty:value.price*value.currentQty}
                        displayType="text" thousandSeparator={true} prefix="$" renderText={
                          value=><span>{value}</span>
                        }></NumberFormat></span>
                        <Divider />
                      </div>
                    ))}
                    <div>
                      <h6 
                      style={{float: 'right',fontWeight: 'bolder'}}>Total:&nbsp;
                      <NumberFormat value={calculateSubtotals(this.props.cart.items)}
                        displayType="text" thousandSeparator={true} prefix="$" renderText={
                          value=><span>{value}</span>
                        }></NumberFormat></h6>
                    </div>
                </Card>
                <div style={{width: '100%',textAlign: 'center'}}>
                      {this.state.loading&&<img height="150"  width="auto"
                      src="/images/loading_purchase.gif" alt="" />}
                  </div>
                  </Fragment>
            </Modal>
            </div>
          </div>

        )
    }
}

export default CheckOut;