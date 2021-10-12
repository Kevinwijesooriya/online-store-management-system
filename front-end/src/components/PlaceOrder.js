import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";
import "./OrderStyles.css";
import axios from "axios";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import OrderItem from "./OrderItem";

export default function PlaceOrder() {
  let history = useHistory();
  
  const cart = useSelector((state) => state.cart);
  const customerID = useSelector((state) => state.cusLogin.userInfo._id);
  const customerName = useSelector((state) => state.cusLogin.userInfo.name);
  const key = useSelector(state => state.cart.cartItems.map(ele => ele.name))
  const { cartItems } = cart;
  const itemName = useSelector(state => state.cart.cartItems[0].name);
  const itemImage = useSelector(state => state.cart.cartItems[0].imageUrl);
  const itemPrice = useSelector(state => state.cart.cartItems[0].price);
  const [bankName, setBankName] = useState("");
  // const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [qty, setQty] = useState("");
  // const [itemPrice, setItemPrice] = useState("");
  const [courierService, setCourierService] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orderStatus, setOrderStatus] = useState("Not Confirmed");
  const [email, setEmail] = useState("");
  const [deliveries, setDeliveries] = useState([]);
  const [couriers, setCouriers] = useState([]);
  const [validated, setValidated] = useState(false);

  const amount = cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  const qty = cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);

  function sendData(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
    e.preventDefault();
    setOrderStatus("Not Confirmed");
    const order = {
      userID : customerID,
      userName : customerName ,
      bankName,
      amount :amount,
      phone,
      itemName,
      email ,
      itemImage : itemImage,
      receiptNumber,
      qty,
      itemPrice : itemPrice ,
      courierService,
      address,
      orderStatus,
    }

    axios.post('http://localhost:5000/order/add', order)
      .then(()=>{
        alert("Successfully Placed the order!")
        window.location = '/profile/orderlist';
        })
      .catch(err => { alert(err) });
      }

      setValidated(true);  
  }



  useEffect(() => {
      axios.get(`http://localhost:5000/delivery/cgot/${customerID}`)
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
      <div className="container">
        <Form noValidate validated={validated} onSubmit={sendData}>
          <div className="needs-validation">
            <center><h3>Place Order</h3></center><br/>
          <table class="table table-striped">
            <tr><td>Bank of Ceylon, Kollupitiya  Branch, Branch Code 034</td><td>1630552</td></tr>
            <tr><td>Sampath Bank, Malabe Branch, Branch Code 039</td><td>003990000033</td></tr>
            <tr><td>Nations Trust Bank, Malabe Branch, Branch Code 038</td><td>100380005000</td></tr>
            <tr><td>Hatton National Bank, Malabe Branch, Branch Code 156</td><td>156010007350</td></tr>
          </table>
          
              <div className="form-group">
                <label>Bank Name: </label><br/>
                <input type="text"
                  required
                  className="form-control"
                  value={bankName}
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                /><Form.Control.Feedback type="invalid">

                Please provide cash deposited Bank Name
  
              </Form.Control.Feedback><br/>
              </div>
              <div className="form-group">
                <label>Receipt Number: </label><br/>
                <input type="text"
                  required
                  className="form-control"
                  value={receiptNumber}
                  onChange={(e) => {
                    setReceiptNumber(e.target.value);
                  }}
                /><Form.Control.Feedback type="invalid">

                Please provide cash deposited Payment Receipt Number
  
              </Form.Control.Feedback>
              </div>
              <div className="form-group"><br />
                <label>Order Overview </label>
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
              {/*<div className="form-group"><br />
                <label>Total Qty: </label>
                <input
                  type="text"
                  className="form-control"
                  value={qty}
                  // onChange={(e) => {
                  //   setQty(e.target.value);
                  // }}
                />
              </div>*/}
              <div className="form-group"><br />
                <label>Total Price: </label>
                <input
                  type="text"
                  className="form-control"
                  value={amount}
                  // onChange={(e) => {
                  //   setItemPrice(e.target.value);
                  // }}
                />
              </div>
              <div className="form-group"><br />
                <label>Phone Number: </label>
                <input
                  required
                  minLength="9"
                  
                  type = "tel"
                  className="form-control"
                  //pattern = "[0-9]{10}  "
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                /><Form.Control.Feedback type="invalid">

                Please enter your phone number
  
              </Form.Control.Feedback>
              </div>
              <div className="form-group"><br />
                <label>Email: </label>
                <input
                  required
                  type = "email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
                /><Form.Control.Feedback type="invalid">

                Please enter your e-mail 
  
              </Form.Control.Feedback>
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
          </div>
        </Form>
      </div>
  )
}