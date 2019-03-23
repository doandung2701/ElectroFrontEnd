import React from 'react';
import {connect} from 'react-redux';

 const LoadingScreen = (props)=>(
    <div className="loading-screen" style={{display: props.loadingScreenEnabled?"block":"none"}}>
        {/* <img src="/images/loading1.gif" alt="Loading..."/> */}
    </div>
)

var mapStateToProps = (state)=>{
    return {
        loadingScreenEnabled: state.loadingScreenEnabled
    }
}

export default connect(mapStateToProps,null)(LoadingScreen);