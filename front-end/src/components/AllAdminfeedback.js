import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { MdDelete } from "react-icons/md"
 

function AllAdminfeedback() {

    const [Adminfeedback, setAdminfeedback] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        function getAdminfeedback() {
            axios
                .get("http://localhost:5000/adminfeedback/")
                .then(res => {
                    setAdminfeedback(res.data);
                })
                .catch(err => { alert(err) });
        }
        getAdminfeedback();
    }, []);

    function onDelete(id) {
        axios.delete(`http://localhost:5000/adminfeedback/delete/${id}`).then((res) => {
            alert("Feedback Deleted SuccessFully")
        }).catch(err => { alert(err) });
    }

    // filterData(cart,searchkey){
    //   const result = cart.filter((cart) =>
    //  cart.firstName.toLowerCase().includes(searchkey)||
    //  cart.lastName.toLowerCase().includes(searchkey)
    //   )
    //   this.setState({cart:result})
    // }

    // handleSearchArea=(e)=>{
    //   const searchkey = e.currentTarget.value;

    //   axios.get("http://localhost:5000/cart").then(res =>{
    //     if(res.data.success){
    //       this.filterData(res.data.existingcart,searchkey)
    //     }
    //   });
    // }

    const filteredCountrise = Adminfeedback.filter(af => {
        return (af.admin_email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            af.issue.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })

    return (<div className="container">
        <h2>Admin Feedback</h2>

        <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">

                        <div class="input-group col-md-4">
                        <input class="form-control py-2 border-right-0 border"  type="search" placeholder="Search" aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)} />
                     <span class="input-group-append">
                       <button class="btn btn-outline-secondary border-left-0 border" type="button">
                    <i class="fa fa-search"></i>
                       </button>
                     </span> 
                        </div>
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>

        <table className="table table-bordered border-primary">
            <thead className="thead-dark"><br/>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Issue</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((adminfeedback, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{adminfeedback.admin_email}</td>
                        <td>{adminfeedback.issue}</td>
                        <td>{adminfeedback.date_ob.substring(0, 10)}</td>
                        <td>
                            <Link className="btn btn-success" to={"/adminfeedback/update/" + adminfeedback._id}>Edit</Link>
                            &nbsp;
                            <button className="btn btn-danger" onClick={() => onDelete(adminfeedback._id)} >
                            <MdDelete /> Delete
                            </button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br /><br /><br />
    </div>);

}
export default AllAdminfeedback;