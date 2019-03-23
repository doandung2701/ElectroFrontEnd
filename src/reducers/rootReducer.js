
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
    comments: commentsReducer
})