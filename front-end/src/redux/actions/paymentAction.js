// import * as actionTypes from "../constants/cartConstants";
// import axios from "axios";

// export const addToPayment = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`http://localhost:5000/productCart/${id}`);

//   dispatch({
//     type: actionTypes.ADD_TO_CART,
//     payload: {
//       product: data._id,
//       name: data.itemname,
//       imageUrl: data.itemimage,
//       price: data.itemprice,
//       countInStock: data.itemqty,
//       qty,
//     },
//   });

//   localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
// };

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: actionTypes.REMOVE_FROM_CART,
//     payload: id,
//   });

//   localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
// };