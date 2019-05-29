import React from 'react';
import {Fragment} from 'react';
import Banner2 from '../../banner/Banner2';
import BreadCrumb from '../../common/BreadCrumb';
import './productpage.css';
import { topTop, changeTabs } from '../../../helpers/helper';
import { Divider, Tabs, Icon,Button, Drawer, Skeleton } from 'antd';
import {Button as BButton,ButtonGroup} from 'react-bootstrap';
import ReviewContainer from '../../review/ReviewContainer';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { HOME_TITLE } from '../../../constants/constants';
import CommentListContainer from '../../comment/CommentListContainer';
import { increaseViewCountApi } from '../../../api/ProductsApi';
import ModalGallery from '../../common/ModalGallery';

class ProductPage extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			currentDetails: 0,
			specVisible: false,
			modalVisible: false
		}
		const id = this.props.match.params.id;
		this.props.getSingleProduct(id);
	}

	closeSpec = ()=>{
		this.setState({
			specVisible: false
		})
	}

	showSpec = ()=>{
		this.setState({
			specVisible: true
		})
	}

	componentDidMount(){
		const id = this.props.match.params.id;
		if (this.props.isLoggedIn) {
			this.props.addSeenProduct(id);
		} else {
			this.props.addSeenProductLocal({
				productId: this.props.singleProduct.product.productId,
				productName: this.props.singleProduct.product.productName,
				thumbnail: this.props.singleProduct.product.thumbnail
			});
		}
		var img = document.getElementsByClassName("product-page-img-sm")[0];
		if (img) img.click();
		let sc = document.getElementsByClassName("select-color")[0];
		if (sc)
		sc.getElementsByTagName("button")[0].click();
		topTop(650);
		var history = this.props.history;
		this.listenProductChanged = history.listen((location)=>{
			this.setState({
				currentDetails: 0
			})
			if (location.pathname.startsWith("/products/single")){
			topTop(650);
			const id =location.pathname.slice(location.pathname.lastIndexOf("/")+1,
			location.pathname.length);
			this.props.getSingleProduct(id);
			this.props.getReviewByProductId(id);
			this.props.getCommentsByProductId(id);
			increaseViewCountApi(id);
			if (this.props.isLoggedIn) {
				this.props.addSeenProduct(id);
			} else {
				this.props.addSeenProductLocal({
					productId: this.props.singleProduct.product.productId,
					productName: this.props.singleProduct.product.productName,
					thumbnail: this.props.singleProduct.product.thumbnail
				});
			}
			}
		})
		increaseViewCountApi(id);
	}

	componentWillUnmount(){
		this.listenProductChanged();
		document.title = HOME_TITLE;
	}

	componentDidUpdate(){
		let sc = document.getElementsByClassName("select-color")[0];
		if (sc)
		sc.getElementsByTagName("button")[this.state.currentDetails].click();
	}

	changeDetails = (index)=>{
		this.setState({
			currentDetails: index
		})
		this.toSmImg(0);
		this.changeActiveDetailColor(index);
	}

	changeActiveDetailColor = (index)=>{
		var sc = document.getElementsByClassName("select-color")[0];
		if (sc){
		var buttons = sc.getElementsByTagName("button");
		for (let button of buttons){
			button.classList.remove("active");
			button.disabled = false;
		}
		buttons[index].classList.add("active");
		buttons[index].disabled=true;}
	}

	toSmImg = (index)=>{
		var imgSm = document.getElementsByClassName("product-page-img-sm");
		if (imgSm){
		for (let img of imgSm){
			img.classList.remove("active");
		}
		imgSm[index].classList.add("active");}
	}

	changeImg = (index,src)=>{
		document.getElementById("product-page-img-large").src = src;
		this.toSmImg(index);
	}

	addNewItemToCart = ()=>{
		var product = this.props.singleProduct.product;
		var productDetails = product.productDetails.slice();
		var items = [...this.props.cart.items];
		var currentItem = productDetails[this.state.currentDetails];
		if (items.length>0){
		for (let item of items){
			if (item.prodDetailId===currentItem.prodDetailId) return;
		}}
		this.props.changeCartItemQty({
			prodDetailId: currentItem.prodDetailId,
			currentQty: 0,
			nextQty: 1
		},{
			key: product.productId,
			prodDetailId: currentItem.prodDetailId,
			currentQty: 1,
			name: product.productName,
			color: currentItem.color,
			price: currentItem.price,
			discount: currentItem.discount,
			thumbnail: product.thumbnail,
			discountExDate: currentItem.discountExDate
		})
	}

	openModalGal = ()=>{
		this.setState({
			modalVisible: true
		})
	}

	closeModalGal = ()=>{
		this.setState({
			modalVisible: false
		})
	}


    render(){
		var product = this.props.singleProduct.product;
		document.title = product.productName;
		var loading = this.props.singleProduct.isLoading;
		var productDetails = product.productDetails.slice();
		var isDiscountValid = productDetails[this.state.currentDetails].discount>0
		&&new Date(productDetails[this.state.currentDetails].discountExDate)>Date.now();
        return(
			// <Fragment>	{loading?
			// 	<div style={{marginLeft: '35%'}}>
			// 		<img src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif"
			// 		alt="Loading..."></img>
			// 	</div>:
			<Skeleton active loading={loading}>
				<Fragment>
                <Banner2 />
				<BreadCrumb location={this.props.location} name={product.productName} />
				{this.state.modalVisible&&
				<ModalGallery onClose={this.closeModalGal}
				imgs={productDetails[this.state.currentDetails].productImg}/>}
            <div className="banner-bootom-w3-agileits py-5">
		<div className="container py-xl-4 py-lg-2">
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>S</span>ingle
				<span>P</span>age</h3>
			<div className="row">
			<div  className="col-lg-5 col-md-8 single-right-left">
					<div>
						<img id="product-page-img-large" onClick={this.openModalGal} style={{cursor: 'pointer'}}
						src={productDetails[this.state.currentDetails].productImg[0].imgUrl}
						 height="450px" alt=""/>
					</div>
					<div style={{padding: '20px 20px 20px 130px'}}>
					{productDetails[this.state.currentDetails].productImg.map((value,index)=>(
									<img className="product-page-img-sm" key={value.imgUrl}
									onClick={()=>this.changeImg(index,value.imgUrl)}
									height ="25%" width="25%" 										 
									src={value.imgUrl} alt="">
									</img>
								))}
					</div>
				</div>

				<div className="col-lg-7 single-right-left simpleCart_shelfItem">
					<h3 className="mb-3">{product.productName}</h3>
					<p className="mb-3">
						<span className="item_price">
						{isDiscountValid?
						`$${productDetails[this.state.currentDetails].price-
							productDetails[this.state.currentDetails].price*
							productDetails[this.state.currentDetails].discount/100}`:
							`$${productDetails[this.state.currentDetails].price}`}</span>
						{isDiscountValid?<del className="mx-2 font-weight-light">${productDetails[this.state.currentDetails].price}</del>:''}
						<label>&nbsp; Free delivery</label>
					</p>
					<div className="single-infoagile">
						<ul>
							<li className="mb-3">
								Cash on Delivery Eligible.
							</li>
							<li className="mb-3">
								Shipping Speed to Delivery.
							</li>
							<li className="mb-3">
								EMIs from $655/month.
							</li>
							<li className="mb-3">
								Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C
							</li>
						</ul>
						<div className="select-color">
							<p>Select a color: </p>
							<Button.Group>
								{productDetails.map((value,index)=>(
									<Button key={value.color}
									onClick={()=>this.changeDetails(index)}> 
										{value.color}
									</Button>
								))}
							</Button.Group>
						</div>
					</div>
					<div className="product-single-w3l">
						<p className="my-3">
							<i className="far fa-hand-point-right mr-2"></i>
							<label>1 Year</label>Manufacturer Warranty</p>
						{productDetails[this.state.currentDetails].description}
						<p className="my-sm-4 my-3">
							<i className="fas fa-retweet mr-3"></i>Net banking & Credit/ Debit/ ATM card
						</p>
					</div>
					<div className="occasion-cart">
						<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
							<ButtonGroup>
								<BButton onClick= {this.addNewItemToCart} 
								disabled={this.props.cart.isChanging?true:false}
								style={{width: 105}}
								variant="warning">{this.props.cart.isChanging?
								<img height="30px" width="30px" alt=""
								src="/images/loading_ring_60px.gif"/>:"Add to cart"}
								</BButton>
								<BButton variant="danger" onClick={this.showSpec}>See full specs</BButton>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Drawer title={product.productName+"'s full specifications"}
		onClose={this.closeSpec} visible={this.state.specVisible} width={window.innerWidth<720?'100%':720}
		style={{
            overflow: 'auto',
            height: 'calc(100% - 108px)',
            paddingBottom: '108px',
          }}
		>
			{ReactHtmlParser(product.fullSpec)}
		</Drawer>
		<Divider />
		<Tabs onChange={changeTabs} tabPosition={'left'} 
		defaultActiveKey="rev">
			<Tabs.TabPane key="rev" tab={<p><Icon type="star"></Icon>
			&nbsp;Reviews</p>}>
				<ReviewContainer location={this.props.location} 
				productId ={product.productId}
				id={this.props.match.params.id}/>
			</Tabs.TabPane>
			<Tabs.TabPane key='qa' tab={<p><Icon type="wechat"></Icon>
			&nbsp;Q&A</p>}>
		  		<CommentListContainer location={this.props.location} 
				productId ={this.props.match.params.id}/>
			</Tabs.TabPane>
		</Tabs>
	</div></Fragment>}
	</Skeleton>
        )
    }
}

export default ProductPage;