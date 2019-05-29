import React, { Component } from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import TopProduct from './components/products/top_product/TopProduct';
import Footer from './components/footer/Footer';
import CopyRight from './components/common/CopyRight';
import MiddleSection from './components/common/MiddleSection';
import {Switch,Route} from 'react-router-dom';
import ProductPageContainer from './components/products/productpage/ProductPageContainer';
import NotFound from './components/common/NotFound';
import LoginPageContainer from './components/login/LoginPageContainer';
import Contact from './components/contact/Contact';
import RegisterPageContainer from './components/register/RegisterPageContainer';
import './App.css';
import {Router} from 'react-router-dom';
import {history} from './helpers/helper'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { topTop } from './helpers/helper';
import $ from 'jquery';
import PrivateRoute from './components/common/PrivateRoute';
import 'antd/dist/antd.css';
import UserProfilePageContainer from './components/user/UserProfilePageContainer';
import LoginModal from './components/login/LoginModal';
import LoadingScreen from './components/common/LoadingScreen';
import CheckOutContainer from './components/checkout/CheckOutContainer';
import {StripeProvider,Elements} from 'react-stripe-elements';

const checkOutContainer = (location)=>(
  <StripeProvider apiKey="pk_test_fYDTdvCFqBgYkNvCT01iRPVu00rutQSTO4">
  <Elements>
      <CheckOutContainer location={location}/>
    </Elements>
</StripeProvider>
)

class App extends Component {

  componentDidMount(){
      // var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(typeof winScroll);
      // if (winScroll>50){
      //   document.getElementById("to-top-btn").style.display="block";
      // }else{
      //   document.getElementById("to-top-btn").style.display="none";

      // }
      setTimeout(()=>
      $('html,body').on('scroll', () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll >= 150) {
          document.getElementById("to-top-btn").style.display = "block";
        } else {
          document.getElementById("to-top-btn").style.display = "none";
        }
      }),500)
      }
  

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <button id="to-top-btn" onClick={()=>topTop(0)}>
            <i className="fas fa-level-up-alt"></i>
          </button>
          <LoadingScreen />
          <HeaderContainer />
          
          <Switch>
              <Route path="/" exact component={TopProduct}/>
              <Route path="/editor" component={LoginModal}/>
              <Route path="/products/brands/:brandId" component={TopProduct} />
              <Route path="/products/categories/:categoryId" component={TopProduct} />
              <Route path="/products/all-products" exact component={TopProduct} />
              <Route path="/products/single/:id" exact component={ProductPageContainer}/>
              <Route path="/account/login" exact component={LoginPageContainer} />
              <Route path="/account/regis" exact component={RegisterPageContainer}/>
              <PrivateRoute path="/account/my-profile" component={UserProfilePageContainer}/>
              <PrivateRoute path="/checkout/cart" exact component={(location)=>checkOutContainer(location)} />             
              <Route path="/contact" exact component={Contact}/>
              <Route component={NotFound} />
          </Switch>
          <MiddleSection />
          <Footer />
          <CopyRight />
      </div>
      </Router>
    );
  }
}

export default App;
