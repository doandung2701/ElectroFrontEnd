import React from 'react';
import CheckOutForm from './CheckOutForm';

export default class CardInfoForm extends React.Component{
    render(){
        return(
            <div className="example">
              <h3>Please enter your card information</h3>
                <CheckOutForm onConfirmPay={this.props.onConfirmPay}/>
            </div>
        )
    }
}