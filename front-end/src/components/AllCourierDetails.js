import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AllCourierDetails(){

    const[couriers, setCouriers] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>{
        function getCouriers(){
            axios.get("http://localhost:5000/courier").then((res) =>{ 
                setCouriers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getCouriers();
    },[])

    function Delete(id) {
        axios.delete(`http://localhost:5000/courier/delete/${id}`).then((res) => {
            alert("Courier Details Deleted SuccessFully")
        }).catch(err => { alert(err) });
    }

    const filteredCountrise = couriers.filter(std => {
        return (std.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            // std.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
            std.address.toLowerCase().includes(searchTerm.toLocaleLowerCase()) )
            //std.postal_code.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })

    return(
        <div className="container">
            <h1>All Courier Companies</h1>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>


            

<table className="table table-bordered border-primary">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((courier, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{courier.name}</td>
                        <td>{courier.address}</td>
                        <td>{courier.e_mail}</td>
                        <td>{courier.contact_no}</td>
                        <td>{courier.date_ob.substring(0, 10)}</td>
                        <td>
                            <center>
                            <Link className="btn btn-warning" to={"/courier/update/" + courier._id}>
                            <i className="fas fa-edit"></i>&nbsp;Edit</Link>
                            &nbsp;  &nbsp; &nbsp;
                            <a type="button" className="btn btn-danger" onClick={() => Delete(courier._id)} >
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            </center>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
