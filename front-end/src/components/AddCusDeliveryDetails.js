import React, { useState } from "react"
import axios from "axios";
import "./OrderStyles.css";
import { useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

export default function AddCusDeliveryDetails() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [customer_ID, setcustomer_ID] = useState("");
    const [postal_code, setPostalCode] = useState("");
    const [validated, setValidated] = useState(false);
    let history = useHistory();
    const cusID = useSelector((state) => state.cusLogin.userInfo._id);



    function sendData(e) {
        const form = e.currentTarget;

    if (form.checkValidity() === false) {

      e.preventDefault();

      e.stopPropagation();

    }

    else {
        e.preventDefault();


        const newCustomer = {
            name,
            address,
            street,
            city,
            customerID:cusID,
            postal_code
        }

    
        axios.post("http://localhost:5000/delivery/add", newCustomer).then(() => {
            alert("Customer Details Added Successfully")
            history.push("/profile/delivery");
        }).catch((err) => {
            alert(err)
        })
    }

        setValidated(true);

    }


    return (

        <div className="container">
            <div className="oneDetail">
            <Form noValidate validated={validated} onSubmit={sendData}>
             
                <div className="form-group">
                    <label for="name">Customer Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Customer Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }} required/><Form.Control.Feedback type="invalid">



                        Please fill out the field
        
         
        
                      </Form.Control.Feedback>
                </div>

                <div className="form-group">
                    <label for="address">Customer Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Customer Address"
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} required/><Form.Control.Feedback type="invalid">



                        Please fill out the field
        
         
        
                      </Form.Control.Feedback>
                </div>

                <div className="form-group">
                    <label for="street">Customer Street</label>
                    <input type="text" className="form-control" id="street" placeholder="Enter Customer Street"
                        onChange={(e) => {
                            setStreet(e.target.value);
                        }} required/><Form.Control.Feedback type="invalid">



                        Please fill out the field
        
         
        
                      </Form.Control.Feedback>
                </div>

                <div className="form-group">
                    <label for="city">Customer City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter Customer City"
                        onChange={(e) => {
                            setCity(e.target.value);
                        }} required/><Form.Control.Feedback type="invalid">



                        Please fill out the field
        
         
        
                      </Form.Control.Feedback>
                </div>

                <div className="mb-3">
                    <label for="postal_code">Customer Postal Code</label>
                    <input type="number" className="form-control" id="postal_code" min="1" max="1000000" placeholder="Enter Customer Postal Code" 
                        onChange={(e) => {
                            setPostalCode(e.target.value);
                        }} required/><Form.Control.Feedback type="invalid">



                        Please fill out the field
        
         
        
                      </Form.Control.Feedback>
                </div>


                <button type="submit" className="btn btn-primary">Add Delivery Details</button>
            </Form>

            </div>
        </div>


    )
}