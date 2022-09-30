import {
    LOGIN_GET_ERROR,
    LOGIN_GET_SUCCESS,
    LOGIN_GET_LOADING,
    LOGOUT_GET,
  } from "./auth.types";
  let token = localStorage.getItem("token") || "";
  let initialstate = {
    loading: false,
    error: false,
    token,
  };
  
  export const authReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case LOGIN_GET_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case LOGIN_GET_SUCCESS: {
        if (payload.token) {
          localStorage.setItem("token", payload.token);
        }
  
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token,
        };
      }
      case LOGIN_GET_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case LOGOUT_GET: {
        localStorage.removeItem("token");
        return {
          ...state,
          loading: false,
          error: false,
          token: "",
        };
      }
      default:
        return state;
    }
  };
  