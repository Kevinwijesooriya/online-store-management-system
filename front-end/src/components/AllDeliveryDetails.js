import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./OrderStyles.css";
import { useSelector} from "react-redux";

export default function AllDeliveryDetails(){

    const[deliveries, setDeliveries] = useState([]);
    const customerID = useSelector((state) => state.cusLogin.userInfo._id);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>{
        function getDeliveries(){
            axios.get(`http://localhost:5000/delivery/cgot/${customerID}`).then((res) =>{ 
                setDeliveries(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDeliveries();
    },[])

    function Delete(id) {
        axios.delete(`http://localhost:5000/delivery/delete/${id}`).then((res) => {
            alert("Delivery Details Deleted SuccessFully")
        }).catch(err => { alert(err) });
    }

    const filteredCountrise = deliveries.filter(std => {
        return (std.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            // std.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
            std.address.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.street.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.city.toLowerCase().includes(searchTerm.toLocaleLowerCase()) )
            //std.postal_code.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })

    return(
        <div className="container">
            <div>
            <h1>All Delivery Details</h1>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <Link className="btn btn-success" to={"/profile/AddCusDeliveryDetails"}>
                            <i className="fas fa-edit"></i>&nbsp;Add New Delivery address</Link>
                </div>
            </nav>

            

<table className="table table-bordered border-primary">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((delivery, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{delivery.name}</td>
                        <td>{delivery.address}</td>
                        <td>{delivery.street}</td>
                        <td>{delivery.city}</td>
                        <td>{delivery.postal_code}</td>
                        <td>{delivery.date_ob.substring(0, 10)}</td>
                        <td>
                            <center>
                            <Link className="btn btn-warning" to={"/profile/UpdateDeliveryDetails/" + delivery._id}>
                            <i className="fas fa-edit"></i>&nbsp;Edit</Link>
                            &nbsp;  &nbsp; &nbsp;
                            <a href="/profile/delivery" type="button" className="btn btn-danger" onClick={() => Delete(delivery._id)} >
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            </center>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    )
}
