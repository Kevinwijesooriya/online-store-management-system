import {logout} from "../actions/Cusations";
import { MdDelete } from "react-icons/md"
import React ,{useEffect,useState} from "react"
import axios from 'axios';
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading"; 
import {useDispatch, useSelector} from "react-redux"; 
import { register } from "../actions/Cusations";
import {Link , useHistory} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap"





export default function (){



 


 
  const customerid = useSelector((state) => state.cusLogin.userInfo._id);
 



  
  const [salaryplan, updateSalaryplan] = useState([]);





    const loadsalaryplan = async () => {
      const res = await axios.get
          (`http://localhost:5000/customer/${customerid}`)
      updateSalaryplan(res.data)
  };
  useEffect(() => {
      loadsalaryplan();
  }, []);





  function Delete(id) {
    axios.delete(`http://localhost:5000/customer/${id}`).then((res) => {
        alert("customer Details Delete SuccessFully")  
    }).catch(err => { alert(err) });
}


return (  
  

          <div className="container">
          <center> <h1>My Profile</h1> </center>
            <Row className="container">
              <Col md={6}>
                <Form >
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={salaryplan.name}
                     
                    ></Form.Control>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      value={salaryplan.email}
                     
                    ></Form.Control>
                  </Form.Group>


                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={salaryplan.phone}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      value={salaryplan.gender}
                    ></Form.Control>
                  </Form.Group>
                   <br></br>
 
  
  

    <Form.Group controlId="loginType">
                    <Form.Label>Login-Type</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={salaryplan.loginType}
                    ></Form.Control>
                  </Form.Group>

                


                
                  <br></br>
                  <br></br>
          

                  <Link className="btn btn-success" to={"/UpdateProfile/" + customerid}>Edit</Link> &nbsp;
                  <a href="/" className="btn btn-danger" onClick={() => Delete(customerid)} >
                                        <MdDelete />Delete
                                    </a>


                 
                </Form>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                <img src={salaryplan.pic} alt={salaryplan.name}   className="profilePic" />
              </Col>
            </Row>
          </div>
       
      );
    };