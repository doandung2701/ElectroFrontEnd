import React from 'react';
import './registerpage.css';
import {Link} from 'react-router-dom';
import { topTop} from '../../helpers/helper';
import Alert from 'react-s-alert';

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
            Alert.error("Please enter your first name",{
                effect: 'slide',
                timeout: 3000,
                position: 'top-right'
            })
        }
        if (this.state.lastName.length<1){
            Alert.error("Please enter your last name",{
                effect: 'slide',
                timeout: 3100,
                position: 'top-right'
            })
        }
        if (this.state.username.length<1||this.state.username.length>15){
            Alert.error("Username must be between 1 and 15 characters",{
                effect: 'slide',
                timeout: 3200,
                position: 'top-right'
            })
        }
        if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )){
            Alert.error("Email must be in a correct form",{
                effect: 'slide',
                timeout: 3300,
                position: 'top-right'
            })
        }
        if (this.state.password.length<6){
            Alert.error("Password must be at least 6 characters",{
                effect: 'slide',
                timeout: 3300,
                position: 'top-right'
            })
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
            Alert.info("Signing up, please wait...",{
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