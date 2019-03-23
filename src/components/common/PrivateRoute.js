import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({ component: Component,isLoggedIn, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
    )} />
)

var mapStateToProps = (state)=>{
    return{
        isLoggedIn: state.authentication.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps,null)(PrivateRoute));