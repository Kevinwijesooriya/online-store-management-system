import React, { useStae, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";



// ======== STYLING IMORTS ===========
import "./OrderStyles.css";
import { AiOutlineEdit} from "react-icons/ai";
import { MdDelete} from "react-icons/md";
import { grey } from "@material-ui/core/colors";



export default function Myinquriy() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inquiry, setinquiry] = useState([]);
    const customerID = useSelector((state) => state.cusLogin.userInfo._id);
    useEffect(() => {

        function getinquiry() {
            axios.get(`http://localhost:5000/inquiry/cgot/${customerID}`).then((res) => {
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

        <div className="oneDetail" >
            <h1>your inquiris</h1>
            <nav className="p-3 mb-2 bg-transparent text-dark">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>

            {filteredCountrise.map((std) =>(
                    <div  className="container">
                    <div  className="oneDetail">
                    {/* <p> id {std._id}</p>
                    <p> custom id  {std.custom_ID}</p> */}
                    
                    <div class="row">
                    <div class="col">
                        Name&nbsp;{std.custom_name}
                       <br/>
                        Email <a href={`https://mail.google.com/mail/u/1/?ogbl#inbox`}>{std.custom_mail}</a>
                       <br/>
                        Number {std.custom_contact_number}
                       <br/>
                        Postal code {std.custom_address_code}
                       <br/>
                        Address  {std.custom_streat_address} {std.custom_city} {std.custom_province_name}
                    </div>
                    <div class="col">
                    <p>Item name: &nbsp; {std.item_name}</p>
                    <p>Item code: &nbsp;{std.itemcode}</p>
                    <p>Item bill number: &nbsp;{std.billnumber}</p>
                    </div>
                    </div>
                    <div class="row g-0">
                    <div class="col-6 col-md-4">
                     <h1></h1>
                     </div>
                     
                     <div class="col-sm-6 col-md-8">
                     <div class="row">  
                     <div class="col"></div> 
                     <div class="col">
                      <p></p>
                    </div>
                        <div class="col">
                    <p></p>
                    </div>
                    <div class="col">
                    <p></p>
                    </div>
                    </div>


                    <p></p>
                    <p></p>
                    <div class="oneDetail">
                    <div class="row">
                    <p>{std.inquriy_description}</p>
                    </div>
                    <div class="row"></div>
                    <div class="row">
                    <div class="col"></div>
                    <div class="col"></div>
                     <div class="col">
                         <br/>
                    <p>{std.date_ob}</p>
                    </div>
                    </div>
                    </div>
                    <div class="row">  
                     <div class="col"></div>
                     <div class="col"></div>
                     <div class="col">
                         <br/>
                    <a className="btn btn-warning" href={`/Profile/EdtI/${std._id}`} style={{ textDecoration: 'none', color: 'white' }}><AiOutlineEdit/>&nbsp;Edit</a> &nbsp;
                                <a className="btn btn-danger" href="/Profile/Myinquriy" onClick={() => Delete(std._id)}><MdDelete/>&nbsp;Delete</a>
                                </div>
                                </div>
                    </div>
                    </div>
                    <hr></hr>
                    </div>
                    </div>

              ))}




{/* 
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
      <th scope="col">Contact number</th>
      <th scope="col">email</th>
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
                            <td>{std.custom_name}</td>
             <td>{std.custom_contact_number}</td>
             <td>
             <a href={`https://mail.google.com/mail/u/1/?ogbl#inbox`}>{std.custom_mail}</a>
             </td>
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
                    <tr>
      <th scope="row">1</th>
      <td>{std._id}</td>
      <td>{std.name}</td>
      <td>{std.age}</td>
      <td>{std.gender}</td>
      <td>{std.date_ob}</td>
    </tr>
                </tbody>
            </table> */}


        </div>


    )
}