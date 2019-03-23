import React from 'react';
import Navigation from './Navigation';
import SelectLocation from './SelectLocation';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import CartListContainer from '../cart/CartListContainer';
import HeaderBottomContainer from './HeaderBottomContainer';
import { Dropdown} from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import './Header.css';

class Header extends React.Component{

    render(){
        return(
            <Fragment>
            <div className="agile-main-top">
            <div className="container-fluid">
              <div className="row main-top-w3l py-2">
                <div className="col-lg-4 header-most-top">
                  <p className="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
                    <i className="fas fa-shopping-cart ml-1"></i>
                  </p>
                </div>
                <div className="col-lg-8 header-right mt-lg-0 mt-2">
                  {/*<!-- header lists -->*/}
                  <ul>
                    <li className="text-center border-right text-white">
                      <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                        <i className="fas fa-map-marker mr-2"></i>Select Location</a>
                    </li>
                    <li className="text-center border-right text-white">
                      <a href="vl" data-toggle="modal" data-target="#exampleModal" className="text-white">
                        <i className="fas fa-truck mr-2"></i>Track Order</a>
                    </li>
                    <li className="text-center border-right text-white">
                      <i className="fas fa-phone mr-2"></i> 001 234 5678
                    </li>
                    <li className="text-center border-right text-white">
                      {this.props.isLoggedIn?
                      ( <Dropdown bsPrefix="c-dropdown">
                        <DropdownToggle id="dropdown-basic-button">
                        {<span><i className="fas fa-user-circle"></i>&nbsp;
                         {this.props.username}</span>}
                         </DropdownToggle>
                         <DropdownMenu>
                        <Dropdown.Item as="span">
                        <Link to={`/account/my-profile`}
                         style={{textDecoration: 'none',color: 'black'}}>
                        <i className="fas fa-user-circle"></i>&nbsp;
                            My Profile</Link>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i>&nbsp;
                            Sign out
                          </Dropdown.Item>
                          </DropdownMenu>
                        </Dropdown>
                      ):
                      (<Link to="/account/login" className="text-white">
                      <i className="fas fa-sign-in-alt mr-2"></i> Log In </Link> ) 
                      }
                    </li>
                    <li className="text-center text-white">
                      <Link to="/account/regis" className="text-white">
                        <i className="fas fa-sign-out-alt mr-2"></i>Register </Link>
                    </li>
                  </ul>
                  {/*<!-- //header lists -->*/}
                </div>
              </div>
            </div>
          </div>
           <CartListContainer />
          <SelectLocation />
          <HeaderBottomContainer />
          <Navigation />
          </Fragment>
        )
    }
}

export default Header;