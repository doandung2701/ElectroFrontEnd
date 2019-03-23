import React, { Fragment } from 'react';
import './userpp.css';
import {Link,Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import BreadCrumb from '../common/BreadCrumb';
import EditProfileContainer from './edit_profile/EditProfileContainer';
import MailBox from './maibox/MailBox';
import { topTop } from '../../helpers/helper';

class UserProfilePage extends React.Component{

    componentDidMount(){
        this.props.getInfo();
        document.getElementById("nav-account-info").click();
    }

    componentDidUpdate(){
        topTop(200);

    }

    toggleLinkCtn = (index)=>{
        document.getElementsByClassName("link-ctn")[index].classList.toggle("active");

    }

    toggleActiveNavItem = (index)=>{
        var manageCtn = document.getElementsByClassName("manage-ctn")[0];
        var navItems = manageCtn.getElementsByClassName("nav-item");
        for (let navItem of navItems){
            navItem.classList.remove("active");
        }
        navItems[index].classList.add("active");
    }

    render(){
        var userTask = {...this.props.userTask};
        var user = {...userTask.user};
        return(
            <Fragment>
                <BreadCrumb name={user.firstName+" "+user.lastName+"'s profile"} />
            <div className="user-profile-page">
               <div className="profile-page-nav">
                    <div className="basic-user-info">
                        <img className="user-ava"
                        src={user.avatar} alt=""></img>
                        <p>{user.username}</p>
                        <button onClick={this.toggleManageCtn}><i className="fas fa-bars"></i></button>
                    </div>
                    <div className="manage-ctn">
                    <div className="account-manage">
                        <p className="title" onClick={()=>this.toggleLinkCtn(0)}>Account Management</p>
                        <div className="link-ctn active">
                        <Link to={`/account/my-profile/edit-info`} className="nav-item"
                        onClick={()=>this.toggleActiveNavItem(0)}
                        id="nav-account-info"
                        > <i className="fas fa-pen-square"></i>&nbsp;&nbsp;
                        Account infomation</Link>
                        <Link to="/account/my-profile/abc"
                        onClick={()=>this.toggleActiveNavItem(1)}
                        id = "nav-mb" 
                        className="nav-item"><i className="fas fa-envelope"></i>&nbsp;&nbsp;
                        Mail box</Link>
                        <Link to="/" id = "nav-qa"
                        onClick={()=>this.toggleActiveNavItem(2)}
                        className="nav-item"> <i className="fas fa-comments"></i>&nbsp;&nbsp;
                        Q&A</Link>
                        </div>
                    </div>
                    <div className="transac-manage">
                        <p className="title" onClick={()=>this.toggleLinkCtn(1)}>Transaction Management</p>
                        <div className="link-ctn active">
                        <Link to="/"> <i className="fas fa-file-alt"></i>&nbsp;&nbsp;Orders</Link>
                        <Link to="/"> <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                        Delivery Address</Link>
                        <Link to="/"> <i className="fas fa-heart"></i>&nbsp;&nbsp;
                        Favorite products</Link>
                        </div>
                    </div>
                    </div>
               </div>
               <div className="profile-page-content"> 
               <Switch>
                    <Route path={"/account/my-profile/abc"} exact  component={MailBox} />
                    <Route path={`/account/my-profile/edit-info`} exact component={EditProfileContainer} />
                    </Switch>
               </div>
            </div>
            </Fragment>
        )
    }
}

export default UserProfilePage;


