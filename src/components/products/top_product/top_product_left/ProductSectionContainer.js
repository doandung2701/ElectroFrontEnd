
import {connect} from 'react-redux';
import { getProductsList, getItemCount, getProductsListByBrand, getItemCountByBrand, getProductsListByCategory, getItemCountByCategory } from '../../ProductAction';
import FirstTopProductSection from './FirstTopProductSection';

var mapStateToProps = state =>{
    return {
        products: state.productsList,
        itemCount: state.itemCount,
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getProducts: (pageable)=>{
            dispatch(getProductsList(pageable));
        },
        getProductsCount: ()=>{
            dispatch(getItemCount());
        },
        getProductsByBrand: (brandId,pageable)=>{
            dispatch(getProductsListByBrand(brandId,pageable));
        },
        getProductsCountByBrand: (brandId)=>{
            dispatch(getItemCountByBrand(brandId));
        },
        getProductsByCategory: (categoryId,pageable)=>{
            dispatch(getProductsListByCategory(categoryId,pageable));
        },  
        getProductsCountByCategory: (categoryId)=>{
            dispatch(getItemCountByCategory(categoryId));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstTopProductSection);