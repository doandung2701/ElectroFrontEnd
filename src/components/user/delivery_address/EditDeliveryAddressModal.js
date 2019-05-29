import React from 'react';
import { Modal } from 'antd';
import AddNewAddressFormContainer from './AddNewAddressFormContainer';

export default class EditDeliveryAddressModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: true }
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


    render() {
        const { fullName, address, phone, addressTypeId } = this.props;
        return (
            <div>
                <Modal
                    title="Update this address"
                    visible={this.state.visible}
                    footer={null}
                >
                    <AddNewAddressFormContainer addressId={this.props.id}
                        fullName={fullName} phone={phone} address={address}
                        addressTypeId={addressTypeId} closeModal={this.handleOk} />
                </Modal>
            </div>
        )
    }
}