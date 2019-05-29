import React from 'react';
import './registerpage.css';
import {Link} from 'react-router-dom';
import { topTop} from '../../helpers/helper';
import { message } from 'antd';

class RegisterPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            username:'',
            password: ''
        }
    }


    showErrorInputMsg = ()=>{
        
        if (this.state.firstName.length<1){
            message.error("Please enter your first name",3)
        }
        if (this.state.lastName.length<1){
            message.error("Please enter your last name",3.1)
        }
        if (this.state.username.length<1||this.state.username.length>15){
            message.error("Username must be between 1 and 15 characters",3.2)
        }
        if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )){
            message.error("Email must be in a correct form",3.3)
        }
        if (this.state.password.length<6){
            message.error("Password must be at least 6 characters",3.4)
        }
    }

    checkInputValid = () => {
        if (this.state.firstName.length < 1 || this.state.lastName.length < 1 
            || this.state.password.length < 6 ||
            this.state.username.length < 1 || 
            this.state.username.length > 15||
            !this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            return false;
        }
        return true;
    }
    

    handleInpuChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(){
        if (this.props.isRegistering){
            message.info("Signing up, please wait...",{
                timeout: 500000,
                position: 'top-right',
                effect: 'slide'
            })
        }
    }

    componentDidMount(){
        topTop(220);
    }

    signUp = (e)=>{
        if(this.checkInputValid()){
            this.props.signUp(this.state);
        }
        this.showErrorInputMsg();
        e.preventDefault();
    }

    render(){
        return(
          <div className="regis-page">
            <div className="regis-page-left">
                <p className="regis-page-title">
                    Register
                </p>
                <h1 className="slogan">
                    Create An Account
                </h1>
                <p className="login-regis">
                Do you already have an account? <Link to="/account/login">Login</Link>
                </p>
            </div>
            <div className="regis-page-right">
            <form onSubmit={this.signUp}>
                <label htmlFor="re-fn">First Name: </label>
                <input type="text" id="re-fn" name="firstName" 
                onKeyPress={(e)=>{
                    if (e.key==="Enter") this.signUp(e)
                }}
                    value={this.state.firstName} onChange={this.handleInpuChanges}
                placeholder="First name..."/>
                <label htmlFor="re-ln">Last Name: </label>
                <input type="text" id="re-ln" name="lastName" 
                 onKeyPress={(e)=>{
                    if (e.key==="Enter") this.signUp(e)
                }}
                value={this.state.lastName} onChange={this.handleInpuChanges} 
                placeholder="Last name..."/>
                <label htmlFor="re-un">Username: </label>
                <input type="text" id="re-un" name="username" 
                 onKeyPress={(e)=>{
                    if (e.key==="Enter") this.signUp(e)
                }}
                value={this.state.username} onChange={this.handleInpuChanges}
                placeholder="Username..."/>     
                <label htmlFor="regis-email">Email: </label>
                <input type="text" id="regis-email" name="email" 
                 onKeyPress={(e)=>{
                    if (e.key==="Enter") this.signUp(e)
                }}
                value={this.state.email} onChange={this.handleInpuChanges}
                placeholder="Email..."/>
                <label htmlFor="regis-pass">Password: </label>
                <input type="password" id="regis-pass" name="password" 
                 onKeyPress={(e)=>{
                    if (e.key==="Enter") this.signUp(e)
                }}
                value={this.state.password} 
                onChange={this.handleInpuChanges}placeholder="Password..." />
                <button id="regis-btn" type="submit">Create</button>
            </form>
            </div>
          </div>
        )
    }
}

export default RegisterPage;