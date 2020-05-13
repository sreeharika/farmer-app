import { myFirebase, firebaseConfig } from "../firebase/firebase";
import axios from 'axios';
import Addproduct from "../components/Addproduct";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

const requestProduct = () => {
  return {
    type: PRODUCT_REQUEST
  }
}

const addProduct = infolist => {
  return {
    type: ADD_PRODUCT,
    productinfo: infolist
  }
}

const infolistError = () => {
  return {
    type: PRODUCT_FAILURE
  }
}

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  
  const user =  {
    "email": email,
     "password": password,
     "returnSecureToken": true
   }

  axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${firebaseConfig.apiKey}`, user )
  .then(user => {
    console.log("user logged in")
    console.log(user);
    console.log(user.data);
    dispatch(receiveLogin(user));
  }).catch(err =>{
    dispatch(loginError());
  })
};

export const productinfo = (product) => dispatch => {
  // dispatch(requestProduct());
  
  const infolist = {
    "id": product.id,
    "name": product.name,
    "croptype": product.croptype,
    "weight": product.weight,
    "price": product.price,
    "selectlocation": product.selectlocation,
    "files": product.files,
    "startDate": product.startDate,
  }
  dispatch(addProduct(infolist));
}

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
