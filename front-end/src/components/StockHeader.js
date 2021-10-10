import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link , useHistory} from 'react-router-dom';
import {logout} from "../actions/Cusations";

function Header() {

  const history = useHistory();

  const dispatch = useDispatch()
  const cusLogin= useSelector((state) => state.cusLogin);
  const { userInfo } = cusLogin;

  const logoutHandler = () => {
   dispatch(logout());
   history.push("/");    

  };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">V-TECH</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/Stock">Available Stock<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Stock/add">Add Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Stock/viewItems">New Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Stock/issue">Issue Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Stock/issueDetails">Issue Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Stock/reports">Reports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"onClick = {logoutHandler}>Logout</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;