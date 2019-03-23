import React from 'react';
import ProductItem from './ProductItem';
import Pagination from 'react-js-pagination';
import { history, topTop } from '../../../../helpers/helper';

class FirstTopProductSection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }

    getPagable = (location)=>{
        var pageable = null;
        if (location.pathname === "/") {
            topTop(900);
            pageable = {
                page: 1,
                rows: 3,
                order: 'importDate',
                direction: 'desc'
            }
            this.props.getProductsCount();
            this.props.getProducts(pageable);
        }else if(location.pathname.indexOf("/brands")>0){
            topTop(750);
            pageable={
                page: 1,
                rows: 9,
                order: 'productId',
                direction: 'asc'
            }
            console.log(location.state.brandId)
            this.props.getProductsCountByBrand(location.state.brandId);
            this.props.getProductsByBrand(location.state.brandId,pageable);

        } else if(location.pathname.indexOf("/categories")>0){
            topTop(750);
            pageable={
                page: 1,
                rows: 9,
                order: 'productId',
                direction: 'asc'
            }
            console.log(location.state.categoryId)
            this.props.getProductsCountByCategory(location.state.categoryId);
            this.props.getProductsByCategory(location.state.categoryId,pageable);

        } 
        else if(location.pathname.indexOf("/all-products")>0){
            topTop(750);
            pageable = {
                page: 1,
                rows: 9,
                order: 'productId',
                direction: 'asc'
            };
            this.props.getProductsCount();
            this.props.getProducts(pageable);
        }
    }

    componentDidMount() {
        this.getPagable(this.props.location);
        history.listen((location) => {
            this.getPagable(location);           
        })
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        });
        var pageable = {
            page: pageNumber,
            rows: 9,
            order: 'productId',
            direction: 'asc'
        }
        this.props.getProducts(pageable);
        topTop(800);
    }

    
    render(){
        return(
            <div 
            className="product-sec1 px-sm-4 px-3 py-sm-5 py-3 mb-4">
            <h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>
            <div className="row" >
                {!this.props.products.isFetching?
                    this.props.products.products.length>0?this.props.products.products.map((value)=>{
                    return (
                        <ProductItem
                        product = {value} key={value.productId} />
                    )
                }):<div>No data</div>:<div style={{marginLeft: '35%'}}>
                    <img src="/images/loading1.gif" alt="Loading..."/>
                </div>}
                {
                    this.props.products.error?<h4 style={{textAlign: 'center'}}>
                    Can't get products list because of an undefined network error</h4>:''
                }
            </div>
            {this.props.location.pathname==='/'||this.props.products.products.length===0?'':
            <div className="custom-pagination" id="c-pagin">
            <Pagination 
                activePage={this.state.activePage}
                itemsCountPerPage={9}
                totalItemsCount={this.props.itemCount.itemCount}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                />
        </div>}
          </div>
        )
    }
}

export default FirstTopProductSection;