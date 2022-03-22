import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_VERIFY_FAIL,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  GET_PACKAGE_FAIL,
  GET_PACKAGE_REQUEST,
  GET_PACKAGE_SUCCESS,
} from "../redux/constants/userConstants";
// import { API_URL } from "./axiosConfig";

axios.defaults.withCredentials = true;

// const instance = axios.create({
//   baseURL:
//     "http://couriax-saas-api.eba-huvccy4z.us-east-1.elasticbeanstalk.com/api/v1",
// });

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    

    const { data } = await axios.post(
      `/api/v1/auth/login/`,
      { email, password },
      config
    );

    

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const register =
  (
    first_name,
    last_name,
    business_name,
    package_name,
    phone,
    email,
    password
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/v1/auth/register/`,
        {
          first_name,
          last_name,
          business_name,
          package_name,
          phone,
          email,
          password,
        },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userRegInfo", JSON.stringify(data));
    } catch (error) {
      
      console.log(error.response.data);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: "Something went wrong",
      });
    }
  };

export const verifyUser = (otp, email) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_VERIFY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/auth/verify/`,
      { otp, email },
      config
    );

    dispatch({
      type: USER_VERIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_VERIFY_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const getPackages = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PACKAGE_REQUEST,
    });
    

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/v1/package/`, config);

    console.log(data);

    dispatch({
      type: GET_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PACKAGE_FAIL,
      payload: "Something went wrong",
    });
  }
};
