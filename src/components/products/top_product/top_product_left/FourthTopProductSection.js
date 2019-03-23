import React from 'react';

class FourthTopProductSection extends React.Component{
    render(){
        return(
          <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                    <h3 className="heading-tittle text-center font-italic">Large Appliances</h3>
                    <div className="row">
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="images/m7.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">Whirlpool 245</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$230.00</span>
                              <del>$280.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="Whirlpool 245" />
                                  <input type="hidden" name="amount" value="230.00" />
                                  <input type="hidden" name="discount_amount" value="1.00" />
                                  <input type="hidden" name="currency_code" value="USD" />
                                  <input type="hidden" name="return" value=" " />
                                  <input type="hidden" name="cancel_return" value=" " />
                                  <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                </fieldset>
                              </form>
                            </div>
      
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="images/m8.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">BPL Washing Machine</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$180.00</span>
                              <del>$200.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="BPL Washing Machine" />
                                  <input type="hidden" name="amount" value="180.00" />
                                  <input type="hidden" name="discount_amount" value="1.00" />
                                  <input type="hidden" name="currency_code" value="USD" />
                                  <input type="hidden" name="return" value=" " />
                                  <input type="hidden" name="cancel_return" value=" " />
                                  <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                </fieldset>
                              </form>
                            </div>
      
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="images/m9.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">Microwave Oven</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$199.00</span>
                              <del>$299.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="Microwave Oven" />
                                  <input type="hidden" name="amount" value="199.00" />
                                  <input type="hidden" name="discount_amount" value="1.00" />
                                  <input type="hidden" name="currency_code" value="USD" />
                                  <input type="hidden" name="return" value=" " />
                                  <input type="hidden" name="cancel_return" value=" " />
                                  <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        )
    }
}

export default FourthTopProductSection;