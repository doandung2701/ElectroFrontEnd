import React from 'react';
import { message } from 'antd';

export default class AddNewAddressForm extends React.Component {

    constructor(props) {
        super(props);
        this.props.getAllAddressType();
        this.state = {
            fullName: this.props.fullName,
            address: this.props.address,
            phone: this.props.phone,
            addressTypeId: this.props.addressTypeId,
            addressId: this.props.addressId
        }
        console.log(this.props)
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "addressTypeId") value = parseInt(value);
        this.setState({
            [name]: value
        })
    }

    addDeliveryAddress = (e) => {
        e.preventDefault();
        let error = 0;
        if (this.state.addressTypeId === 0) {
            message.error("Please select an address type!");
            error = 1
        }
        if (this.state.fullName.trim().indexOf(" ") < 0) {
            message.error("Please enter your full name!");
            error = 1

        }
        if (this.state.phone.length < 9 || this.state.phone.length > 15) {
            message.error("Phone number is between 9 and 15 digits!");
            error = 1
        }
        if (this.state.address.length <= 0) {
            message.error("Please enter your true address!");
            error = 1
        }
        if (error === 0) {
            const { addressId, ...rest } = this.state;
            let { isUpdate, inModal } = this.props;
            isUpdate = isUpdate && inModal;
            isUpdate ?
                this.props.editDeliveryAddress(this.state) :
                this.props.addDeliveryAddress(rest);
        }
    }

    render() {
        let { isUpdate, inModal } = this.props;
        isUpdate = isUpdate && inModal;
        return (
            <div>
                <div className="checkout-left">
                    <div className="address_form_agile mt-sm-5 mt-4">
                        <h4 className="mb-sm-4 mb-3" >{isUpdate ? "Update" : "Add a new"} delivery address</h4>
                        <form onSubmit={this.addDeliveryAddress}
                            className="creditly-card-form agileinfo_form">
                            <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                <div className="information-wrapper">
                                    <div className="first-row">
                                        <div className="controls form-group">
                                            <input className="billing-address-name form-control"
                                                value={this.state.fullName}
                                                onChange={this.handleInputChange}
                                                type="text" name="fullName" placeholder="Full Name" required="" />
                                        </div>
                                        <div className="w3_agileits_card_number_grids">
                                            <div className="w3_agileits_card_number_grid_left form-group">
                                                <div className="controls">
                                                    <input type="text" className="form-control"
                                                        value={this.state.phone}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Mobile Number" name="phone" required="" />
                                                </div>
                                            </div>
                                            <div className="w3_agileits_card_number_grid_right form-group">
                                                <div className="controls">
                                                    <input type="text" className="form-control"
                                                        value={this.state.address}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Address" name="address" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="controls form-group">
                                            <select className="option-w3ls" name="addressTypeId"
                                                value={this.state.addressTypeId}
                                                onChange={this.handleInputChange}>
                                                <option value="0">Select address type</option>
                                                {this.props.addressTypes.types.map(value => (
                                                    <option key={value.id}
                                                        value={value.id}>{value.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <button className="submit check_out btn">{isUpdate ? 'Update' : 'Add'}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}