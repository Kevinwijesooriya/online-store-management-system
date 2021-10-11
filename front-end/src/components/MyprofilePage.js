import { logout } from "../actions/Cusations";
import { MdDelete } from "react-icons/md"
import React, { useEffect, useState } from "react"
import axios from 'axios';
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/Cusations";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap"





export default function () {







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

    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >
      <div className="container">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <center> <h1 class="oneDetail">My profile</h1>
            </center>
          </div></div><br />
        <Row className="container">
          <Col md={6}>
            <Form >
              <Form.Group controlId="name">
                <Form.Label class="table table-success table-striped text-secondary">Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={salaryplan.name}

                ></Form.Control><br />

                <Form.Group controlId="email">
                  <Form.Label class="table table-success table-striped text-secondary">Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={salaryplan.email}

                  ></Form.Control>
                </Form.Group>


              </Form.Group><br />
              <Form.Group controlId="phone">
                <Form.Label class="table table-success table-striped text-secondary">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={salaryplan.phone}
                ></Form.Control>
              </Form.Group><br />
              <Form.Group controlId="gender">
                <Form.Label class="table table-success table-striped text-secondary">Gender</Form.Label>
                <Form.Control
                  type="text"
                  value={salaryplan.gender}
                ></Form.Control>
              </Form.Group>
              <br />




              <Form.Group controlId="loginType">
                <Form.Label class="table table-success table-striped text-secondary">Login-Type</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={salaryplan.loginType}
                ></Form.Control>
              </Form.Group>





              <br/>


              <center>
                <Link className="btn btn-success" to={"/UpdateProfile/" + customerid}>Edit</Link> &nbsp;
                <a href="/CusRegister" className="btn btn-danger" onClick={() => Delete(customerid)} >
                  <MdDelete />Delete
                </a></center>



            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

            }}
          >
            <img src={salaryplan.pic} alt={salaryplan.name} className="img-thumbnail" />
          </Col>
        </Row>
      </div>
    </div>
  );
};