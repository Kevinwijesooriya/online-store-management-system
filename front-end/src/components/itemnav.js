import React,{useState,useEffect} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

function DisplayItems(){

    
    
    return(
        <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">V-TECH</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/productadd">Add Item <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/productupdate">Update Item</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/productdelete">Delete Item</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/itemreport">New Item Report</a>
      </li>
     
      
    </ul>
    
  </div>
</nav>
                </div>
           

                
       
    )

}

export default DisplayItems