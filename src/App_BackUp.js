import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="App">
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
                    <a href="vl" data-toggle="modal" data-target="#exampleModal" className="text-white">
                      <i className="fas fa-sign-in-alt mr-2"></i> Log In </a>
                  </li>
                  <li className="text-center text-white">
                    <a href="vl" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                      <i className="fas fa-sign-out-alt mr-2"></i>Register </a>
                  </li>
                </ul>
                {/*<!-- //header lists -->*/}
              </div>
            </div>
          </div>
        </div>
      
        {/*<!-- Button trigger modal(select-location) -->*/}
        <div id="small-dialog1" className="mfp-hide">
          <div className="select-city">
            <h3>
              <i className="fas fa-map-marker"></i> Please Select Your Location</h3>
            <select className="list_of_cities">
              <optgroup label="Popular Cities">
                <option selected style={{display:'none' ,color: 'eee'}}>Select City</option>
                <option>Birmingham</option>
                <option>Anchorage</option>
                <option>Phoenix</option>
                <option>Little Rock</option>
                <option>Los Angeles</option>
                <option>Denver</option>
                <option>Bridgeport</option>
                <option>Wilmington</option>
                <option>Jacksonville</option>
                <option>Atlanta</option>
                <option>Honolulu</option>
                <option>Boise</option>
                <option>Chicago</option>
                <option>Indianapolis</option>
              </optgroup>
              <optgroup label="Alabama">
                <option>Birmingham</option>
                <option>Montgomery</option>
                <option>Mobile</option>
                <option>Huntsville</option>
                <option>Tuscaloosa</option>
              </optgroup>
              <optgroup label="Alaska">
                <option>Anchorage</option>
                <option>Fairbanks</option>
                <option>Juneau</option>
                <option>Sitka</option>
                <option>Ketchikan</option>
              </optgroup>
              <optgroup label="Arizona">
                <option>Phoenix</option>
                <option>Tucson</option>
                <option>Mesa</option>
                <option>Chandler</option>
                <option>Glendale</option>
              </optgroup>
              <optgroup label="Arkansas">
                <option>Little Rock</option>
                <option>Fort Smith</option>
                <option>Fayetteville</option>
                <option>Springdale</option>
                <option>Jonesboro</option>
              </optgroup>
              <optgroup label="California">
                <option>Los Angeles</option>
                <option>San Diego</option>
                <option>San Jose</option>
                <option>San Francisco</option>
                <option>Fresno</option>
              </optgroup>
              <optgroup label="Colorado">
                <option>Denver</option>
                <option>Colorado</option>
                <option>Aurora</option>
                <option>Fort Collins</option>
                <option>Lakewood</option>
              </optgroup>
              <optgroup label="Connecticut">
                <option>Bridgeport</option>
                <option>New Haven</option>
                <option>Hartford</option>
                <option>Stamford</option>
                <option>Waterbury</option>
              </optgroup>
              <optgroup label="Delaware">
                <option>Wilmington</option>
                <option>Dover</option>
                <option>Newark</option>
                <option>Bear</option>
                <option>Middletown</option>
              </optgroup>
              <optgroup label="Florida">
                <option>Jacksonville</option>
                <option>Miami</option>
                <option>Tampa</option>
                <option>St. Petersburg</option>
                <option>Orlando</option>
              </optgroup>
              <optgroup label="Georgia">
                <option>Atlanta</option>
                <option>Augusta</option>
                <option>Columbus</option>
                <option>Savannah</option>
                <option>Athens</option>
              </optgroup>
              <optgroup label="Hawaii">
                <option>Honolulu</option>
                <option>Pearl City</option>
                <option>Hilo</option>
                <option>Kailua</option>
                <option>Waipahu</option>
              </optgroup>
              <optgroup label="Idaho">
                <option>Boise</option>
                <option>Nampa</option>
                <option>Meridian</option>
                <option>Idaho Falls</option>
                <option>Pocatello</option>
              </optgroup>
              <optgroup label="Illinois">
                <option>Chicago</option>
                <option>Aurora</option>
                <option>Rockford</option>
                <option>Joliet</option>
                <option>Naperville</option>
              </optgroup>
              <optgroup label="Indiana">
                <option>Indianapolis</option>
                <option>Fort Wayne</option>
                <option>Evansville</option>
                <option>South Bend</option>
                <option>Hammond</option>
              </optgroup>
              <optgroup label="Iowa">
                <option>Des Moines</option>
                <option>Cedar Rapids</option>
                <option>Davenport</option>
                <option>Sioux City</option>
                <option>Waterloo</option>
              </optgroup>
              <optgroup label="Kansas">
                <option>Wichita</option>
                <option>Overland Park</option>
                <option>Kansas City</option>
                <option>Topeka</option>
                <option>Olathe </option>
              </optgroup>
              <optgroup label="Kentucky">
                <option>Louisville</option>
                <option>Lexington</option>
                <option>Bowling Green</option>
                <option>Owensboro</option>
                <option>Covington</option>
              </optgroup>
              <optgroup label="Louisiana">
                <option>New Orleans</option>
                <option>Baton Rouge</option>
                <option>Shreveport</option>
                <option>Metairie</option>
                <option>Lafayette</option>
              </optgroup>
              <optgroup label="Maine">
                <option>Portland</option>
                <option>Lewiston</option>
                <option>Bangor</option>
                <option>South Portland</option>
                <option>Auburn</option>
              </optgroup>
              <optgroup label="Maryland">
                <option>Baltimore</option>
                <option>Frederick</option>
                <option>Rockville</option>
                <option>Gaithersburg</option>
                <option>Bowie</option>
              </optgroup>
              <optgroup label="Massachusetts">
                <option>Boston</option>
                <option>Worcester</option>
                <option>Springfield</option>
                <option>Lowell</option>
                <option>Cambridge</option>
              </optgroup>
              <optgroup label="Michigan">
                <option>Detroit</option>
                <option>Grand Rapids</option>
                <option>Warren</option>
                <option>Sterling Heights</option>
                <option>Lansing</option>
              </optgroup>
              <optgroup label="Minnesota">
                <option>Minneapolis</option>
                <option>St. Paul</option>
                <option>Rochester</option>
                <option>Duluth</option>
                <option>Bloomington</option>
              </optgroup>
              <optgroup label="Mississippi">
                <option>Jackson</option>
                <option>Gulfport</option>
                <option>Southaven</option>
                <option>Hattiesburg</option>
                <option>Biloxi</option>
              </optgroup>
              <optgroup label="Missouri">
                <option>Kansas City</option>
                <option>St. Louis</option>
                <option>Springfield</option>
                <option>Independence</option>
                <option>Columbia</option>
              </optgroup>
              <optgroup label="Montana">
                <option>Billings</option>
                <option>Missoula</option>
                <option>Great Falls</option>
                <option>Bozeman</option>
                <option>Butte-Silver Bow</option>
              </optgroup>
              <optgroup label="Nebraska">
                <option>Omaha</option>
                <option>Lincoln</option>
                <option>Bellevue</option>
                <option>Grand Island</option>
                <option>Kearney</option>
              </optgroup>
              <optgroup label="Nevada">
                <option>Las Vegas</option>
                <option>Henderson</option>
                <option>North Las Vegas</option>
                <option>Reno</option>
                <option>Sunrise Manor</option>
              </optgroup>
              <optgroup label="New Hampshire">
                <option>Manchesters</option>
                <option>Nashua</option>
                <option>Concord</option>
                <option>Dover</option>
                <option>Rochester</option>
              </optgroup>
              <optgroup label="New Jersey">
                <option>Newark</option>
                <option>Jersey City</option>
                <option>Paterson</option>
                <option>Elizabeth</option>
                <option>Edison</option>
              </optgroup>
              <optgroup label="New Mexico">
                <option>Albuquerque</option>
                <option>Las Cruces</option>
                <option>Rio Rancho</option>
                <option>Santa Fe</option>
                <option>Roswell</option>
              </optgroup>
              <optgroup label="New York">
                <option>New York</option>
                <option>Buffalo</option>
                <option>Rochester</option>
                <option>Yonkers</option>
                <option>Syracuse</option>
              </optgroup>
              <optgroup label="North Carolina">
                <option>Charlotte</option>
                <option>Raleigh</option>
                <option>Greensboro</option>
                <option>Winston-Salem</option>
                <option>Durham</option>
              </optgroup>
              <optgroup label="North Dakota">
                <option>Fargo</option>
                <option>Bismarck</option>
                <option>Grand Forks</option>
                <option>Minot</option>
                <option>West Fargo</option>
              </optgroup>
              <optgroup label="Ohio">
                <option>Columbus</option>
                <option>Cleveland</option>
                <option>Cincinnati</option>
                <option>Toledo</option>
                <option>Akron</option>
              </optgroup>
              <optgroup label="Oklahoma">
                <option>Oklahoma City</option>
                <option>Tulsa</option>
                <option>Norman</option>
                <option>Broken Arrow</option>
                <option>Lawton</option>
              </optgroup>
              <optgroup label="Oregon">
                <option>Portland</option>
                <option>Eugene</option>
                <option>Salem</option>
                <option>Gresham</option>
                <option>Hillsboro</option>
              </optgroup>
              <optgroup label="Pennsylvania">
                <option>Philadelphia</option>
                <option>Pittsburgh</option>
                <option>Allentown</option>
                <option>Erie</option>
                <option>Reading</option>
              </optgroup>
              <optgroup label="Rhode Island">
                <option>Providence</option>
                <option>Warwick</option>
                <option>Cranston</option>
                <option>Pawtucket</option>
                <option>East Providence</option>
              </optgroup>
              <optgroup label="South Carolina">
                <option>Columbia</option>
                <option>Charleston</option>
                <option>North Charleston</option>
                <option>Mount Pleasant</option>
                <option>Rock Hill</option>
              </optgroup>
              <optgroup label="South Dakota">
                <option>Sioux Falls</option>
                <option>Rapid City</option>
                <option>Aberdeen</option>
                <option>Brookings</option>
                <option>Watertown</option>
              </optgroup>
              <optgroup label="Tennessee">
                <option>Memphis</option>
                <option>Nashville</option>
                <option>Knoxville</option>
                <option>Chattanooga</option>
                <option>Clarksville</option>
              </optgroup>
              <optgroup label="Texas">
                <option>Houston</option>
                <option>San Antonio</option>
                <option>Dallas</option>
                <option>Austin</option>
                <option>Fort Worth</option>
              </optgroup>
              <optgroup label="Utah">
                <option>Salt Lake City</option>
                <option>West Valley City</option>
                <option>Provo</option>
                <option>West Jordan</option>
                <option>Orem</option>
              </optgroup>
              <optgroup label="Vermont">
                <option>Burlington</option>
                <option>Essex</option>
                <option>South Burlington</option>
                <option>Colchester</option>
                <option>Rutland</option>
              </optgroup>
              <optgroup label="Virginia">
                <option>Virginia Beach</option>
                <option>Norfolk</option>
                <option>Chesapeake</option>
                <option>Arlington</option>
                <option>Richmond</option>
              </optgroup>
              <optgroup label="Washington">
                <option>Seattle</option>
                <option>Spokane</option>
                <option>Tacoma</option>
                <option>Vancouver</option>
                <option>Bellevue</option>
              </optgroup>
              <optgroup label="West Virginia">
                <option>Charleston</option>
                <option>Huntington</option>
                <option>Parkersburg</option>
                <option>Morgantown</option>
                <option>Wheeling</option>
              </optgroup>
              <optgroup label="Wisconsin">
                <option>Milwaukee</option>
                <option>Madison</option>
                <option>Green Bay</option>
                <option>Kenosha</option>
                <option>Racine</option>
              </optgroup>
              <optgroup label="Wyoming">
                <option>Cheyenne</option>
                <option>Casper</option>
                <option>Laramie</option>
                <option>Gillette</option>
                <option>Rock Springs</option>
              </optgroup>
            </select>
            <div className="clearfix"></div>
          </div>
        </div>
        {/*<!-- //shop locator (popup) -->*/}
      
        {/*<!-- modals -->*/}
        {/*<!-- log in -->*/}
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center">Log In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#" method="post">
                  <div className="form-group">
                    <label className="col-form-label">Username</label>
                    <input type="text" className="form-control" placeholder=" " name="Name" required=""/>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input type="password" className="form-control" placeholder=" " name="Password" required=""/>
                  </div>
                  <div className="right-w3l">
                    <input type="submit" className="form-control" value="Log in"/>
                  </div>
                  <div className="sub-w3l">
                    <div className="custom-control custom-checkbox mr-sm-2">
                      <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                      <label className="custom-control-label" for="customControlAutosizing">Remember me?</label>
                    </div>
                  </div>
                  <p className="text-center dont-do mt-3">Don't have an account?
                    <a href="vl" data-toggle="modal" data-target="#exampleModal2">
                      Register Now</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- register -->*/}
        <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#" method="post">
                  <div className="form-group">
                    <label className="col-form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder=" " name="Name" required="" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email</label>
                    <input type="email" className="form-control" placeholder=" " name="Email" required="" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required="" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required=""/>
                  </div>
                  <div className="right-w3l">
                    <input type="submit" className="form-control" value="Register"/>
                  </div>
                  <div className="sub-w3l">
                    <div className="custom-control custom-checkbox mr-sm-2">
                      <input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
                      <label className="custom-control-label" for="customControlAutosizing2">I Accept to the Terms & Conditions</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- //modal -->*/}
        {/*<!-- //top-header -->*/}
      
        {/*<!-- header-bottom-->*/}
        <div className="header-bot">
          <div className="container">
            <div className="row header-bot_inner_wthreeinfo_header_mid">
              {/*<!-- logo -->*/}
              <div className="col-md-3 logo_agile">
                <h1 className="text-center">
                  <a href="index.html" className="font-weight-bold font-italic">
                    <img src="images/logo2.png" alt=" " className="img-fluid"/>Electro Store
                  </a>
                </h1>
              </div>
              {/*<!-- //logo -->*/}
              {/*<!-- header-bot -->*/}
              <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                <div className="row">
                  {/*<!-- search -->*/}
                  <div className="col-10 agileits_search">
                    <form className="form-inline" action="#" method="post">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required/>
                      <button className="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                  {/*<!-- //search -->*/}
                  {/*<!-- cart details -->*/}
                  <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                      <form action="#" method="post" className="last">
                        <input type="hidden" name="cmd" value="_cart"/>
                        <input type="hidden" name="display" value="1"/>
                        <button className="btn w3view-cart" type="submit" name="submit" value="">
                          <i className="fas fa-cart-arrow-down"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/*<!-- //cart details -->*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- shop locator (popup) -->*/}
        {/*<!-- //header-bottom -->*/}
        {/*<!-- navigation -->*/}
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
                    <a className="nav-link" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="vl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Electronics
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">Mobiles, Computers</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">All Mobile Phones</a>
                              </li>
                              <li>
                                <a href="product.html">All Mobile Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Cases & Covers</a>
                              </li>
                              <li>
                                <a href="product.html">Screen Protectors</a>
                              </li>
                              <li>
                                <a href="product.html">Power Banks</a>
                              </li>
                              <li>
                                <a href="product.html">All Certified Refurbished</a>
                              </li>
                              <li>
                                <a href="product.html">Tablets</a>
                              </li>
                              <li>
                                <a href="product.html">Wearable Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Smart Home</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">Laptops</a>
                              </li>
                              <li>
                                <a href="product.html">Drives & Storage</a>
                              </li>
                              <li>
                                <a href="product.html">Printers & Ink</a>
                              </li>
                              <li>
                                <a href="product.html">Networking Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Computer Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Game Zone</a>
                              </li>
                              <li>
                                <a href="product.html">Software</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="vl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Appliances
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">TV, Appliances, Electronics</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Televisions</a>
                              </li>
                              <li>
                                <a href="product2.html">Home Entertainment Systems</a>
                              </li>
                              <li>
                                <a href="product2.html">Headphones</a>
                              </li>
                              <li>
                                <a href="product2.html">Speakers</a>
                              </li>
                              <li>
                                <a href="product2.html">MP3, Media Players & Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Audio & Video Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">DSLR Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">Camera Accessories</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Musical Instruments</a>
                              </li>
                              <li>
                                <a href="product2.html">Gaming Consoles</a>
                              </li>
                              <li>
                                <a href="product2.html">All Electronics</a>
                              </li>
                              <li>
                                <a href="product2.html">Air Conditioners</a>
                              </li>
                              <li>
                                <a href="product2.html">Refrigerators</a>
                              </li>
                              <li>
                                <a href="product2.html">Washing Machines</a>
                              </li>
                              <li>
                                <a href="product2.html">Kitchen & Home Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">Heating & Cooling Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">All Appliances</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="about.html">About Us</a>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="product.html">New Arrivals</a>
                  </li>
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
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/*<!-- //navigation -->*/}
      
        {/*<!-- banner -->*/}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          {/*<!-- Indicators-->*/}
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item item1 active">
              <div className="container">
                <div className="w3l-space-banner">
                  <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                    <p>Get flat
                      <span>10%</span> Cashback</p>
                    <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
                      <span>Big</span>
                      Sale
                    </h3>
                    <a className="button2" href="product.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="container">
                <div className="w3l-space-banner">
                  <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                    <p>advanced
                      <span>Wireless</span> earbuds</p>
                    <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Best
                      <span>Headphone</span>
                    </h3>
                    <a className="button2" href="product.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item3">
              <div className="container">
                <div className="w3l-space-banner">
                  <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                    <p>Get flat
                      <span>10%</span> Cashback</p>
                    <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
                      <span>Standard</span>
                    </h3>
                    <a className="button2" href="product.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item4">
              <div className="container">
                <div className="w3l-space-banner">
                  <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                    <p>Get Now
                      <span>40%</span> Discount</p>
                    <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
                      <span>Discount</span>
                    </h3>
                    <a className="button2" href="product.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/*<!-- //banner -->*/}
      
        {/*<!-- top Products -->*/}
        <div className="ads-grid py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            {/*<!-- tittle heading -->*/}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>O</span>ur
              <span>N</span>ew
              <span>P</span>roducts</h3>
            {/*<!-- //tittle heading -->*/}
            <div className="row">
              {/*<!-- product left -->*/}
              <div className="agileinfo-ads-display col-lg-9">
                <div className="wrapper">
                  {/*<!-- first section -->*/}
                  <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>
                    <div className="row">
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="images/m1.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">Samsung Galaxy J7</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$200.00</span>
                              <del>$280.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="Samsung Galaxy J7" />
                                  <input type="hidden" name="amount" value="200.00" />
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
                            <img src="images/m2.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
      
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">OPPO A37f</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$230.00</span>
                              <del>$250.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="OPPO A37f" />
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
                            <img src="images/m3.jpg" alt=""/>
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
      
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">Apple iPhone X</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$280.00</span>
                              <del>$300.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value="Apple iPhone X" />
                                  <input type="hidden" name="amount" value="280.00" />
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
                  {/*<!-- //first section -->*/}
                  {/*<!-- second section -->*/}
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
                  {/*<!-- //second section -->*/}
                  {/*<!-- third section -->*/}
                  <div className="product-sec1 product-sec2 px-sm-5 px-3">
                    <div className="row">
                      <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                      <p className="w3l-nut-middle">Get Extra 10% Off</p>
                      <div className="col-md-8 bg-right-nut">
                        <img src="images/image1.png" alt=""/>
                      </div>
                    </div>
                  </div>
                  {/*<!-- //third section -->*/}
                  {/*<!-- fourth section -->*/}
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
                  {/*<!-- //fourth section -->*/}
                </div>
              </div>
              {/*<!-- //product left -->*/}
      
              {/*<!-- product right -->*/}
              <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                <div className="side-bar p-sm-4 p-3">
                  <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                    <form action="#" method="post">
                      <input type="search" placeholder="Product name..." name="search" required=""/>
                      <input type="submit" value=" "/>
                    </form>
                  </div>
                  {/*<!-- price -->*/}
                  <div className="range border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Price</h3>
                    <div className="w3l-range">
                      <ul>
                        <li>
                          <a href="vl">Under $1,000</a>
                        </li>
                        <li className="my-1">
                          <a href="vl">$1,000 - $5,000</a>
                        </li>
                        <li>
                          <a href="vl">$5,000 - $10,000</a>
                        </li>
                        <li className="my-1">
                          <a href="vl">$10,000 - $20,000</a>
                        </li>
                        <li>
                          <a href="vl">$20,000 $30,000</a>
                        </li>
                        <li className="mt-1">
                          <a href="vl">Over $30,000</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*<!-- //price -->*/}
                  {/*<!-- discounts -->*/}
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Discount</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">5% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">10% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">20% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">30% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">50% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">60% or More</span>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- //discounts -->*/}
                  {/*<!-- reviews -->*/}
                  <div className="customer-rev border-bottom left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                    <ul>
                      <li>
                        <a href="vl">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>5.0</span>
                        </a>
                      </li>
                      <li>
                        <a href="vl">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.0</span>
                        </a>
                      </li>
                      <li>
                        <a href="vl">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                          <span>3.5</span>
                        </a>
                      </li>
                      <li>
                        <a href="vl">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>3.0</span>
                        </a>
                      </li>
                      <li>
                        <a href="vl">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                          <span>2.5</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- //reviews -->*/}
                  {/*<!-- electronics -->*/}
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Electronics</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Cameras & Photography</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Car & Vehicle Electronics</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Computers & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">GPS & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Headphones</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Home Audio</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Home Theater, TV & Video</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Mobiles & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Portable Media Players</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Tablets</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Telephones & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Wearable Technology</span>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- //electronics -->*/}
                  {/*<!-- delivery -->*/}
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Eligible for Cash On Delivery</span>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- //delivery -->*/}
                  {/*<!-- arrivals -->*/}
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Last 30 days</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Last 90 days</span>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- //arrivals -->*/}
                  {/*<!-- best seller -->*/}
                  <div className="f-grid py-2">
                    <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                    <div className="box-scroll">
                      <div className="scroll">
                        <div className="row">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img src="images/k1.jpg" alt="" className="img-fluid"/>
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <a href="">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                            <a href="" className="price-mar mt-2">$12,990.00</a>
                          </div>
                        </div>
                        <div className="row my-4">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img src="images/k2.jpg" alt="" className="img-fluid"/>
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <a href="">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                            <a href="" className="price-mar mt-2">$12,499.00</a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img src="images/k3.jpg" alt="" className="img-fluid"/>
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <a href="">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                            <a href="" className="price-mar mt-2">$1,199.00 </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- //best seller -->*/}
                </div>
                {/*<!-- //product right -->*/}
              </div>
            </div>
          </div>
        </div>
        {/*<!-- //top products -->*/}
      
        {/*<!-- middle section -->*/}
        <div className="join-w3l1 py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="join-agile text-left p-4">
                  <div className="row">
                    <div className="col-sm-7 offer-name">
                      <h6>Smooth, Rich & Loud Audio</h6>
                      <h4 className="mt-2 mb-3">Branded Headphones</h4>
                      <p>Sale up to 25% off all in store</p>
                    </div>
                    <div className="col-sm-5 offerimg-w3l">
                      <img src="images/off1.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="join-agile text-left p-4">
                  <div className="row ">
                    <div className="col-sm-7 offer-name">
                      <h6>A Bigger Phone</h6>
                      <h4 className="mt-2 mb-3">Smart Phones 5</h4>
                      <p>Free shipping order over $100</p>
                    </div>
                    <div className="col-sm-5 offerimg-w3l">
                      <img src="images/off2.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- middle section -->*/}
      
        {/*<!-- footer -->*/}
        <footer>
          <div className="footer-top-first">
            <div className="container py-md-5 py-sm-4 py-3">
              {/*<!-- footer first section -->*/}
              <h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
              <p className="footer-main mb-4">
                If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to
                find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets
                and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
              {/*<!-- //footer first section -->*/}
              {/*<!-- footer second section -->*/}
              <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
                <div className="col-md-4 offer-footer">
                  <div className="row">
                    <div className="col-4 icon-fot">
                      <i className="fas fa-dolly"></i>
                    </div>
                    <div className="col-8 text-form-footer">
                      <h3>Free Shipping</h3>
                      <p>on orders over $100</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 offer-footer my-md-0 my-4">
                  <div className="row">
                    <div className="col-4 icon-fot">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className="col-8 text-form-footer">
                      <h3>Fast Delivery</h3>
                      <p>World Wide</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 offer-footer">
                  <div className="row">
                    <div className="col-4 icon-fot">
                      <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className="col-8 text-form-footer">
                      <h3>Big Choice</h3>
                      <p>of Products</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- //footer second section -->*/}
            </div>
          </div>
          {/*<!-- footer third section -->*/}
          <div className="w3l-middlefooter-sec">
            <div className="container py-md-5 py-sm-4 py-3">
              <div className="row footer-info w3-agileits-info">
                {/*<!-- footer categories -->*/}
                <div className="col-md-3 col-sm-6 footer-grids">
                  <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                  <ul>
                    <li className="mb-3">
                      <a href="product.html">Mobiles </a>
                    </li>
                    <li className="mb-3">
                      <a href="product.html">Computers</a>
                    </li>
                    <li className="mb-3">
                      <a href="product.html">TV, Audio</a>
                    </li>
                    <li className="mb-3">
                      <a href="product2.html">Smartphones</a>
                    </li>
                    <li className="mb-3">
                      <a href="product.html">Washing Machines</a>
                    </li>
                    <li>
                      <a href="product2.html">Refrigerators</a>
                    </li>
                  </ul>
                </div>
                {/*<!-- //footer categories -->*/}
                {/*<!-- quick links -->*/}
                <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                  <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
                  <ul>
                    <li className="mb-3">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="mb-3">
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li className="mb-3">
                      <a href="help.html">Help</a>
                    </li>
                    <li className="mb-3">
                      <a href="faqs.html">Faqs</a>
                    </li>
                    <li className="mb-3">
                      <a href="terms.html">Terms of use</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                  <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
                  <ul>
                    <li className="mb-3">
                      <i className="fas fa-map-marker"></i> 123 Sebastian, USA.</li>
                    <li className="mb-3">
                      <i className="fas fa-mobile"></i> 333 222 3333 </li>
                    <li className="mb-3">
                      <i className="fas fa-phone"></i> +222 11 4444 </li>
                    <li className="mb-3">
                      <i className="fas fa-envelope-open"></i>
                      <a href="mailto:example@mail.com"> mail 1@example.com</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope-open"></i>
                      <a href="mailto:example@mail.com"> mail 2@example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                  {/*<!-- newsletter -->*/}
                  <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                  <p className="mb-3">Free Delivery on your first order!</p>
                  <form action="#" method="post">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" name="email" required=""/>
                      <input type="submit" value="Go"/>
                    </div>
                  </form>
                  {/*<!-- //newsletter -->*/}
                  {/*<!-- social icons -->*/}
                  <div className="footer-grids  w3l-socialmk mt-3">
                    <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                    <div className="social">
                      <ul>
                        <li>
                          <a className="icon fb" href="vl">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a className="icon tw" href="vl">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="icon gp" href="vl">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*<!-- //social icons -->*/}
                </div>
              </div>
              {/*<!-- //quick links -->*/}
            </div>
          </div>
          {/*<!-- //footer third section -->*/}
      
          {/*<!-- footer fourth section -->*/}
          <div className="agile-sometext py-md-5 py-sm-4 py-3">
            <div className="container">
              {/*<!-- brands -->*/}
              <div className="sub-some">
                <h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Android Phones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Smartphones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Feature Phones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Unboxed Phones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Refurbished Phones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2"> Tablets</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">CDMA Phones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Value Added Services</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Sell Old</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Used Mobiles</a>
                  </li>
                </ul>
              </div>
              <div className="sub-some mt-4">
                <h5 className="font-weight-bold mb-2">Computers :</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Laptops </a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Printers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Routers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Ink & Toner Cartridges</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Monitors</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Video Games</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Unboxed & Refurbished Laptops</a>
                  </li>
                  <li>
                    <a href="product.html" className="border-right pr-2">Assembled Desktops</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Data Cards</a>
                  </li>
                </ul>
              </div>
              <div className="sub-some mt-4">
                <h5 className="font-weight-bold mb-2">TV, Audio & Large Appliances :</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">TVs & DTH</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Home Theatre Systems</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Hidden Cameras & CCTVs</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Refrigerators</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Washing Machines</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2"> Air Conditioners</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Cameras</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Speakers</a>
                  </li>
                </ul>
              </div>
              <div className="sub-some mt-4">
                <h5 className="font-weight-bold mb-2">Mobile & Laptop Accessories :</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Headphones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Power Banks </a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Backpacks</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Mobile Cases & Covers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Pen Drives</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">External Hard Disks</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2"> Mouse</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Smart Watches & Fitness Bands</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">MicroSD Cards</a>
                  </li>
                </ul>
              </div>
              <div className="sub-some mt-4">
                <h5 className="font-weight-bold mb-2">Appliances :</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Trimmers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Hair Dryers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Emergency Lights</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Water Purifiers </a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Electric Kettles</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Hair Straighteners</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Induction Cooktops</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Sewing Machines</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2"> Geysers</a>
                  </li>
                </ul>
              </div>
              <div className="sub-some mt-4">
                <h5 className="font-weight-bold mb-2">Popular on Electro Store</h5>
                <ul>
                  <li className="m-sm-1">
                    <a href="product.html" className="border-right pr-2">Offers & Coupons</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Couple Watches</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Gas Stoves</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2"> Air Coolers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Air Purifiers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Headphones</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2"> Headsets</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Pressure Cookers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Air Friers</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Irons</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">LED TV</a>
                  </li>
                  <li className="m-sm-1">
                    <a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
                  </li>
                </ul>
              </div>
              {/*<!-- //brands -->*/}
              {/*<!-- payment -->*/}
              <div className="sub-some child-momu mt-4">
                <h5 className="font-weight-bold mb-3">Payment Method</h5>
                <ul>
                  <li>
                    <img src="images/pay2.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay5.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay1.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay4.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay6.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay3.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay7.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay8.png" alt=""/>
                  </li>
                  <li>
                    <img src="images/pay9.png" alt=""/>
                  </li>
                </ul>
              </div>
              {/*<!-- //payment -->*/}
            </div>
          </div>
          {/*<!-- //footer fourth section (text) -->*/}
        </footer>
        {/*<!-- //footer -->*/}
        {/*<!-- copyright -->*/}
        <div className="copy-right py-3">
          <div className="container">
            <p className="text-center text-white">© 2018 Electro Store. All rights reserved | Design by
              <a href="http://w3layouts.com"> W3layouts.</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
