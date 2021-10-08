import React ,{useEffect,useState} from "react"
import ErrorMesssage from "./ErrorMessage";
import axios from "axios";
import {Link , useHistory} from "react-router-dom";
import Loading from "./loading";





export default function (){

  const  [name,setname] = useState("");
  const  [email,setmail] = useState("");
  const  [phone,setPhone] = useState("");
  const  [gender,setGender] = useState("");
  const  [loginType,setLogin] = useState("");
  // const  [username,setusername] = useState("");
  const  [password,setpassword] = useState("");
  const  [repassword,setrepassword] = useState("");
  const  [pic,setpic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU");
  const  [message,setMessage] = useState(null); 
  const  [picMessage,setPicMessage] = useState(null); 
  const  [error,setError] = useState(false); 
  const  [loading,setLoading] = useState(false); 

  const history = useHistory();

 //  useEffect(() => {
///const userInfo = localStorage.getItem("userInfo");
   //   
   //   if(userInfo){
     //   history.push("/AdminRegister");
  //  }//
      
 //  },[history]);


  const  SubmiHandler = async (e) =>{
    e.preventDefault();

    
    if (password !== repassword){
      setMessage("Password do not match");

    }else{
      setMessage(null);
      try{
        const config = {
          headers:{
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
      pic } ,
      config
  );
  console.log(data);
  setLoading(false);
  localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){

setError(error.response.data.message);
    }

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
<center> <h1>Register Admin</h1></center><br></br>

  <div className="mb-3" >
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter your name" required
    onChange = {(e)=>{
   
      setname(e.target.value);

    }
    } />
    
    <div id="invalidCheck3Feedback" className="invalid-feedback"> </div>
  </div>
{/*   
  <div className="mb-3">
    <label htmlFor="email" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="email"  autocomplete="off" placeholder="Enter your E-mail" required
     onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div> */}


  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="phone" placeholder="124578655" pattern="[0-9]{9}" required
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
    <label htmlFor="email" className="form-label">User Name</label>
    <input type="email" className="form-control" id="email"  autocomplete="off" placeholder="Enter your E-mail" required
     onChange = {(e)=>{
   
      setmail(e.target.value);

    }
    } />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>



  

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$" placeholder="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" required
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
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="product" required 
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio1">Product</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="finacial"required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio2">Finacial</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="store" required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio3">Store</label>
</div>


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="quary" required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio3">Quary</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="quary" required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio3">Useer</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="quary" required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio3">delivery</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="quary" required
       onChange = {(e)=>{
   
        setLogin(e.target.value);
     
      }
      } />
  <label class="form-check-label" for="inlineRadio3">order</label>
</div>


<br></br>

  <button type="submit" className="btn btn-primary">Submit</button>
  <div>


</div>
</form>
</div>




)

}