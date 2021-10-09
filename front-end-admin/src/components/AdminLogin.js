
import React ,{useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import {Button , Col , Form , Row } from "react-bootstrap";
import './login.css';
import {useDispatch, useSelector} from "react-redux";
import Loading from "./loading";
import ErrorMesssage from "./ErrorMessage";
import { login } from "../actions/adminaction";





const AdminLogin = ({history}) => {


  
const  [email , setmail] = useState("");
const  [password, setpassword] = useState("");
const  [message,setMessage] = useState(null);



const dispatch = useDispatch();
 

  const adminLogin = useSelector ((state)=> state.adminLogin)
  const {loading , error , userInfo}  = adminLogin;

useEffect(()=>{

  if (userInfo){
    history.push("/AdminMain");
     
  }

},[history , userInfo]);

const submitHanler = async (e) => {
  
  e.preventDefault();
  dispatch(login(email,password));
  

};




    return (


      
        <div className="loginContainer">


  
  <center>
  <h1>Admin login</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU" width="200" height="200" />
    </center>
   

    {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
    {error && <ErrorMesssage variant="warning">{error}</ErrorMesssage>}  
    {loading && <Loading/>}   
     

  <Form onSubmit= {submitHanler} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="text" 
    value = {email}
    placeholder="Enter your username"
    onChange = {(e)=>
   
      setmail(e.target.value)

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
  <Button variant="primary" type="submit">
    Submit
  </Button>

  </center>
</Form>

        </div>
    )
    
    }
    export default AdminLogin
    