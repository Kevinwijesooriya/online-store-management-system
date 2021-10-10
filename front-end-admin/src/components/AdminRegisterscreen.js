import React, { useEffect, useState } from "react"
import ErrorMesssage from "./ErrorMessage";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loading from "./loading";





export default function () {

  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [loginType, setLogin] = useState("");
  // const  [username,setusername] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [pic, setpic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  //  useEffect(() => {
  ///const userInfo = localStorage.getItem("userInfo");
  //   
  //   if(userInfo){
  //   history.push("/AdminRegister");
  //  }//

  //  },[history]);


  const SubmiHandler = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setMessage("Password do not match");

    } else {
      setMessage(null);
      window.location = '/AdminList';
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },

        };

        setLoading(true);

        const { data } = await axios.post(

          "http://localhost:5000/admin/",
          {
            name,
            email,
            phone,
            gender,
            loginType,
            password,
            pic
          },
          config
        );
        console.log(data);
        setLoading(false);
        // localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {

        setError(error.response.data.message);
      }

    }
  };


  const postDetails = (pics) => {

    if (!pics) {
      return setPicMessage("please select an Image");
    }
    setPicMessage(null);

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset', 'ITP_V-TECH')
      data.append('cloud_ name', 'v-tch')
      fetch("https://api.cloudinary.com/v1_1/v-tch/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setpic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      return setPicMessage("Please Slect an Image");
    }
  };


  return (


    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    ADMIN REGISTRATION
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <center>
                    <img
                      alt="..."
                      className="w-6/12 sm:w-4/12 px-4"
                      src={require("assets/img/registration.svg").default}
                    />
                  </center>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>

              {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
              {error && <ErrorMesssage variant="danger">{error}</ErrorMesssage>}
              {loading && <Loading />}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={SubmiHandler}>


                  <div className="relative w-full mb-3" >
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">Name</label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="name" placeholder="Enter your name" required
                      onChange={(e) => {
                        setname(e.target.value);
                      }
                      } />

                    <div id="invalidCheck3Feedback" className="invalid-feedback">
                    </div>
                  </div>
                  {/*   
  <div className="relative w-full mb-3">
    <label htmlFor="email" className="form-label">E-mail</label>
    <input type="email"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
     id="email"  autocomplete="off" placeholder="Enter your E-mail" required
     onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div> */}


                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">Phone Number</label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="phone" placeholder="777363546" pattern="[0-9]{9}" required
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }
                      } />
                  </div>

                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">Gender</label>



                  <div className="flex flex-wrap">
                    <div class="relativew-full px-4 md:w-2/12">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" required
                        onChange={(e) => {
                          setGender(e.target.value);
                        }
                        } />
                    </div>
                    <div class="relativew-full px-4 md:w-10/12">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Male
                      </label>
                    </div>
                  </div>


                  <div className="flex flex-wrap">
                    <div class="relativew-full px-4 md:w-2/12">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="female" required
                        onChange={(e) => {
                          setGender(e.target.value);
                        }
                        } />
                    </div>
                    <div class="relativew-full px-4 md:w-10/12">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Female
                      </label>
                    </div>
                  </div>



                  <br></br>

                  {picMessage && (
                    <ErrorMesssage variant="danger">{picMessage}</ErrorMesssage>
                  )}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">Select your Image</label>
                    <input type="file" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="validatedCustomFile"
                      onChange={(e) => {
                        postDetails(e.target.files[0])
                      }}
                    />
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Enter your Credentials
                  </h6>

                  <br></br>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">User Name</label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="email" autocomplete="off" placeholder="Enter your E-mail" required
                      onChange={(e) => {
                        setmail(e.target.value);
                      }
                      } />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">Password</label>
                    <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$" placeholder="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" required
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }
                      } />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">confirm Password</label>
                    <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="Repassword" placeholder="Re enter your password" required
                      onChange={(e) => {
                        setrepassword(e.target.value);
                      }
                      } />
                  </div>

                  <br></br>
                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="product" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">Product manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="finacial" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">Financial manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="store" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">Stock manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="inquiry" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">Inquiry manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="user" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">user manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="delivery" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">delivery manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="relative w-full mb-3">

                    <div className="flex flex-wrap">
                      <div class="relativew-full px-4 md:w-2/12">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="order" required
                          onChange={(e) => {
                            setLogin(e.target.value);
                          }
                          } />
                      </div>
                      <div class="relativew-full px-4 md:w-10/12">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password">order manager</label>
                      </div>
                    </div>

                  </div>

                  <div className="text-center mt-6">
                    <button type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    >Create Account</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>




  )

}