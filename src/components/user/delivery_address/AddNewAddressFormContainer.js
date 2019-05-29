import {connect} from 'react-redux';
import { getAllAddressType } from './AddressTypeAction';
import AddNewAddressForm from './AddNewAddressForm';
import { addDeliveryAddress, updateDeliveryAddress } from './DeliveryAddressAction';

var mapStateToProps = state=>{
    return {
        addressTypes: state.addressTypes
    }
}

var mapDispatchToProps = dispatch=>{
    return {
        getAllAddressType: ()=>{
            dispatch(getAllAddressType())
        },
        addDeliveryAddress: (address)=>{
            dispatch(addDeliveryAddress(address));
        },
        editDeliveryAddress: (addrss)=>{
            dispatch(updateDeliveryAddress(addrss))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNewAddressForm);