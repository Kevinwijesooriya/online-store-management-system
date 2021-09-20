import  {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { cusLoginReducer , cusRegisterReducer } from "./reducers/CusReducers";
import {  adminLoginReducer } from "./reducers/adminReducers";


const reducer = combineReducers({
    cusLogin :  cusLoginReducer,
    cusRegister : cusRegisterReducer,
    adminLogin :  adminLoginReducer,
  


});

const userInfoFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const intialState = {
    cusLogin : {userInfo : userInfoFromStorage} ,
};

const middleware = [thunk] ;

const store = createStore(

    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;
