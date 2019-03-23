import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Rate, Badge, Statistic } from 'antd';
import { calculateReviewScore } from '../../../../helpers/helper';

class ProductItem extends React.Component{

    findMaxPriceDiscount = (productDetails)=>{
      var activeDiscount  = productDetails.filter(value=>{
        return value.discountExDate&&value.discount>0&&new Date(value.discountExDate)>Date.now();
      })
      if (activeDiscount.length>0)
      return activeDiscount.reduce((prev,current)=>{
          return (prev.discount > current.discount )? prev:current;
      })
    }

    isInStock = (productDetails)=>{
      var stock = productDetails.filter(value=>{
        return value.stockQuantity>0;
      })
      return stock&&stock.length>0?true:false;
    }

    render(){
        var product = this.props.product;
        var productDetails = product.productDetails.slice();
        const maxActiveDiscount =  this.findMaxPriceDiscount(productDetails);
        const isInStock = this.isInStock(productDetails);
        return(
            <div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
              <div className="men-thumb-item text-center">
                {<Badge count={maxActiveDiscount?`${-maxActiveDiscount.discount}%`:""}  >
                <Fragment>  
                <img height="auto" width="200px"src={product.thumbnail} alt=""/>
                </Fragment> </Badge>}
                {maxActiveDiscount&&<div><Statistic.Countdown className="count-down"
                  value={new Date(maxActiveDiscount.discountExDate)}></Statistic.Countdown></div>}
                <div className="men-cart-pro">
                  <div className="inner-men-cart-pro">
                    <Link to ={`/products/single/${product.productId}`} 
                    className="link-product-add-cart">Quick View</Link>
                  </div>
                </div>
              </div>
              <div className="item-info-product text-center border-top mt-4">
                <h4 style={{height: '50px'}} className="pt-1">
                  <Link to ={`/products/single/${product.productId}`}>{product.productName}</Link>
                </h4>
                <div className="info-product-price my-2">
                  <span className="item_price">${maxActiveDiscount?maxActiveDiscount.price-
                  maxActiveDiscount.price*maxActiveDiscount.discount/100:
                    productDetails[0].price}</span>
                  <del>
                    {maxActiveDiscount?maxActiveDiscount.price:''}
                  </del>
                  <br />
                  {isInStock?<span className="stock-info">Available in stock</span>
                  :<span className="stock-info">Out of Stock</span>}
                </div>
                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                  <Rate allowHalf allowClear value={calculateReviewScore(product.reviews)} disabled></Rate>
                  <p>({product.reviews.length} votes)</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProductItem;