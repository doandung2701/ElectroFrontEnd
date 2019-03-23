
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getProductById } from '../ProductAction';
import ProductPage from './ProductPage';
import { getReviewsByProductId} from '../../review/ReviewAction';
import {changeCartItemQtyAsync} from '../../cart/CartAction';
import { getCommentsByProductId } from '../../comment/CommentAction';

var mapStateToProps = state =>{
    return{
        singleProduct: state.singleProduct,
        cart: state.cart
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getSingleProduct: (id)=>{
            dispatch(getProductById(id))
        },
        getReviewByProductId: (id)=>{
            dispatch(getReviewsByProductId(id))
        },
        changeCartItemQty: (payload,itemToChange)=>{
            dispatch(changeCartItemQtyAsync(payload,itemToChange))
        },
        getCommentsByProductId: (id)=>{
            dispatch(getCommentsByProductId(id));
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductPage));