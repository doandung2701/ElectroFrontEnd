import React from 'react';
import { Drawer } from 'antd';
import './seenproduct.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class SeenProductDrawer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            drawerVisible: false,
            width: $(document).width(),
            page: 1,
        }
        this.show = this.props.seenProducts.seenProducts.slice(0,9);
        if (this.props.authentication.isLoggedIn) {
            this.props.getSeenProducts({
                page: 1,
                rows: 9
            });
            this.props.getSeenProductsCount(this.props.authentication.userId);
        }else{

        }
        // if (localStorage.getItem("seenProducts") === null) {
        //     localStorage.setItem("seenProducts", JSON.stringify([]));
        // }
    }

    componentDidUpdate(prevProps){
        if (prevProps.authentication.isLoggedIn!==this.props.authentication.isLoggedIn){
            this.setState({
                page: 1
            })
        }
    }

    onCloseDrawer = ()=>{
        this.setState({
            drawerVisible: false
        })
    }

    showDrawer = ()=>{
        this.setState({
            drawerVisible: true
        })
    }

    componentDidMount(){
        window.addEventListener("resize",()=>{
            this.setState({
                width: $(document).width()
            })
        })
    }

    handleNextPageChange = ()=>{
        if (this.props.authentication.isLoggedIn) {
            this.props.getSeenProducts({
                page: this.state.page+1,
                rows: 9
            });
        }else{
            if (this.props.seenProducts.count>=(this.state.page+1)*9){
                this.show = this.props.seenProducts.seenProducts.slice((this.state.page)*9,(this.state.page+1)*9)
            }else{
                this.show = this.props.seenProducts.seenProducts.slice((this.state.page)*9,
                this.props.seenProducts.count-1)
            }
        }
        this.setState({
            page: this.state.page+1
        })
    }

    handlePrevPageChange = ()=>{
        if (this.props.authentication.isLoggedIn) {
            this.props.getSeenProducts({
                page: this.state.page-1,
                rows: 9
            });
        }else{
            this.show = this.props.seenProducts.seenProducts.slice((this.state.page-2)*9,(this.state.page-1)*9)
        }
        this.setState({
            page: this.state.page-1
        })
    }

    render(){
        return (
            <li className="nav-item mr-lg-2 mb-lg-0 mb-2 seen-product-drawer">
            <span style={{cursor: 'pointer'}} onClick={this.showDrawer}
            className="nav-link">Seen Products</span>
            <Drawer placement="top" visible={this.state.drawerVisible} style={{overflowY: 'scroll'}}
            className="drawer-seen-product" height={this.state.width<=900?'100%':'300px'}
                title="Products you have seen" onClose={this.onCloseDrawer}>
                {this.state.page>1&&
                <button onClick={this.handlePrevPageChange}
                style={{float: 'left',marginTop: '35px',height: '50px',width: 50,border: 'none',
            backgroundColor: 'inherit',fontSize: 24,outline: 'none',cursor: 'pointer'}}>
                <i className="fas fa-arrow-circle-left"></i></button>}
                {this.state.page!==(parseInt(this.props.seenProducts.count/9)+1)&&
                <button onClick={this.handleNextPageChange}
                style={{float: "right",marginTop: '35px',height: '50px',width: 50,border: 'none',
            backgroundColor: 'inherit',fontSize: 24,outline: 'none',cursor: 'pointer'}}>
                <i className="fas fa-arrow-circle-right"></i></button>}
                {this.props.authentication.isLoggedIn?<div className="image-ctn">
                {this.props.seenProducts.seenProducts.map(value=>(
                    <Link key={value.productId} to={`/products/single/${value.productId}`}>
                    <img src={value.thumbnail} onClick={this.onCloseDrawer}
                    alt={value.productName} title={value.productName} /></Link>)
                )}
                </div>:<div className="image-ctn">
                {this.show.map(value=>(
                    <Link key={value.productId} to={`/products/single/${value.productId}`}>
                    <img src={value.thumbnail} onClick={this.onCloseDrawer}
                    alt={value.productName} title={value.productName} /></Link>)
                )}
                </div>}
            </Drawer>
          </li>
        )
    }
}

export default SeenProductDrawer;