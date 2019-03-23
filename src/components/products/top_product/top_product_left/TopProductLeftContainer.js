
import {connect} from 'react-redux';
import { getProductsList, getItemCount } from '../../ProductAction';
import TopProductLeft from './TopProductLeft';

var mapStateToProps = state =>{
    return {
        itemCount: state.itemCount
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getProducts: (pageable)=>{
            dispatch(getProductsList(pageable));
        },
        getProductsCount: ()=>{
            dispatch(getItemCount());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopProductLeft);