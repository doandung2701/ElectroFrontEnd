
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import { getPersonalInfo } from './UserAction';
import { authHeader } from '../../helpers/helper';


var mapStateToProps = state =>{
    return{
        userTask: state.userTask,
        authentication: state.authentication
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getInfo: ()=>{
            dispatch(getPersonalInfo(authHeader()))
        },
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfilePage));