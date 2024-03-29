import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link , useHistory} from 'react-router-dom';
import {logout} from "../actions/Cusations";

function Header(){
  const history = useHistory();

  const dispatch = useDispatch()
  const cusLogin= useSelector((state) => state.cusLogin);
  const { userInfo } = cusLogin;

  const logoutHandler = () => {
   dispatch(logout());
   history.push("/");    

  };


return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" title ={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to ="/#" className = "nav-link">Notes</Link>
        </li>
        <li className="nav-item">
        <Link to ="/myProfile"  className = "nav-link">My Profile</Link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#"
          onClick = {logoutHandler}
        
          
          >logout</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

)

}

export default  Header;