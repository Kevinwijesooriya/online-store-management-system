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


        
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="Navbar"><a className="navbar-brand" href="#">V-TECH</a></div>             
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link"  to="salaryplan/add">Add Salary Plan</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="salaryplan/update">Update</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="salaryplan/">View </Link>
                </li>                    
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>)

}

export default  Header;
