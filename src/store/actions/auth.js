import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
}

export const authSucess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCESS,
    authData: authData
  };
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBcN3QVdOSrVnhb2HQeXe1EJelVkY725IQ', authData)
    .then(response => {
      dispatch(authSucess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(authFail(error));
    })
  }
}