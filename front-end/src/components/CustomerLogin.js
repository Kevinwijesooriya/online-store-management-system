import React ,{useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import {Button , Col , Form , Row } from "react-bootstrap";
import './login.css';
import {useDispatch, useSelector} from "react-redux";
import Loading from "./loading";
import ErrorMesssage from "./ErrorMessage";
import { login } from "../actions/Cusations";



 const CustomerLogin = ({history}) => {
 

const  [username , setusername] = useState("");
const  [password, setpassword] = useState("");
const  [message,setMessage] = useState(null);


const dispatch = useDispatch();

const cusLogin = useSelector ((state)=> state.cusLogin)
const {loading , error , userInfo}  = cusLogin;

useEffect(()=>{

  if (userInfo){
    history.push("/AdminMain");
     
  }

},[history , userInfo]);

const submitHanler = async (e) => {
  
  e.preventDefault();
  dispatch(login(username,password));
  

};



    return (


      
        <div className="loginContainer">


  
  <center>
  <h1>Customer login</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU" width="200" height="200" />
    </center>
   

    {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
    {error && <ErrorMesssage variant="warning">{error}</ErrorMesssage>}  
    {loading && <Loading/>}   
     

  <Form onSubmit= {submitHanler} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User nmae</Form.Label>
    <Form.Control type="text" 
    value = {username}
    placeholder="Enter your username"
    onChange = {(e)=>
   
      setusername(e.target.value)

    }

    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
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


  <Button variant="primary" type="submit">
    Submit
  </Button>

  </center>
</Form>

        </div>
    )
    
    }
    export default CustomerLogin
    