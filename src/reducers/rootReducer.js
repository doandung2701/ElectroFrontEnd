
import {combineReducers} from 'redux';
import { cartReducer } from './cartReducer';
import { authenticationReducer } from './authenticationReducer';
import { productListReducer } from './productListReducer';
import { registerReducer } from './registerReducer';
import { productPageReducer } from './productPageReducers';
import { itemCountReducer } from './itemCountReducer';
import { searchProductsReducer } from './searchProductsReducer';
import { userTaskReducer } from './userTaskReducer';
import {reviewReducer} from '../components/review/ReviewReducer';
import { brandsReducer } from '../components/brands/BrandReducer';
import { categoriesReducer } from '../components/categories/CategoryReducer';
import {topViewReducer} from './topViewReducer';
import {loadingScreenReducer} from './LoadingScreenReducer';
import { commentsReducer } from '../components/comment/CommentReducer';
import { seenProductsReducer } from '../components/products/top_product/product_user/seen_product/SeenProductReducer';
import {deliveryAddressesReducer} from '../components/user/delivery_address/DeliveryAddressReducer';
import { addressTypeReducer } from '../components/user/delivery_address/AddressTypeReducer';
import { paymentMethodReducer } from '../components/checkout/PaymentMethodReducer';

export const rootReducer = combineReducers({
    cart: cartReducer,
    authentication: authenticationReducer,
    productsList: productListReducer,
    registerInfo: registerReducer,
    singleProduct: productPageReducer,
    itemCount: itemCountReducer,
    searchProducts: searchProductsReducer,
    userTask: userTaskReducer,
    reviews: reviewReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    topViewList: topViewReducer,
    loadingScreenEnabled: loadingScreenReducer,
    comments: commentsReducer,
    seenProducts: seenProductsReducer,
    deliveryAddresses: deliveryAddressesReducer,
    addressTypes: addressTypeReducer,
    paymentMethods: paymentMethodReducer
})