import React from 'react';
import SelectDeliveryAddressContainer from './SelectDeliveryAddressContainer';
import './delivery_address.css';
import AddNewAddressFormContainer from './AddNewAddressFormContainer';
import { Button } from 'react-bootstrap';

export default class DeliveryAddress extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addNewAddressVisile: false
        }
    }

    toggleNewAddressForm = ()=>{
        this.setState({
            addNewAddressVisile: !this.state.addNewAddressVisile
        })
    }

    render(){
        return(
            <div className="delivery-address">
                <SelectDeliveryAddressContainer location={this.props.location} onNext={this.props.onNext}
                 onOpenNewAddressForm={this.toggleNewAddressForm}/>
                {this.state.addNewAddressVisile&&<AddNewAddressFormContainer 
                isUpdate={ window.location.pathname.indexOf("/my-profile/delivery-address")>=0}
                fullName='' phone='' address='' addressTypeId={0}
                />}
            </div>
        )
    }
}