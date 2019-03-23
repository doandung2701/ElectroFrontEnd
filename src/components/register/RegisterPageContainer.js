
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { userSignUp } from './RegsiterAction';
import RegisterPage from './Register';

var mapStateToProps = state =>{
    return{
        isRegistering: state.registerInfo.isRegistering
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        signUp: (user)=>{
            dispatch(userSignUp(user))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RegisterPage));