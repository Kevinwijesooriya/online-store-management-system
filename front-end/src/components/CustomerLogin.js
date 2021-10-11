import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Button, Col, Form, Row } from "react-bootstrap";
// import '../styles/CustomerLogin.css';
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import ErrorMesssage from "./ErrorMessage";
import { login } from "../actions/Cusations";





const CustomerLogin = ({ history }) => {


  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState(null);


  const dispatch = useDispatch();

  const cusLogin = useSelector((state) => state.cusLogin)
  const { loading, error, userInfo } = cusLogin;

  useEffect(() => {

    if (userInfo) {
      history.push("/cart");


    }

  }, [history, userInfo]);

  const submitHanler = async (e) => {

    e.preventDefault();
    dispatch(login(email, password));


  };



  return (

    // style = {{

    // }}


    // <div className="login-box">

    <div className="bg-info"
      style={{
        height: "100%",
        backgroundImage:
          "url(https://www.sagatraining.ca/wp-content/uploads/2018/10/background-images-for-login-form-8.jpg)",
          margin: "0",
          padding: "0",
          fontfamily: "sans-serif",
           backgroundsize: "cover",
      
      }}>

      <div class="container"
        style={{
          width: "280px",
          position: "absolute",
          top: "45%",
          left: "45%",
          transform: "translate(-50%,-50%)",
          color: "white",
        }}>

        


        <div
        class="h1"
        style={{
          float: "left",
          fontsize: "40px",
          borderbottom: "6px solid #2a83f8",
          marginbottom: "50px",
          padding: "13px 0",
        }}
        >
  <div
        class="textbox"
        style={{
          width: "100%",
          overflow: "hidden",
          fontsize: "20px",
          padding: "8px 0",
          margin: "8px 0",
          borderbottom: "1px solid #b503fc",
        }}
        >

          <h1>login</h1>
          <br></br>


        {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
        {error && <ErrorMesssage variant="warning">{error}</ErrorMesssage>}
        {loading && <Loading />}


        <Form onSubmit={submitHanler} >
          <Form.Group className="textbox" controlId="formBasicEmail">
            <i class="fas fa-user" aria-hidden="true"
                        style={{
                          width: "26px",
                          float: "left",
                          textalign: "center",
                        }}></i>
            <Form.Label>User name</Form.Label>
            <Form.Control type="text"
                    class="textbox"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "none",
                      color: "white",
                      fontsize: "18px",
                      width: "80%",
                      float: "left",
                      margin: "0 10px",
                    }}
              value={email}
              placeholder="Enter your username"
              onChange={(e) =>

                setmail(e.target.value)

              }

            />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <br></br> <br></br><br></br> 

          <Form.Group className="textbox" controlId="formBasicPassword">
            <i class="fas fa-lock" aria-hidden="true"
            style={{
              width: "26px",
              float: "left",
              textalign: "center",
            }}></i>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                                style={{
                                  border: "none",
                                  outline: "none",
                                  background: "none",
                                  color: "white",
                                  fontsize: "18px",
                                  width: "80%",
                                  float: "left",
                                  margin: "0 10px",
                                }}
              value={password}
              placeholder="Enter your password"
              onChange={(e) =>

                setpassword(e.target.value)

              }

            />
          </Form.Group>


          <br></br> <br></br>  <br></br> <br></br>
       

            <Row className="py-3"
               style={{
                border: "none",
                outline: "none",
                background: "none",
                color: "white",
                fontsize: "18px",
                float: "left",
         
              }}>
              <Col
              >
                New Customer  ? <Link to="/CusRegister">Register here</Link>
              </Col>
            </Row>


            <Button className="btn" type="submit"
                          style={{
                            width: "100%",
                            background: "none",
                            border: "5px solid #055f02",
                            color: "white",
                            padding: "5px",
                            fontsize: "18px",
                            cursor: "pointer",
                            margin: "12px 0",
                     
                          }}>
              Submit
            </Button>

       
        </Form>
      </div>
    </div>
    </div>
    </div>
 
  )

}
export default CustomerLogin
