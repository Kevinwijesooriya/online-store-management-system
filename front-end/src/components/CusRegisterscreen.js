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
  
  
    
<div className="login-box">
<h2>Register Customer</h2><br></br>


   
      {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
      {error && <ErrorMesssage variant="danger">{error}</ErrorMesssage>}
      {loading && <Loading/>}

<form onSubmit={SubmiHandler}>

  <div className="textbox" >
  <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter your name" required
    onChange = {(e)=>{
   
      setname(e.target.value);

    }
    } />
    <div id="invalidCheck3Feedback" className="invalid-feedback"> </div>
  </div>
  


  <div className="textbox">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="phone" placeholder="775477541" pattern="[0-9]{9}" required
     onChange = {(e)=>{
   
      setPhone(e.target.value);

    }
    } />
  </div>

  <label htmlFor="phone" className="form-label">Gender</label>
  <div >
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value = " male" required
       onChange = {(e)=>{
   
        setGender(e.target.value);
  
      }
      } />
  <label class="form-check-label" for="flexRadioDefault1">
      Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value = "female"required
       onChange = {(e)=>{
   
        setGender(e.target.value);
  
      }
      } />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>



{picMessage && (
<ErrorMesssage variant="danger">{picMessage}</ErrorMesssage>
)}
<div className="textbox">
    <input type="file" class="custom-file-input" id="validatedCustomFile"
          onChange = {(e)=>{
            
   
            postDetails(e.target.files[0])
           
          }}
         
    />
    <label class="custom-file-label" htmlFor="validatedCustomFile">Select your Image</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>





  
  <br></br>

<h2> Enter your Credentials</h2>

<div >
  <div className="textbox">
    <label htmlFor="email" className="form-label">User name</label>
    <input type="email" className="form-control" id="email" autocomplete="off" placeholder="Enter your E-mail" required
     onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    </div>
  </div>

  <div className="textbox">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$" placeholder="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" required
    onChange = {(e)=>{
   
      setpassword(e.target.value);
   
    }
    } />
  </div>

  <div className="textbox">
    <label htmlFor="Repassword" className="form-label">confirm Password</label>
    <input type="password" className="form-control" id="Repassword"  placeholder="Re enter your password"  required
     onChange = {(e)=>{
   
      setrepassword(e.target.value);
   
    }
    } />
  </div>

 



  
  <div >
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="customer" required 
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" forhtml="inlineRadio1">costomer</label>
</div>



<center>

<Button className="btn" type="submit">
    Submit
  </Button>
</center>

</form>
</div>




)

}