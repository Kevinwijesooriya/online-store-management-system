import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateCourierDetails(){

    let history = useHistory();
    const { id } = useParams();

    const [courier, updateCourierDetails] = useState({
        name:"",
        address:"",
        e_mail:"",
        contact_no:""
    });


    const { name,
        address,
        e_mail,
        contact_no} = courier;

        const onInputChange = (e, input_field) => {
        updateCourierDetails({ ...courier, [input_field]: e.target.value });

        };

    async function onSubmit (e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/courier/update/${id}`, courier)
        .then(response => {
            alert("Successfully Updated Courier Details");
            history.push("/admin/courier");
            console.log(response);
          })      
        .catch((err) => {alert(err)});
    }

    const loadcourier = async () => {
        const res = await axios.get
            (`http://localhost:5000/courier/get/${id}`)
        updateCourierDetails(res.data.courier)
    }
    useEffect(() => {
        loadcourier();
    }, []);

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Edit Courier Company Information</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form className="row g-3" onSubmit={onSubmit}>
                <div className="flex flex-wrap">

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Company Name</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Company Name" defaultValue={name} onChange={e => onInputChange(e, "name")
                        }></input>
                    </div>

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Company Address</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Company Address" defaultValue={address} onChange={e => onInputChange(e, "address")}>
                        </input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Company Email</label>
                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         autocomplete="off" placeholder="name@gmail.com" defaultValue={e_mail} onChange={e => onInputChange(e, "e_mail")}>
                        </input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Company Conact Number</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="771234567" pattern="[0-9]{9}" defaultValue={contact_no} onChange={e => onInputChange(e, "contact_no")}>
                        </input>
                    </div>
                    <div className="relative w-full mb-3">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                         type="submit">Update Courier Details</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateCourierDetails;