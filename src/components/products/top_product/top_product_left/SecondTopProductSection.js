import React from 'react';

class SecondTopProductSection extends React.Component{
    render(){
        return(
          <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
          <h3 className="heading-tittle text-center font-italic">Tv & Audio</h3>
          <div className="row">
            <div className="col-md-4 product-men mt-5">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                  <img src="images/m4.jpg" alt=""/>
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <a href="single.html" className="link-product-add-cart">Quick View</a>
                    </div>
                  </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                  <h4 className="pt-1">
                    <a href="single.html">Sony 80 cm (32 inches)</a>
                  </h4>
                  <div className="info-product-price my-2">
                    <span className="item_price">$320.00</span>
                    <del>$340.00</del>
                  </div>
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden" name="item_name" value="Sony 80 cm (32 inches)" />
                        <input type="hidden" name="amount" value="320.00" />
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
                  <img src="images/m5.jpg" alt=""/>
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <a href="single.html" className="link-product-add-cart">Quick View</a>
                    </div>
                  </div>
                  <span className="product-new-top">New</span>

                </div>
                <div className="item-info-product text-center border-top mt-4">
                  <h4 className="pt-1">
                    <a href="single.html">Artis Speaker</a>
                  </h4>
                  <div className="info-product-price my-2">
                    <span className="item_price">$349.00</span>
                    <del>$399.00</del>
                  </div>
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden" name="item_name" value="Artis Speaker" />
                        <input type="hidden" name="amount" value="349.00" />
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
                  <img src="images/m6.jpg" alt=""/>
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <a href="single.html" className="link-product-add-cart">Quick View</a>
                    </div>
                  </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                  <h4 className="pt-1">
                    <a href="single.html">Philips Speakers</a>
                  </h4>
                  <div className="info-product-price my-2">
                    <span className="item_price">$249.00</span>
                    <del>$300.00</del>
                  </div>
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden" name="item_name" value="Philips Speakers" />
                        <input type="hidden" name="amount" value="249.00" />
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

export default SecondTopProductSection;