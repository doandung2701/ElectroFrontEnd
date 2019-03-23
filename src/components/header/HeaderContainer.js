
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import { userLogout } from '../login/LoginAction';

var mapStateToProps = state =>{
    return{
        isLoggedIn: state.authentication.isLoggedIn,
        username: state.authentication.username
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        logout: ()=>{
            dispatch(userLogout());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));