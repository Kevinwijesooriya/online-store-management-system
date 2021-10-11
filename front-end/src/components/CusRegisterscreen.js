import {Button , Col , Form , Row } from "react-bootstrap";
// import '../styles/registerCustomer.css';
import React ,{useEffect,useState} from "react"
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading"; 
import {useDispatch, useSelector} from "react-redux"; 
import { register } from "../actions/Cusations";
import {Link , useHistory} from "react-router-dom";





export default function (){




  const  [name,setname] = useState("");
  const  [email,setmail] = useState("");
  const  [phone,setPhone] = useState("");
  const  [gender,setGender] = useState("");
  const  [loginType,setLogin] = useState("");
  const  [password,setpassword] = useState("");
  const  [repassword,setrepassword] = useState("");
  const  [pic,setpic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU");
  const  [message,setMessage] = useState(null); 
  const  [picMessage,setPicMessage] = useState(null); 

 


  const dispatch = useDispatch();

  const cusRegister = useSelector ((state)=> state.cusRegister)


  const {loading , error , userInfo}  = cusRegister;
  const history = useHistory();

  useEffect(()=>{

    if (userInfo){
      history.push("/cart");
       
    }
  
  },[history , userInfo]);


const SubmiHandler = async (e) =>{
  e.preventDefault();

  if (password !== repassword){

    setMessage("passwords do not match");

  }else{
    dispatch(register(name,email,phone,gender,loginType,password,pic));
  }
 

     };
  
 



 
     const postDetails = (pics) =>{

      if(!pics){
      return setPicMessage("please select an Image");
      } 
      setPicMessage(null);

      if(pics.type === 'image/jpeg'|| pics.type === 'image/png'){
      const data = new FormData();
      data.append('file',pics)
      data.append('upload_preset','ITP_V-TECH')
      data.append('cloud_ name','v-tch')
      fetch("https://api.cloudinary.com/v1_1/v-tch/image/upload",{
        method:"post", 
        body: data,
      })
      .then ((res)=> res.json())
      .then((data) => {
        console.log(data);
        setpic(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
      
      }else{
        return setPicMessage("Please Slect an Image");
      }
      };


return (  
  
  <div className="bg-info"
      style={{
        height: "119%",
        backgroundImage:
          "url(https://www.sagatraining.ca/wp-content/uploads/2018/10/background-images-for-login-form-8.jpg)",
          backgroundsize: "cover",
          margin: "0",
          padding: "0",
          fontfamily: "sans-serif",
      
      }}>

      <div class="container"
        style={{
          width: "1000px",
          position: "absolute",
          top: "60%",
          left: "35%",
          transform: "translate(-50%,-50%)",
          color: "white",
        }}>
  
    
<div className="login-box">
  <center>
<h1>Customer Registration</h1>
</center>


   
      {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
      {error && <ErrorMesssage variant="danger">{error}</ErrorMesssage>}
      {loading && <Loading/>}

<form onSubmit={SubmiHandler}>
  
<br></br>
  <div className="textbox" >
  <h5 htmlFor="Name" className="form-label">Name</h5>
    <input type="text" className="form-control" id="name"  placeholder="Enter your name" required
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
    
    onChange = {(e)=>{
   
      setname(e.target.value);

    }
    } />
    <div id="invalidCheck3Feedback" className="invalid-feedback"> </div>
  </div>
  
<br></br><br></br> 

  <div >
    <h5 htmlFor="phone" className="form-label">Phone Number</h5>
    <input type="text" className="form-control" id="phone" placeholder="775477541" pattern="[0-9]{9}" required
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
     onChange = {(e)=>{
   
      setPhone(e.target.value);

    }
    } />
  </div>
    
<br></br> <br></br> 

  <lable htmlFor="phone" className="form-label">Gender</lable>
  <div >
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value = " male" required
  
       onChange = {(e)=>{
   
        setGender(e.target.value);
  
      }
      } />
  <lable class="form-check-label" for="flexRadioDefault1">
      Male
  </lable>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value = "female"required
       onChange = {(e)=>{
   
        setGender(e.target.value);
  
      }
      } />
  <h5 class="form-check-label" for="flexRadioDefault2">
    Female
  </h5>
</div>

    
<br></br>

{picMessage && (
<ErrorMesssage variant="danger">{picMessage}</ErrorMesssage>
)}
<div className="textbox">
    <input type="file" class="custom-file-input" id="validatedCustomFile"
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
          onChange = {(e)=>{
            
   
            postDetails(e.target.files[0])
           
          }}
         
    />
    <label class="custom-file-label" htmlFor="validatedCustomFile">Select your Image</label>
  </div>





  
  <br></br><br></br><br></br>

<h3> Enter your Credentials</h3>
<br></br>

<div >
  <div className="textbox">
    <h5 htmlFor="email" className="form-label">User name</h5>
    <input type="email" className="form-control" id="email" autocomplete="off" placeholder="Enter your E-mail" required
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
onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    </div>
  </div>
  <br></br><br></br>  

  <div className="textbox">
    <h5 htmlFor="password" className="form-label">Password</h5>
    <input type="password" className="form-control" id="password"    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$" placeholder="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" required
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
   onChange = {(e)=>{
   
      setpassword(e.target.value);
   
    }
    } />
  </div>
  <br></br><br></br>  
  <div className="textbox">
    <h5 htmlFor="Repassword" className="form-label">confirm Password</h5>
    <input type="password" className="form-control" id="Repassword"  placeholder="Re enter your password"  required
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
     onChange = {(e)=>{
   
      setrepassword(e.target.value);
   
    }
    } />
  </div>

 


  <br></br> <br></br> 
  
  <div >
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="customer" required 
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" forhtml="inlineRadio1">costomer</label>
</div>



<center>

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
</center>

</form>
</div>
</div>
</div>




)

}