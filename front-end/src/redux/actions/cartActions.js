import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/item/get/${id}`);

    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: {
            productID: data._id,
            productname: data.itemname,
            productcategory: data.itemcategory,
            productbrand: data.itembrand,
            productcolor: data.itemcolor,
            price: data.itemprice,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};