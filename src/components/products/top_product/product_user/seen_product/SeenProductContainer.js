import {connect} from 'react-redux';
import SeenProductDrawer from './SeenProductDrawer';
import { getSeenProducts, getSeenProductsCount } from './SeenProductAction';

var mapStateToProps = state=>{
    return {
        seenProducts: state.seenProducts,
        authentication: state.authentication
    }
}

var mapDispatchToProp = dispatch =>{
    return {
        getSeenProducts: (pageble)=>{
            dispatch(getSeenProducts(pageble))
        },
        getSeenProductsCount: (userId)=>{
            dispatch(getSeenProductsCount(userId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(SeenProductDrawer);