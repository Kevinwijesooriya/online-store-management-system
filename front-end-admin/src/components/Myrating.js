import React, { useStae, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Myrating() {
    const [searchTerm, setSearchTerm] = useState('');
    const [rating, setrating] = useState([]);
    // const id = "6124fac7f10e9c4078b2d16f";
    useEffect(() => {

        function getrating() {
            axios.get(`http://localhost:5000/Feedback/`).then((res) => {
                console.log(res);
                setrating(res.data);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getrating();
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/Feedback/delete/${id}`).then((res) => {
            alert(" Delete SuccessFully")
        }).catch(err => { alert(err) });
    }
    const filteredCountrise = rating.filter(rtd => {
        return (rtd.custom_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            rtd.comment.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })



    return (

        <div >
            <h1>All commints</h1>
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

            {/* {rating.map((rtd) =>(
                    <div>
                    <p>{rtd._id}</p>
                    <p>{rtd.custom_name}</p>
                    <p>{rtd.rate}</p>
                    <p>{rtd.comment}</p>
                    <p>{rtd.date_ob}</p>
                   
                    <hr></hr>
                    </div>


              ))} */}



            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {/* <th scope="col">ID Number</th> */}
                        <th scope="col"> item Name</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Commit</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCountrise.map((rtd, index) => (

                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            {/* <td>{rtd._id}</td> */}
                            <td>{rtd.item_name}</td>
                            <td>{rtd.rate}</td>
                            <td>{rtd.comment}</td>
                            <td>{rtd.date_ob}</td>
                            <td>
                                {/* <a className="btn btn-warning" href={`#`}>edit</a> &nbsp; */}
                                <a className="btn btn-danger" href="/myProfile/Myrating" onClick={() => Delete(rtd._id)}>delete</a>
                            </td>
                        </tr>



                    ))}
                </tbody>
                <tbody>
                    {/* <tr>
      <th scope="row">1</th>
      <td>{std._id}</td>
      <td>{std.name}</td>
      <td>{std.age}</td>
      <td>{std.gender}</td>
      <td>{std.date_ob}</td>
    </tr> */}
                </tbody>
            </table>


        </div>


    )
}