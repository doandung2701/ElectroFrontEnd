import React from 'react';
import {Link} from 'react-router-dom';
import SelectBrandContainer from '../brands/SelectBrandContainer';
import SelectCategoryContainer from '../categories/SelectCategoryContainer';
import SeenProductContainer from '../products/top_product/product_user/seen_product/SeenProductContainer';

class Navigation extends React.Component{
    render(){
        return(
        <div className="navbar-inner">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="agileits-navi_search">
              <form action="#" method="post">
                <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required="">
                  <option value="">All Categories</option>
                  <option value="Televisions">Televisions</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Computers">Computers</option>
                  <option value="Appliances">Appliances</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                  <option value="iPad & Tablets">iPad & Tablets</option>
                  <option value="Cameras & Camcorders">Cameras & Camcorders</option>
                  <option value="Home Audio & Theater">Home Audio & Theater</option>
                </select>
              </form>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto text-center mr-xl-5">
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                  <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <SelectCategoryContainer />
                <SelectBrandContainer/>
                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                  <a className="nav-link" href="about.html">About Us</a>
                </li>
              <SeenProductContainer />
                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                  <a className="nav-link dropdown-toggle" href="vl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="product.html">Product 1</a>
                    <a className="dropdown-item" href="product2.html">Product 2</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="single.html">Single Product 1</a>
                    <a className="dropdown-item" href="single2.html">Single Product 2</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                    <a className="dropdown-item" href="payment.html">Payment Page</a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        )
    }
}

export default Navigation;