import React from 'react';
import {Link} from 'react-router-dom';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';

class SelectCategory extends React.Component{

    constructor(props){
        super(props);
        this.props.getAllCategories();
    }


    render(){
        return(
            <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                  {/* <a className="nav-link dropdown-toggle" href="vl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Brands
                  </a>
                  <div className="dropdown-menu">
                    <div className="agile_inner_drop_nav_info p-4">
                      <h5 className="mb-3">All Brands</h5>
                      <div className="row">
                        <div className="col-sm-6 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            {this.props.brands.brands.map(value=>(
                               <li key={value.brandId}><Link to={{pathname: `/products/brands/${value.brandId}`,state:{brandId: value.brandId}}}>
                                        {value.brandName}
                                </Link></li> 
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <Dropdown bsPrefix="c-dropdown" >
                        <DropdownToggle id="dropdown-basic-button"
                        style={{backgroundColor: 'white',color: 'black',border: 'none',
                        marginTop: 1}} >
                            Category
                         </DropdownToggle>
                         <DropdownMenu>
                           {console.log(this.props.categories.categories)}
                         {this.props.categories.categories.map(value=>(
                               <Dropdown.Item as="span" key={value.categoryId}><Link to={{pathname: `/products/categories/${value.categoryId}`,state:{categoryId: value.categoryId}}}>
                                        {value.categoryName}
                                </Link></Dropdown.Item> 
                            ))}
                          </DropdownMenu>
                    </Dropdown>
                </li>
        )
    }
}

export default SelectCategory;