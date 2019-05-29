import React from 'react';
import { Modal, Card } from 'antd';

export default class CheckoutConfirmModal extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            visible: false
        }
    }

    getDeliveryAddr = ()=>{
        let deliveryAddress = sessionStorage.getItem("deliveryAddress");
        deliveryAddress = deliveryAddress?JSON.parse(deliveryAddress):null;
        return deliveryAddress;
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }
    
    render(){
        var deliveryAddress = this.getDeliveryAddr();
        return(
            <Modal     
            title="Payment confirmation"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
                <Card title="Delivery Address" 
                size="default">
                    <h5>{deliveryAddress.id}</h5>
                    <p>de</p>
                </Card>
            </Modal>
        )
    }
}