import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE
} from './ActionTypes';
import { API_BASE_URL } from '@/Api/api';

// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const register = userData => async dispatch => {
  dispatch(registerRequest());
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("registerr success:- ",user)
    dispatch(registerSuccess(user));
  } catch (error) {
    console.log("error ",error)
    dispatch(registerFailure(error.message));
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });
const resetPassword = () => ({ type: RESET_PASSWORD });

export const login = userData => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("login success",user)
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
// Reset Password action creators
const resetPasswordRequest = () => ({ type: RESET_PASSWORD_REQUEST });
const resetPasswordSuccess = () => ({ type: RESET_PASSWORD_SUCCESS });
const resetPasswordFailure = error => ({ type: RESET_PASSWORD_FAILURE, payload: error });

export const reset = userData => async dispatch => {
  dispatch(resetPasswordRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password/reset?email=${userData.email}`);
    console.log("Reset Password", response.data)
    dispatch(resetPasswordSuccess());
  } catch (error) {
    dispatch(resetPasswordFailure(error.message));
  }
};


const updatePasswordRequest = () => ({ type: UPDATE_PASSWORD_REQUEST });
const updatePasswordSuccess = () => ({ type: UPDATE_PASSWORD_SUCCESS });
const updatePasswordFailure = (error) => ({ type: UPDATE_PASSWORD_FAILURE, payload: error });

export const updatePassword = (password, token) => async (dispatch) => {
  dispatch(updatePasswordRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password`, { password, token });
    console.log("Password updated successfully", response.data);
    dispatch(updatePasswordSuccess());
  } catch (error) {
    console.error("Failed to update password", error);
    dispatch(updatePasswordFailure(error.message));
  }
};


//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ",user)
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = () => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };
