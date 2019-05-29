import React from 'react';
import CardInfoForm from './CardInfoForm';
import { Button } from 'antd';
import { getPaymentMethodId } from '../../helpers/helper';

export default class SelectPaymentMethod extends React.Component{

    constructor(props){
        super(props);
        this.props.getAllPaymentMethod();
        let paymentMethodId = getPaymentMethodId();
        this.state={
            paymentMethodId: paymentMethodId,
        }
    }

    handleInputChange = async (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        await this.setState({
            [name]: value
        })
        if (value!=="")
            sessionStorage.setItem("paymentMethodId",this.state.paymentMethodId);
    }

    render(){
        var {methods} = this.props.paymentMethods;
        return(
        <div className="checkout-left">
        <div className="address_form_agile mt-sm-5 mt-4">
            <h4 className="mb-sm-4 mb-3">Select a payment method</h4>
                <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div className="information-wrapper">
                        <div className="first-row">
                        <div className="controls form-group">
                            <select className="option-w3ls" name="paymentMethodId"
                            value={this.state.paymentMethodId}
                            onChange={this.handleInputChange}>
                                <option value="">Select a payment method</option>
                                {methods.map(value=>(
                                    <option key={value.id}
                                    value={value.id}>{value.methodName}</option>
                                ))}             
                            </select>
                        </div>
                    </div>
                </div>
                </div>
                {this.state.paymentMethodId==="CRE"&&<CardInfoForm onConfirmPay={this.props.onConfirmPay} />}
                {this.state.paymentMethodId==="COD"&&<Button type="primary" style={{ marginLeft: 8
                ,marginBottom: 20 }} onClick={this.props.onConfirmPay}>
                    Order
              </Button>}
        </div>
    </div>
        )
    }
}