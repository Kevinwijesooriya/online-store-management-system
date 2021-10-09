import React, { useState, useEffect } from "react";
import axios from 'axios';

function AvailableStock() {
  const[product, setProduct] = useState([]);

  useEffect(() => {
    function getProduct() {
      axios
        .get("http://localhost:5000/InStock/")
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => {alert(err)});
    }
    getProduct();
  },[]);

  return(
    <div className="container">&nbsp;
      <h2 align="center">Available Stock</h2>&nbsp;
      <table class="table table-bordered table-striped text-center">
        <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col">Model Number</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.product_name}</td>
              <td>{product.model_number}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}  
        </tbody>
      </table>
    </div>
    );

}

export default AvailableStock;





















{/*class AvailableStock extends React.Component {
  render() {
    return(
    <div className="container">&nbsp;
      <h2 align="center">Available Stock</h2>&nbsp;
      <table class="table table-bordered table-striped text-center">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Item Name</th>
          <th scope="col">Model Number</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      </table>
    </div>
    );
  } 
} 

export default AvailableStock; */}

