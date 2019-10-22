import axios from "axios";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from "./types";

import { clearErrors, returnErrors } from "./errorActions";

// check token and load user

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const tokenConfig = getState => {
  //   getToken from token storage
  const token = getState.auth.token;
  //   Setting Headers
  const config = {
    headers: {
      "content-type": "application/json"
    }
  };
  //   If token, Add to headers
  if (token) config.headers["x-auth-token"] = token;

  return config;
};

export const registerUser = () => (dispatch, getState) => {};
