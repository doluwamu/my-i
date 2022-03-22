import {
  GET_PACKAGE_FAIL,
  GET_PACKAGE_REQUEST,
  GET_PACKAGE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_VERIFY_FAIL,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userRegInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userVerificationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_VERIFY_REQUEST:
      return { loading: true };
    case USER_VERIFY_SUCCESS:
      return { loading: false, success: true, verification: action.payload };
    case USER_VERIFY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const packagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PACKAGE_REQUEST:
      return { loading: true };
    case GET_PACKAGE_SUCCESS:
      return { loading: false, packageDetails: action.payload };
    case GET_PACKAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
