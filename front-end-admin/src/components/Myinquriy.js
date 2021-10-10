import React, { useStae, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Myinquriy() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inquiry, setinquiry] = useState([]);

    useEffect(() => {

        function getinquiry() {
            axios.get(`http://localhost:5000/inquiry/`).then((res) => {
                console.log(res);
                setinquiry(res.data);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getinquiry();
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/inquiry/delete/${id}`).then((res) => {
            alert(" inquriy Details Delete SuccessFully")
        }).catch(err => { alert(err) });
    }

    const filteredCountrise = inquiry.filter(std => {
        return (std.custom_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            // std.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
            std.item_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.itemcode.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.billnumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.inquriy_description.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })



    return (

        <div >
            <h1>your inquiris</h1>
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

            {/* {inquiry.map((std) =>(
                    <div>
                    <p>{std._id}</p>
                    <p>{std.custom_ID}</p>
                    <p>{std.custom_name}</p>
                    <p>{std.custom_address_code}</p>
                    <p>{std.custom_city}</p>
                    <p>{std.custom_province_name}</p>
                    <a href={`https://mail.google.com/mail/u/1/?ogbl#inbox`}>{std.custom_mail}</a>
                    <p>{std.custom_contact_number}</p>
                    <p>{std.item_name}</p>
                    <p>{std.itemcode}</p>
                    <p>{std.billnumber}</p>
                    <p>{std.inquriy_description}</p>
                    <p>{std.date_ob}</p>
 
                    <hr></hr>
                    </div>


              ))} */}





            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {/* <th scope="col">Name</th>
      <th scope="col">Contact number</th>
      <th scope="col">email</th> */}
                        <th scope="col">Item name</th>
                        <th scope="col">Item code</th>
                        <th scope="col">bill number</th>
                        <th scope="col">inquriy Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCountrise.map((std, index) => (

                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            {/* <td>{std.custom_name}</td>
             <td>{std.custom_contact_number}</td>
             <td>
             <a href={`https://mail.google.com/mail/u/1/?ogbl#inbox`}>{std.custom_mail}</a>
             </td> */}
                            <td>{std.item_name}</td>
                            <td>{std.itemcode}</td>
                            <td>{std.billnumber}</td>
                            <td>{std.inquriy_description}</td>
                            <td>{std.date_ob}</td>
                            <td>
                                <a className="btn btn-warning" href={`/myProfile/EdtI/${std._id}`} style={{ textDecoration: 'none', color: 'white' }}>edit</a> &nbsp;
                                <a className="btn btn-danger" href="/myProfile/Myinquriy" onClick={() => Delete(std._id)}>delete</a>
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