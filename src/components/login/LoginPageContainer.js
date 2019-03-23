
import {connect} from 'react-redux';
import { userLogin } from './LoginAction';
import {withRouter} from 'react-router-dom';
import LoginPage from './Login';

var mapStateToProps = state =>{
    return{
        isLoggedIn: state.authentication.isLoggedIn
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        login: (user)=>{
            dispatch(userLogin(user))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginPage));