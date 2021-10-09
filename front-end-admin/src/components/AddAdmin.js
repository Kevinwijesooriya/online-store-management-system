import React ,{useState} from "react"
import axios from "axios";


export default function AddAdmin(){

  const  [name,setname] = useState("");
  const  [email,setmail] = useState("");
  const  [phone,setPhone] = useState("");
  const  [gender,setGender] = useState("");
  const  [loginType,setLogin] = useState("");
  const  [username,setusername] = useState("");
  const  [password,setpassword] = useState("");
  const  [repassword,setrepassword] = useState("");

function sendData(e){
  e.preventDefault();
 
     const newAdmin ={
      name,
      email,
      phone,
      gender,
      loginType,
      username,
      password,
      repassword
     }

    axios.post("http://localhost:5000/admin/add",newAdmin).then(()=>{
      alert ("admin added")
      setname("");
      setmail("");
      setPhone("");
      setGender("");
      setLogin("");
      setusername("");
      setpassword("");
      setrepassword("");
      

    }).catch((err)=>{
      alert(err)
    })

}



return (  
  <div className="container">
<form onSubmit={sendData}>
<center> <h1>Register an Employee</h1></center><br></br>

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


<br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>



)

}