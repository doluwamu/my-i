import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userVerificationReducer,
  packagesReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  login: userLoginReducer,
  register: userRegisterReducer,
  verify: userVerificationReducer,
  packageDetails: packagesReducer,
});

const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null;

const userRegInfoFromStorage = sessionStorage.getItem("userRegInfo")
  ? JSON.parse(sessionStorage.getItem("userRegInfo"))
  : null;

const initialState = {
  login: { userInfo: userInfoFromStorage },
  register: { userRegInfo: userRegInfoFromStorage },
};

const middleware = [thunk];

// const composedEnhancers = compose(
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
