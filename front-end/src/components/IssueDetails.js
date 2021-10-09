import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function IssueDetails() {
  const[issueitem, setIssueitem] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    function getIssueitem() {
      axios
        .get("http://localhost:5000/issueitem/")
        .then(res => {
            setIssueitem(res.data);
        })
        .catch(err => {alert(err)});
    }
    getIssueitem();
  },[]);

  function Delete(id) {
    axios.delete(`http://localhost:5000/issueitem/delete/${id}`).then((res) => {
      alert("Issued Item Details Deleted")
    }).catch(err => {alert(err)});
  }

  const filteredCountrise = issueitem.filter(std => {
    return (std.product_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.model_number.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.issue_by.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

})

  return (<div className="container">
  <h2 align="center">Issued Items</h2>

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
                    <th scope="col">Issue By</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((issueitem, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{issueitem.product_name}</td>
                        <td>{issueitem.model_number}</td>
                        <td>{issueitem.issue_by}</td>
                        <td>{issueitem.quantity}</td>
                        <td>{issueitem.date.substring(0, 10)}</td>
                        <td>
                            <Link className="btn btn-warning" to={"/issueitem/update/" + issueitem._id}>
                            <i className="fas fa-edit"></i>&nbsp;Edit</Link>
                            &nbsp;
                            <button className="btn btn-danger" onClick={() => Delete(issueitem._id)} >
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

export default IssueDetails;