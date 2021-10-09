import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cusLoginReducer , cusRegisterReducer } from "../reducers/CusReducers";
import {  adminLoginReducer } from "../reducers/adminReducers";



// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';
import { getCartItemsReducer } from './reducers/saveCartReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cusLogin :  cusLoginReducer,
    cusRegister : cusRegisterReducer,
    adminLogin :  adminLoginReducer,
    getCartItems :  getCartItemsReducer,

});


const userInfoFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;




const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {

    cusLogin : {userInfo : userInfoFromStorage} ,
    
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
