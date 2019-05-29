
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getProductById } from '../ProductAction';
import ProductPage from './ProductPage';
import { getReviewsByProductId} from '../../review/ReviewAction';
import {changeCartItemQtyAsync} from '../../cart/CartAction';
import { getCommentsByProductId } from '../../comment/CommentAction';
import { addSeenProduct, addSeenProductLocal } from '../top_product/product_user/seen_product/SeenProductAction';

var mapStateToProps = state =>{
    return{
        singleProduct: state.singleProduct,
        cart: state.cart,
        isLoggedIn: state.authentication.isLoggedIn
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
        },
        addSeenProduct: (productId)=>{
            dispatch(addSeenProduct(productId));
        },
        addSeenProductLocal: (product)=>{
            dispatch(addSeenProductLocal(product));
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductPage));