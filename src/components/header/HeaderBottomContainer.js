import {connect} from 'react-redux';
import HeaderBottom from './HeaderBottom';


var mapStateToProps = state=>{
    return {
        cartLength: state.cart.items.length
    }
}


export default connect(mapStateToProps,null)(HeaderBottom);