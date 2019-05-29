import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Modal } from 'antd';
import AddNewAddressFormContainer from './AddNewAddressFormContainer';

export default class SelectDeliveryAddress extends React.Component{

    constructor(props){
        super(props);
        this.state= {
          editModalVisible: false,
          edittingAddress: {
            address: '',
            phone: '',
            addressTypeId: 0,
            id: null,
            fullName: ''
          }
        }
        this.getAllDeliveryAddresses();
    }

    showModal = () => {
      this.setState({
          editModalVisible: true,
      });
  }

  handleOk = (e) => {
      this.setState({
          editModalVisible: false,
      });
  }

  handleCancel = (e) => {
    this.setState({
        editModalVisible: false,
    });
}


    getAllDeliveryAddresses = async ()=>{
        await this.props.getAllDeliveryAddresses();
    }

    saveDeliveryAddress = (address)=>{
        sessionStorage.setItem("deliveryAddress",JSON.stringify(address));
        this.props.onNext();
    }

    render(){
      const { fullName, address, phone, addressTypeId,id } = this.state.edittingAddress;
        return(
            <div className="select-delivery-address">
             <Modal
                    title="Update this address"
                    visible={this.state.editModalVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <AddNewAddressFormContainer addressId={id} isUpdate={true}
                    inModal ={true}
                        fullName={fullName} phone={phone} address={address}
                        addressTypeId={addressTypeId} closeModal={this.handleOk} />
                </Modal>
                <h4 className="mb-sm-4 mb-3" style={{color: '#0879C9'}}>
                Your Delivery Addresses: </h4>
                <div className="address-ctn">
                    <div>
                        {this.props.deliveryAddresses.addresses.map(value=>(
                            <Card key={value.id}
                            className="address-card">
                            <Card.Body>
                              <Card.Title className="card-title-name">{value.fullName}</Card.Title>
                              <Card.Text className="card-txt-address">
                                <span style={{fontWeight: 'bolder'}}>Address</span>:&nbsp;
                                <span>{value.address}</span> 
                              </Card.Text>
                              <Card.Text className="card-txt-type">
                                <span> {value.addressType.name}</span> 
                              </Card.Text>
                              <Card.Text className="card-txt-phone">
                                <span style={{fontWeight: 'bolder'}}>Phone</span>:&nbsp;
                                <span> {value.phone}</span> 
                              </Card.Text>
                              {this.props.location.pathname.indexOf("/checkout")>=0&&
                              <Button size="sm" onClick={()=>this.saveDeliveryAddress(value)}
                              variant="primary">Delivery to this address</Button>}
                              <Button size="sm" onClick={()=>{
                                this.setState({
                                  edittingAddress: {
                                    phone: value.phone,
                                    id: value.id,
                                    address: value.address,
                                    addressTypeId:value.addressType.id,
                                    fullName: value.fullName
                                  }
                                },this.showModal);
                              }}
                              variant="light">Edit</Button>
                              <Button size="sm" onClick={()=>this.props.removeDeliveryAddress(value.id)}
                              variant="secondary">Remove</Button>
                            </Card.Body>
                          </Card>
                        ))}
                         <Card onClick={this.props.onOpenNewAddressForm}
                         style={{height: 223,border: 'none',cursor: 'pointer'}}
                            className="address-card">
                            <Card.Body>
                                <Card.Text style={{textAlign: 'center',marginTop: 70}}>
                                    <i style={{fontSize: 28,padding: 15,border: '1px dashed lightblue'}}
                                    className="fas fa-plus"></i>
                                </Card.Text>
                            </Card.Body>
                          </Card>
                    </div>
                </div>
            </div>
        )
    }
}