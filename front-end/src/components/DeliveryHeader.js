import React from "react";
import {Link} from 'react-router-dom';

function DeliveryHeader(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#" style={{color:"red"}}>Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item">
        <Link to="/deli/add" className="nav-link">Add Delivery Details</Link>
      </li>

      <li className="nav-item">
        <Link to="/cou/add" className="nav-link">Add Courier Details</Link>
      </li>

      <li className="nav-item active">
      <Link to="/delivery" className="nav-link">All Delivery Details</Link>  
      </li>

      <li className="nav-item">
        <Link to="/courier" className="nav-link">All Courier Details</Link>
      </li>

     

      
      
    </ul>
  </div>
</nav>
    )
}

export default DeliveryHeader;