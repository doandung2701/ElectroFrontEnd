import {connect} from 'react-redux';
import { getAllDeliveryAddress, removeDeliveryAddress } from './DeliveryAddressAction';
import SelectDeliveryAddress from './SelectDeliveryAddress';

var mapStateToProps = state=>{
    return {
        deliveryAddresses: state.deliveryAddresses
    }
}

var mapDispatchToProps = dispatch=>{
    return {
        getAllDeliveryAddresses: ()=>{
            dispatch(getAllDeliveryAddress())
        },
        removeDeliveryAddress: (addressId)=>{
            dispatch(removeDeliveryAddress(addressId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectDeliveryAddress);