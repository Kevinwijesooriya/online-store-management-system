import React ,{useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import {Button , Col , Form , Row } from "react-bootstrap";
// import '../styles/CustomerLogin.css';
import {useDispatch, useSelector} from "react-redux";
import Loading from "./loading";
import ErrorMesssage from "./ErrorMessage";
import { login } from "../actions/Cusations";





 const CustomerLogin = ({history}) => {
 
 
const  [email , setmail] = useState("");
const  [password, setpassword] = useState("");
const  [message,setMessage] = useState(null);


const dispatch = useDispatch();

const cusLogin = useSelector ((state)=> state.cusLogin)
const {loading , error , userInfo}  = cusLogin;

useEffect(()=>{

  if (userInfo){
    history.push("/cart");

     
  }

},[history , userInfo]);

const submitHanler = async (e) => {
  
  e.preventDefault();
  dispatch(login(email,password));


};



    return (

   

<div
         
          style={{
            background:
              "url(https://www.sagatraining.ca/wp-content/uploads/2018/10/background-images-for-login-form-8.jpg)",
              margin: 0,
              padding: 0,

          }}
        >
      
        <div className="login-box">


  

  <h1>login</h1>
  

    {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
    {error && <ErrorMesssage variant="warning">{error}</ErrorMesssage>}  
    {loading && <Loading/>}   
     

  <Form onSubmit= {submitHanler} >
  <Form.Group className="textbox" controlId="formBasicEmail">
  <i class="fas fa-user" aria-hidden="true"></i>
    <Form.Label>User name</Form.Label>
    <Form.Control type="text" 
    value = {email}
    placeholder="Enter your username"
    onChange = {(e)=>
   
      setmail(e.target.value)

    }

    />
    <Form.Text className="text-muted">
   
    </Form.Text>
  </Form.Group>

  <Form.Group className="textbox" controlId="formBasicPassword">
  <i class="fas fa-lock" aria-hidden="true"></i>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
   value = {password}
   placeholder="Enter your password"
   onChange = {(e)=>
  
     setpassword(e.target.value)

   }
    
    />
  </Form.Group>
  
  <center>

  <Row className="py-3">
  <Col>
  New Customer  ? <Link to="/CusRegister">Register here</Link>
  </Col>
</Row>


  <Button className="btn" type="submit">
    Submit
  </Button>

  </center>
</Form>

        </div>
        </div>
    
    )
    
    }
    export default CustomerLogin
    