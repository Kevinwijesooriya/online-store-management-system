

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
  const  [username,setusername] = useState("");
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
      history.push("/AdminMain");
       
    }
  
  },[history , userInfo]);


const SubmiHandler = async (e) =>{
  e.preventDefault();

  if (password !== repassword){

    setMessage("passwords do not match");

  }else{
    dispatch(register(name,email,phone,gender,loginType,username,password,pic));
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
  
    
<div className="container">

    <center>
      <img src="https://www.kindpng.com/picc/m/756-7564789_registration-icon-png-transparent-png.png" width="200" height="200" />
      </center>

      {message && <ErrorMesssage variant="danger">{message}</ErrorMesssage>}
      {error && <ErrorMesssage variant="danger">{error}</ErrorMesssage>}
      {loading && <Loading/>}

<form onSubmit={SubmiHandler}>
<center> <h1>Register Customer</h1></center><br></br>

  <div className="mb-3" >
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter your name" required
    onChange = {(e)=>{
   
      setname(e.target.value);

    }
    } />
    <div id="invalidCheck3Feedback" className="invalid-feedback"> </div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="email"  placeholder="Enter your E-mail" required
     onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter your Phone Number" required
     onChange = {(e)=>{
   
      setPhone(e.target.value);

    }
    } />
  </div>

  <label htmlFor="phone" className="form-label">Gender</label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value = "male" required
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

<br></br>

{picMessage && (
<ErrorMesssage variant="danger">{picMessage}</ErrorMesssage>
)}
<div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile"
          onChange = {(e)=>{
            
   
            postDetails(e.target.files[0])
           
          }}
         
    />
    <label class="custom-file-label" htmlFor="validatedCustomFile">Select your Image</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>





  
  <br></br><br></br><br></br>

<h2> Enter your Credentials</h2><br></br>

  <div className="mb-3">
    <label htmlFor="userName" className="form-label" >UserName</label>
    <input type="text" className="form-control" id="userName"  placeholder="Enter your Phone Number"   required
     onChange = {(e)=>{
   
      setusername(e.target.value);
   
    }
    }/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"    placeholder="Enter your password" required
    onChange = {(e)=>{
   
      setpassword(e.target.value);
   
    }
    } />
  </div>

  <div className="mb-3">
    <label htmlFor="Repassword" className="form-label">Re - Password</label>
    <input type="password" className="form-control" id="Repassword"  placeholder="Re enter your password"  required
     onChange = {(e)=>{
   
      setrepassword(e.target.value);
   
    }
    } />
  </div>

 



  
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="customer" required 
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" forhtml="inlineRadio1">costomer</label>
</div>

<br></br>

  <button type="submit" className="btn btn-primary">Submit</button>
  <div>


</div>
</form>
</div>




)

}