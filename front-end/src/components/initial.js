import React from "react";
import {Link} from 'react-router-dom';

function Initial(){


  //  useEffect(() => {
  //      const userInfo = localStorage.getItem("userInfo");
      
   //   if(userInfo){
    //    history.push("/");
    //  }
      
    //  },[history]);
      


return(
    

    <center >

        <h1>V-TECH</h1>
        <h3> online electronic accessaries sotore</h3>
        <br></br>

 
      <img src="https://discountupon.com/wp-content/uploads/2011/02/Online-Electronic-Stores.png" width="1200" height="200" />
     
      <br></br> <br></br> <br></br> <br></br> 

        <div className="container-sm"  >
        <h1>Select your login type</h1>

<div className="d-grid gap-2" >
    <Link to ="/Cuslogin" className = "nav-link"  >
<button type="button" className="btn btn-primary"> Login as a customer</button>
</Link>
   </div>

<div>
<Link to ="/Adminlogin" className = "nav-link" >
<button type="button" className="btn btn-info">   Login as an admin      </button>
</Link>
</div>

<div> 

<h6>Click here to rgister as a costomer</h6>

<Link to ="/CusRegister" className = "nav-link">click here to register+</Link>

</div>




</div>
</center>




)

}

export default  Initial;