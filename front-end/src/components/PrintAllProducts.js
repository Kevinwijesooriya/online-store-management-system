import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function AllProducts() {
  const[product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    function getProduct() {
      axios
        .get("http://localhost:5000/product/")
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => {alert(err)});
    }
    getProduct();
  },[]);

  function Delete(id) {
    axios.delete(`http://localhost:5000/product/delete/${id}`).then((res) => {
      alert("Product Details Deleted")
    }).catch(err => {alert(err)});
  }

  const filteredCountrise = product.filter(std => {
    return (std.product_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.model_number.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.category.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.supplier.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

})

  return (<div className="container">
  <h2 align="center">New Items</h2>

  <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
              <form class="d-flex">
                  <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search"
                      onChange={e => setSearchTerm(e.target.value)} />
              </form>
          </div>
      </nav>
      <table className="table table-bordered table-striped text-center">
            <thead className="thead-dark"><br/>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Model Number</th>
                    <th scope="col">Category</th>
                    <th scope="col">Specifications</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.product_name}</td>
                        <td>{product.model_number}</td>
                        <td>{product.category}</td>
                        <td>{product.specifications}</td>
                        <td>{product.supplier}</td>
                        <td>{product.quantity}</td>
                        <td>{product.date.substring(0, 10)}</td>
                        <td>
                            <Link className="btn btn-warning" to={"/product/update/" + product._id}>
                            <i className="fas fa-edit"></i>&nbsp;Edit</Link>
                            &nbsp;
                            <button className="btn btn-danger" onClick={() => Delete(product._id)} >
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br /><br /><br />
      </div>);
}

export default AllProducts;