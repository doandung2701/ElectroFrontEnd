
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { changeAva, getPersonalInfo, changeUserInfoInput, editUserInfo } from '../UserAction';
import { authHeader } from '../../../helpers/helper';
import EditProfile from './EditProfile';

var mapStateToProps = state =>{
    return{
        userTask: state.userTask,
        authentication: state.authentication
    }
}

var mapDispatchToProps = dispatch =>{
    return {
       changeAva : (data)=>{
           dispatch(changeAva(data,authHeader()))
       },
       getInfo: ()=>{
           dispatch(getPersonalInfo(authHeader()))
       },
       handleInputChange: (name,value)=>{
           dispatch(changeUserInfoInput(name,value))
       },
       editInfo: (data)=>{
           dispatch(editUserInfo(data,authHeader()))
       }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));