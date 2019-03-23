import React from 'react';
import './Search.css';
import { history } from '../../helpers/helper';

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchTxt: ''
        }
    }

    handleInputChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
        if (value.length > 1) {
            this.props.searchProductsByName(value);
            this.openResultList();
        }
        if (value.length === 0 || value === '') {
            this.props.clearSearch();
            this.closeResultList();
        }
        //console.log(value);
    }

    findMinPrice = (value) => {
        if (typeof value === typeof [])
            return value.reduce((prev, current) => {
                return (prev.price < current.price) ? prev : current
            })
        return 0;
    }

    closeResultList = ()=>{
        document.getElementsByClassName("search-result-modal")[0].classList.remove('active');
    }

    openResultList = ()=>{
        document.getElementsByClassName("search-result-modal")[0].classList.add('active');
    }

    conditionalOpenResultList = ()=>{
        if (this.state.searchTxt.length>=2){
        document.getElementsByClassName("search-result-modal")[0].classList.add('active');
        }
    }

    toProductPage = (path)=>{
        this.closeResultList();
        history.push(path);
    }


    render(){
        var searchProducts = this.props.searchProducts;
        var products = searchProducts.searchProducts.slice();
        return(
            <div className="col-10 agileits_search">
                  <form className="form-inline" action="#" method="post">
                    <input className="form-control mr-sm-2" 
                    id="input-search"
                    name = "searchTxt" value={this.state.searchTxt} 
                    onClick= {this.conditionalOpenResultList}
                    onChange={this.handleInputChange}
                    type="Search" placeholder="Search" aria-label="Search" />
                    <button className="btn my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  <div className='search-result-modal'>
                    <span id="btn-close-search-modal" onClick={this.closeResultList}>
                    <i className="fas fa-times"></i></span>
                    <ul className="search-list">
                        {products.length>0?products.map(value=>(
                            <li onClick={()=>this.toProductPage(`/products/single/${value.productId}`)}
                            key={value.productId}>
                            <img alt = "" height="50px" width="50px" 
                             src={value.thumbnail}></img>
                             <div className="search-item-info">
                                <p className="search-item-name">{value.productName}</p>
                                <p className="search-item-price">
                                From ${this.findMinPrice(value.productDetails).price}</p>
                             </div>
                          </li>
                        )):<p>No product matched.</p>}
                    </ul>
                  </div>
                </div>
        )
    }
}

export default Search;