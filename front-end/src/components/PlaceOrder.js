import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import "./OrderStyles.css";
import axios from "axios";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import OrderItem from "./OrderItem";

export default function PlaceOrder() {
  let history = useHistory();
  
  const cart = useSelector((state) => state.cart);
  const customerID = useSelector((state) => state.cusLogin.userInfo.name);
  const key = useSelector(state => state.cart.cartItems.map(ele => ele.name))
  const { cartItems } = cart;
  const itemName = useSelector(state => state.cart.cartItems[0].name);

  const [bankName, setBankName] = useState("");
  // const [amount, setAmount] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [phone, setPhone] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [qty, setQty] = useState("");
  // const [itemPrice, setItemPrice] = useState("");
  const [courierService, setCourierService] = useState("");
  const [address, setAddress] = useState("");
  const [orderStatus, setOrderStatus] = useState("Not Confirmed");
  const [deliveries, setDeliveries] = useState([]);
  const [couriers, setCouriers] = useState([]);

  const itemPrice = cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  const qty = cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);

  function sendData(e) {
    e.preventDefault();
    setOrderStatus("Not Confirmed");
    const order = {
      username : customerID,
      bankName,
      amount :itemPrice,
      orderDate,
      phone,
      itemName,
      qty,
      itemPrice,
      courierService,
      address,
      orderStatus,
    }

    axios.post('http://localhost:5000/order/add', order)
      .then(()=>{
        alert("Successfully Placed the order!")
        window.location = '/order/';
        })
      .catch(err => { alert(err) });
  }
  useEffect(() => {
      axios.get('http://localhost:5000/delivery/')
        .then(response => {
          if (response.data.length > 0) {
            setDeliveries(response.data.map(delivery => delivery.address))
            setAddress(response.data[0].address)
          }
        })
        .catch((error) => {
          console.log(error);
        })

      axios.get('http://localhost:5000/courier/')
      .then(response => {
        if (response.data.length > 0) {
          setCouriers(response.data.map(courier => courier.name))
          setCourierService(response.data[0].name)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [] );

  return (
  
  // <div className="App" >
  //   <div className="content">

      <div className="container">
        <h3>Place Order</h3>
        <form onSubmit={sendData}>

          <div className="form-group">
            <label>Bank Name: </label>
            <input type="text"
              required
              className="form-control"
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
            />
          </div>
          <div className="form-group"><br />
            <label>Amount: </label>
            <input
              type="text"
              className="form-control"
              value={itemPrice}
              // onChange={(e) => {
              //   setAmount(e.target.value);
              // }}
            />
          </div>
          <div className="form-group"><br />
            <label>Order Date: </label>
            <div>
            <input
                type="date"
                className="form-control"
                value={orderDate}
                onChange={(e) => {
                  setOrderDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group"><br />
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-group"><br />
            <label>Item Name: </label>
            {cartItems.map((item) => (
              <OrderItem
                key={item.product}
                item={item}                
              />
            ))}
            {/* <input
              type="text"
              className="form-control"
              value={itemName}
              // onChange={(e) => {
              //   setItemName(e.target.value);
              // }}
            /> */}
          </div>
          <div className="form-group"><br />
            <label>Total Qty: </label>
            <input
              type="text"
              className="form-control"
              value={qty}
              // onChange={(e) => {
              //   setQty(e.target.value);
              // }}
            />
          </div>
          <div className="form-group"><br />
            <label>Total Price: </label>
            <input
              type="text"
              className="form-control"
              value={itemPrice}
              // onChange={(e) => {
              //   setItemPrice(e.target.value);
              // }}
            />
          </div>
          <div className="form-group"><br />
                <label>Courier Service: </label>
                <select
                  required
                  className="form-control"
                  value={courierService}
                  onChange={(e) => {
                    setCourierService(e.target.value);
                  }}
                >
                   {
                    couriers.map(function (courier) {
                      return <option
                        key={courier}
                        value={courier}>{courier}
                      </option>;
                    })
                  }
                </select>
              </div>
          <div className="form-group"> <br />
            <label>Address: </label>
            <select
              required
              className="form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            >
              {
                deliveries.map(function (delivery) {
                  return <option
                    key={delivery}
                    value={delivery}>{delivery}
                  </option>;
                })
              }
            </select>
          </div>
          <br />
          <div className="form-group"><center>
            <input type="submit" value="Place Order" className="btn btn-primary" /></center>
          </div>
        </form>
      </div>

  //   {/* </div>
  // </div> */}
  )
}