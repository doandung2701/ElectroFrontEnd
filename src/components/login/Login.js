import React from 'react';
import './loginpage.css';
import {Link,Redirect} from 'react-router-dom';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            usernameOrEmail: '',
            password: '',
        }
    }

    handleInpuChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    login = ()=>{
        this.props.login(this.state);
    }

    render(){
        console.log(this.props.location);
        var locationState = this.props.location.state;
        if (this.props.isLoggedIn&&!locationState)
         return (
             <Redirect to="/" />
         )
         else if (locationState&&this.props.isLoggedIn){
             return (
            <Redirect to={locationState.from} />)
         }
        return(
          <div className="login-page">
            <div className="login-page-left">
                <p className="login-page-title">
                    Account
                </p>
                <h1 className="slogan">
                    Log in to your account.
                </h1>
                <p className="login-regis">
                Don't have an account? <Link to="regis">Create account  <i className="fas fa-arrow-right mr-2"></i></Link>
                </p>
            </div>
            <div className="login-page-right">
                <label htmlFor="login-email">Email: </label>
                <input type="text" id="login-email"
                onKeyPress={(e)=>{
                    if (e.key==="Enter") this.login()
                }} 
                value = {this.state.usernameOrEmail}
                onChange={this.handleInpuChanges}
                 name="usernameOrEmail" placeholder="Username or email..."/>
                <label htmlFor="login-pass">Password: </label>
                <input type="password" id="login-pass" 
                onKeyPress={(e)=>{
                    if (e.key==="Enter") this.login()
                }} 
                   value = {this.state.password}
                   onChange={this.handleInpuChanges}
                name="password" placeholder="Password..." />
                <p className="fp"><a href="QMK">Forgot your password?</a></p>
                <button id="login-btn" onClick={
                    this.login
                }>Login</button>
               
            </div>
          </div>
        )
    }
}

export default LoginPage;