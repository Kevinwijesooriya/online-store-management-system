import "./CartScreen.css";
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";


// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = ({history}) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.userInfo);
  const customerID = useSelector((state) => state.cusLogin.userInfo.name);
  // const key = useSelector((state) => state.cart.cartItems);
  const key = useSelector(state => state.cart.cartItems.map(ele => ele.name))

  console.log(userInfo);
  const { cartItems } = cart;


  useEffect(() => { }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);

  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const [carts, sendCart] = useState({
    customerID: "",
    productID: [],
    price: "",
    quantity: ""
  });

  const setCart = () =>{
  
    const price = cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
    const quantity = cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    

    sendCart({
      ...carts, customerID: customerID, productID: key, price: price, quantity: quantity,
    });
  }

  const saveCart= (e) => {
    e.preventDefault();   
    setCart();
    axios.post(`http://localhost:5000/cart/add`, carts)
      .then(res => {
        alert("Successfully added cart Details");
        history.push(`/cart/placeorder`);
      })
      .catch(err => { alert(err) });
  }



  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <a href="/cart">Go Back</a>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={e => saveCart(e)}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};



export default CartScreen;