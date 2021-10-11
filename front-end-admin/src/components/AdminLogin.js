
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Button, Col, Form, Row } from "react-bootstrap";
// import './login.css';
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import ErrorMesssage from "./ErrorMessage";
import { login } from "../actions/adminaction";

const AdminLogin = ({ history }) => {

  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin)
  const { loading, error, userInfo } = adminLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/admin/dashboard");
    }
  }, [history, userInfo]);

  const submitHanler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  ADMIN LOGIN
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <center>
              <img
                      alt="..."
                      className="w-6/12 sm:w-4/12 px-4"
                      src={require("assets/img/loginAvatar.svg").default}
                    />
                    </center>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>We'll never share your information with anyone.</small>
                  </div>

              {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
              {error && <ErrorMesssage variant="warning">{error}</ErrorMesssage>}
              {loading && <Loading />}
              <br></br>
            

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

              <Form onSubmit={submitHanler} >
                <Form.Group className="relative w-full mb-3" controlId="formBasicEmail">
                  <Form.Label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password" >E-mail</Form.Label>
                  <Form.Control type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={email}
                    placeholder="Enter your username"
                    onChange={(e) =>
                      setmail(e.target.value)
                    }

                  />
                  
                </Form.Group>
                <Form.Group className="relative w-full mb-3" controlId="formBasicPassword">
                  <Form.Label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">Password</Form.Label>
                  <Form.Control type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) =>
                      setpassword(e.target.value)
                    }
                  />
                </Form.Group>
                <div className="text-center mt-6">
                  <Button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )

}
export default AdminLogin
