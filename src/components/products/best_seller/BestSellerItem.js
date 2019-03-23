import React from 'react';
import {Link} from 'react-router-dom';

class BestSellerItem extends React.Component{

    render(){
      var product = this.props.value;
        return(
            <div className="row my-4">
                      <div className="col-lg-3 col-sm-2 col-3 left-mar">
                        <img src={product.thumbnail} alt="" className="img-fluid"/>
                      </div>
                      <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                        <Link to={`/products/single/${product.productId}`}>
                        {product.productName}</Link>
                        <Link className="price-mar mt-2" to={`/products/single/${product.productId}`}>
                        Click to see details</Link>
                      </div>
            </div>
        )
    }
}

export default BestSellerItem;