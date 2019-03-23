import {
    createBrowserHistory
} from 'history';
import {
    decode
} from 'jsonwebtoken';

import $ from 'jquery';

export const history = createBrowserHistory({});

export const authHeader = () => {
    var token = localStorage.getItem("token");
    if (token) {
        token = JSON.parse(token);
        if (Date.now() > decode(token).exp)
            return token;
        else
            localStorage.removeItem("token");
            return null
    }
    return null;
}

export const getPayLoadFromToken = (token)=>{
    return decode(token);
}

export const openCart = () => {
    document.getElementsByClassName('cart-list')[0].classList.toggle("active");
}

export const closeCart = () => {
    document.getElementsByClassName('cart-list')[0].classList.remove("active");
}

export const topTop = (offset)=>{
    $('html,body').animate({scrollTop: offset});
}

export const calculateReviewScore = (reviewsList)=>{
    var reviews= [...reviewsList];
    var sum = 0;
    if (reviewsList.length>0){
        for (let review of reviews){
            sum+=review.reviewScore;
        }
        return Math.round((sum/reviews.length)*2)/2;
    }
    return 0;
}

export const isAdmin = (roles)=>{
    for (let role of roles){
      if (role.roleId===2){
        return true;
      }
    }
    return false;
  }

export const changeTabs = (key)=>{

}

export const formatDate = (date)=>{
    var year = ''+date.getFullYear();
    var month = ''+(date.getMonth()+1);
    var day = ''+date.getDate();
    if (month.length<2){
        month = '0'+month;
    }
    if (day.length<2){
        day = '0'+day;
    }
    return year+'-'+month+'-'+day;
}

export const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  export const getRandomKey = ()=>{
      return Math.random()*Math.random()+Math.random()*Math.random()/Math.random()*Math.random();
  }