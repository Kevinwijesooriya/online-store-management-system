import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

export default function Editinquiry(props) {

    const { id } = useParams();
    let history = useHistory();

    const [custom_ID, set_custom_ID] = useState("");
    const [custom_name, set_Custom_Name] = useState("");
    const [custom_address_code, set_custom_address_code] = useState("");
    const [custom_streat_address, set_custom_streat_address] = useState("");
    const [custom_city, set_custom_city] = useState("");
    const [custom_province_name, set_custom_province_name] = useState("");
    const [custom_mail, set_custom_mail] = useState("");
    const [custom_contact_number, set_custom_contact_number] = useState("");
    const [item_name, set_item_name] = useState("");
    const [itemcode, set_itemcode] = useState("");
    const [billnumber, set_billnumber] = useState("");
    const [type_of_inquiry, set_type_of_inquiry] = useState("");
    const [inquriy_description, set_inquriy_description] = useState("");
    const [inquiry, setinquiry] = useState({

        custom_name: "",
        custom_address_code: "",
        custom_streat_address: "",
        custom_city: "",
        custom_province_name: "",
        custom_mail: "",
        custom_contact_number: "",
        item_name: "",
        itemcode: "",
        billnumber: "",
        type_of_inquiry: "",
        inquriy_description: ""


    });




    function sendData(e) {
        e.preventDefault();

        const newinquiry = {
            custom_ID: "6139e6e813ebc16dec25059",
            custom_name,
            custom_address_code,
            custom_streat_address,
            custom_city,
            custom_province_name,
            custom_mail,
            custom_contact_number,
            item_name,
            itemcode,
            billnumber,
            type_of_inquiry,
            inquriy_description,
        }

        console.log(newinquiry);
        alert("insert inquiry")

        axios.put(`http://localhost:5000/inquiry/update/${id}`, newinquiry).then(() => {
            alert("update inquiry")
            history.push("/myProfile/Myinquriy");
        }).catch((err) => {
            alert(err)
        })

    }


    useEffect(() => {

        function getinquiry() {
            axios.get(`http://localhost:5000/inquiry/get/${id}`).then((res) => {
                console.log(res);
                setinquiry(res.data.inquiry);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getinquiry();
    }, []);





    return (

        <div className="container">

            {/* inquiry form */}
            <form onSubmit={sendData}>

                <div className="mb-3">
                    <label htmlFor="set_Custom_Name" className="form-label" >name</label>
                    <input type="text" className="form-control" id="set_Custom_Name" placeholder="Enter inquiry name" Value={`${inquiry.custom_name}`}
                        onChange={(e) => {
                            set_Custom_Name(e.target.value);
                        }} disabled readonly />
                </div>

                <div className="mb-3">
                    <label htmlFor="custom_address_code" className="form-label">address code</label>
                    <input type="text" className="form-control" id="custom_address_code" placeholder=" Enter address code" Value={`${inquiry.custom_address_code}`}
                        onChange={(e) => {
                            set_custom_address_code(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="custom_streat_address" className="form-label">streat address</label>
                    <input type="text" className="form-control" id="custom_streat_address" placeholder="Enter streat address" Value={`${inquiry.custom_streat_address}`}
                        onChange={(e) => {
                            set_custom_streat_address(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_custom_city" className="form-label">city</label>
                    <input type="text" className="form-control" id="set_custom_city" placeholder="Enter city" Value={`${inquiry.custom_city}`}
                        onChange={(e) => {
                            set_custom_city(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_custom_province_name" className="form-label">province name</label>
                    <input type="text" className="form-control" id="set_custom_province_name" placeholder="Enter province name" Value={`${inquiry.custom_province_name}`}
                        onChange={(e) => {
                            set_custom_province_name(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_custom_mail" className="form-label">mail</label>
                    <input type="email" className="form-control" id="set_custom_mail" placeholder="Enter mail" Value={`${inquiry.custom_mail}`}
                        onChange={(e) => {
                            set_custom_mail(e.target.value);
                        }}
                        required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* contact number */}
                <div className="mb-3">
                    <label htmlFor="set_custom_contact_number" className="form-label">contact number</label>
                    <input type="text" className="form-control" id="set_custom_contact_number" placeholder="Enter contact number" Value={`${inquiry.custom_contact_number}`}
                        onChange={(e) => {
                            set_custom_contact_number(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_item_name" className="form-label">item name</label>
                    <input type="text" className="form-control" id="set_item_name" placeholder="Enter item name" Value={`${inquiry.item_name}`}
                        onChange={(e) => {
                            set_item_name(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_itemcode" className="form-label">itemcode</label>
                    <input type="text" className="form-control" id="set_itemcode" placeholder="Enter itemcode" Value={`${inquiry.itemcode}`}
                        onChange={(e) => {
                            set_itemcode(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_billnumber" className="form-label">bill number</label>
                    <input type="text" className="form-control" id="set_billnumber" placeholder="Enter billnumber" Value={`${inquiry.billnumber}`}
                        onChange={(e) => {
                            set_billnumber(e.target.value);
                        }}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_type_of_inquiry" className="form-label">type of inquiry</label>
                    <input type="text" className="form-control" id="set_type_of_inquiry" placeholder="Enter type of inquiry" Value={`${inquiry.type_of_inquiry}`}
                        onChange={(e) => {
                            set_type_of_inquiry(e.target.value);
                        }}
                        required />
                </div>


                <div className="mb-3">
                    <label htmlFor="set_inquriy_description" className="form-label">inquriy description</label>
                    <input type="text" className="form-control" id="set_inquriy_description" placeholder="Enter inquiry description" Value={`${inquiry.inquriy_description}`}
                        onChange={(e) => {
                            set_inquriy_description(e.target.value);
                        }}
                        required />
                </div>




                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )


}